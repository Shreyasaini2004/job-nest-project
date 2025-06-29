import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Job } from '@/contexts/SavedJobsContext';

// Type for a job with reminder information
export interface SavedJob extends Job {
  reminderSet?: boolean;
  deadline?: Date;
  notes?: string;
}

// Keys for local storage
const SAVED_JOBS_KEY = 'savedJobs';

/**
 * Get all saved jobs from local storage
 */
const getSavedJobs = async (): Promise<SavedJob[]> => {
  const savedJobsJson = localStorage.getItem(SAVED_JOBS_KEY);
  if (!savedJobsJson) return [];
  
  try {
    // Parse the JSON and convert date strings back to Date objects
    return JSON.parse(savedJobsJson, (key, value) => {
      if (key === 'deadline' && value) {
        return new Date(value);
      }
      return value;
    });
  } catch (error) {
    console.error('Error parsing saved jobs:', error);
    return [];
  }
};

/**
 * Save jobs to local storage
 */
const saveJobsToStorage = async (jobs: SavedJob[]): Promise<SavedJob[]> => {
  localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(jobs));
  return jobs;
};

/**
 * Add a job to saved jobs
 */
const addSavedJob = async (job: Job): Promise<SavedJob[]> => {
  const currentJobs = await getSavedJobs();
  
  // Check if job already exists
  if (currentJobs.some(j => j.id === job.id)) {
    return currentJobs;
  }
  
  // Add the new job
  const newJobs = [...currentJobs, { ...job, reminderSet: false }];
  return saveJobsToStorage(newJobs);
};

/**
 * Remove a job from saved jobs
 */
const removeSavedJob = async (jobId: string): Promise<SavedJob[]> => {
  const currentJobs = await getSavedJobs();
  const newJobs = currentJobs.filter(job => job.id !== jobId);
  return saveJobsToStorage(newJobs);
};

/**
 * Update a job's reminder settings
 */
const updateJobReminder = async ({
  jobId,
  reminderSet,
  deadline,
  notes,
}: {
  jobId: string;
  reminderSet: boolean;
  deadline?: Date;
  notes?: string;
}): Promise<SavedJob[]> => {
  const currentJobs = await getSavedJobs();
  
  const newJobs = currentJobs.map(job => {
    if (job.id === jobId) {
      return {
        ...job,
        reminderSet,
        deadline: reminderSet ? deadline : undefined,
        notes: reminderSet ? notes : undefined,
      };
    }
    return job;
  });
  
  return saveJobsToStorage(newJobs);
};

/**
 * Custom hook for managing saved jobs with React Query
 */
export function useSavedJobsQuery() {
  const queryClient = useQueryClient();
  
  // Query for getting saved jobs
  const savedJobsQuery = useQuery<SavedJob[], Error>({
    queryKey: ['savedJobs'],
    queryFn: getSavedJobs,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  
  // Mutation for adding a job
  const addJobMutation = useMutation<SavedJob[], Error, Job>({
    mutationFn: addSavedJob,
    onSuccess: (data) => {
      queryClient.setQueryData(['savedJobs'], data);
    },
  });
  
  // Mutation for removing a job
  const removeJobMutation = useMutation<SavedJob[], Error, string>({
    mutationFn: removeSavedJob,
    onSuccess: (data) => {
      queryClient.setQueryData(['savedJobs'], data);
    },
  });
  
  // Mutation for updating a job's reminder
  const updateReminderMutation = useMutation<
    SavedJob[],
    Error,
    { jobId: string; reminderSet: boolean; deadline?: Date; notes?: string }
  >({
    mutationFn: updateJobReminder,
    onSuccess: (data) => {
      queryClient.setQueryData(['savedJobs'], data);
    },
  });
  
  return {
    // Data and loading states
    savedJobs: savedJobsQuery.data || [],
    isLoading: savedJobsQuery.isLoading,
    isError: savedJobsQuery.isError,
    error: savedJobsQuery.error,
    
    // Actions
    addJob: (job: Job) => addJobMutation.mutate(job),
    removeJob: (jobId: string) => removeJobMutation.mutate(jobId),
    updateReminder: (params: { jobId: string; reminderSet: boolean; deadline?: Date; notes?: string }) => 
      updateReminderMutation.mutate(params),
    
    // Helper function to check if a job is saved
    isJobSaved: (jobId: string) => {
      return (savedJobsQuery.data || []).some(job => job.id === jobId);
    },
    
    // Get upcoming deadlines (jobs with reminders set and deadlines in the future)
    getUpcomingDeadlines: (limit?: number) => {
      const jobs = savedJobsQuery.data || [];
      const deadlines = jobs
        .filter(job => job.reminderSet && job.deadline && job.deadline > new Date())
        .sort((a, b) => {
          if (a.deadline && b.deadline) {
            return a.deadline.getTime() - b.deadline.getTime();
          }
          return 0;
        });
      
      return limit ? deadlines.slice(0, limit) : deadlines;
    },
  };
}
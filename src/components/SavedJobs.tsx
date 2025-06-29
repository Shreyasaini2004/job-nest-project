import { useState } from "react";
import { Filter, Loader2, AlertCircle } from "lucide-react";
import { useSavedJobs } from "@/contexts/SavedJobsContext";
import SavedJobFilters from "./SavedJobFilters";
import UpcomingDeadlines from "./UpcomingDeadlines";
import SavedJobCard from "./SavedJobCard";
import SavedJobsEmptyState from "./SavedJobsEmptyState";
import ErrorBoundary from "./ErrorBoundary";
import { useSavedJobsQuery } from "@/lib/hooks/useSavedJobsQuery";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Button } from "./ui/button";

const SavedJobs = () => {
  // Legacy context - will be replaced by React Query in production
  const legacyContext = useSavedJobs();
  
  // Use our React Query hook for saved jobs
  const {
    savedJobs,
    isLoading,
    isError,
    error,
    removeJob,
    updateReminder,
    getUpcomingDeadlines
  } = useSavedJobsQuery();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [showRemindersOnly, setShowRemindersOnly] = useState(false);

  // Filter jobs based on search term, job type, and reminders filter
  const filteredJobs = savedJobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || job.type.toLowerCase() === filterType.toLowerCase();
    const matchesReminder = !showRemindersOnly || job.reminderSet;
    
    return matchesSearch && matchesType && matchesReminder;
  });

  // Get upcoming deadlines (jobs with reminders set and deadlines in the future)
  const upcomingDeadlines = getUpcomingDeadlines(3); // Show only the 3 most imminent deadlines

  return (
    <ErrorBoundary>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-job-primary/10 to-job-accent/10 rounded-xl p-8 border border-job-primary/20">
          <h1 className="text-3xl font-bold text-foreground mb-3">
            🔖 Your Saved Jobs
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Keep track of interesting opportunities and never miss application deadlines with reminders.
          </p>
        </div>

        {/* Upcoming Deadlines Section */}
        {isLoading ? (
          <div className="flex justify-center items-center p-6 bg-muted/50 rounded-lg">
            <Loader2 className="h-5 w-5 animate-spin text-job-primary mr-2" />
            <span>Loading deadlines...</span>
          </div>
        ) : (
          <UpcomingDeadlines upcomingDeadlines={upcomingDeadlines} />
        )}

        {/* Search and Filter Section */}
        <SavedJobFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterType={filterType}
          setFilterType={setFilterType}
          showRemindersOnly={showRemindersOnly}
          setShowRemindersOnly={setShowRemindersOnly}
        />

      {/* Results Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">
          {isLoading ? (
            <span className="flex items-center">
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Loading saved jobs...
            </span>
          ) : (
            <>
              {filteredJobs.length} Saved Job{filteredJobs.length !== 1 ? 's' : ''}
            </>
          )}
        </h2>
        <div className="flex items-center text-muted-foreground">
          <Filter className="h-4 w-4 mr-2" />
          <span className="text-sm">Showing bookmarked opportunities</span>
        </div>
      </div>

      {/* Jobs Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-job-primary" />
          <span className="ml-3 text-lg">Loading saved jobs...</span>
        </div>
      ) : isError ? (
        <Alert variant="destructive" className="my-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error instanceof Error ? error.message : 'Failed to load saved jobs'}
          </AlertDescription>
        </Alert>
      ) : (
        <>
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <SavedJobCard 
                key={job.id} 
                job={job} 
                removeJob={removeJob} 
                toggleReminder={(jobId, reminderSet, deadline, notes) => {
                  updateReminder({ jobId, reminderSet, deadline, notes });
                }} 
              />
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <SavedJobsEmptyState showRemindersOnly={showRemindersOnly} />
          )}
        </>
      )}
      </div>
    </ErrorBoundary>
  );
};

export default SavedJobs;
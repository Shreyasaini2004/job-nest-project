import { useState } from "react";
import { Filter, Loader2 } from "lucide-react";
import { Job } from "@/contexts/SavedJobsContext";
import JobSearchFilters from "./JobSearchFilters";
import JobListingCard from "./JobListingCard";
import NoJobsFound from "./NoJobsFound";
import ErrorBoundary from "./ErrorBoundary";
import { useJobs } from "@/lib/jobs-api";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Button } from "./ui/button";
import { AlertCircle } from "lucide-react";

// Define a proper interface for job data
interface JobOpening extends Omit<Job, 'posted'> {
  postedDate: string;
}

// Helper function to convert JobOpening to Job (for legacy data format)
const convertToJob = (job: JobOpening): Job => ({
  id: job.id,
  title: job.title,
  company: job.company,
  location: job.location,
  type: job.type,
  salary: job.salary,
  posted: job.postedDate,
  description: job.description,
  skills: job.skills || [],
});

const ViewOpenings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterLocation, setFilterLocation] = useState("all");

  // Use React Query to fetch jobs
  const { data: jobs, isLoading, isError, error, refetch } = useJobs({
    searchTerm,
    jobType: filterType,
    location: filterLocation,
  });
  
  // Legacy job data - only used as fallback if API is not available
  const legacyJobOpenings: JobOpening[] = [
    {
      id: "job-1",
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "New York, NY",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      postedDate: "2 days ago",
      description: "We are looking for a skilled Frontend Developer to join our team and build amazing user experiences...",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      id: "job-2",
      title: "UX Designer",
      company: "Design Studio",
      location: "San Francisco, CA",
      type: "Remote",
      salary: "$60,000 - $80,000",
      postedDate: "1 week ago",
      description: "Join our creative team as a UX Designer and help shape user experiences that matter...",
      skills: ["Figma", "Sketch", "User Research"],
    },
    {
      id: "job-3",
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$80,000 - $100,000",
      postedDate: "3 days ago",
      description: "We need a versatile Full Stack Developer to work on exciting projects and scale our platform...",
      skills: ["JavaScript", "Node.js", "MongoDB", "React"],
    },
    {
      id: "job-4",
      title: "Data Scientist",
      company: "Analytics Inc",
      location: "Boston, MA",
      type: "Part-time",
      salary: "$90,000 - $120,000",
      postedDate: "5 days ago",
      description: "Seeking a Data Scientist to extract insights from complex datasets and drive business decisions...",
      skills: ["Python", "R", "Machine Learning", "SQL"],
    },
    {
      id: "job-5",
      title: "Product Manager",
      company: "Innovation Labs",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$100,000 - $130,000",
      postedDate: "1 day ago",
      description: "Lead product strategy and development in a fast-paced environment with cutting-edge technology...",
      skills: ["Product Strategy", "Agile", "User Stories", "Roadmapping"],
    },
    {
      id: "job-6",
      title: "Backend Engineer",
      company: "Cloud Solutions",
      location: "Remote",
      type: "Contract",
      salary: "$85,000 - $110,000",
      postedDate: "4 days ago",
      description: "Build scalable backend systems and APIs that power millions of users worldwide...",
      skills: ["Java", "Spring Boot", "AWS", "Microservices"],
    },
  ];

  // Jobs are already filtered by the API based on search parameters
  // No need for additional filtering with useMemo

  return (
    <ErrorBoundary>
      <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-job-primary/10 to-job-accent/10 rounded-xl p-8 border border-job-primary/20">
        <h1 className="text-3xl font-bold text-foreground mb-3">
          🌟 Discover Your Dream Job
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Welcome to your gateway to endless opportunities! Browse through carefully curated job openings 
          that match your skills and aspirations. Your next career milestone is just a click away.
        </p>
      </div>

      {/* Search and Filter Section */}
      <JobSearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterType={filterType}
        setFilterType={setFilterType}
        filterLocation={filterLocation}
        setFilterLocation={setFilterLocation}
      />

      {/* Results Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">
          {isLoading ? (
            <span className="flex items-center">
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Loading jobs...
            </span>
          ) : (
            <>
              {jobs?.length || 0} Job{(jobs?.length || 0) !== 1 ? 's' : ''} Found
            </>
          )}
        </h2>
        <div className="flex items-center text-muted-foreground">
          <Filter className="h-4 w-4 mr-2" />
          <span className="text-sm">Showing relevant opportunities</span>
        </div>
      </div>

      {/* Jobs Grid */}
      <ErrorBoundary>
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-job-primary" />
            <span className="ml-3 text-lg">Loading job opportunities...</span>
          </div>
        ) : isError ? (
          <Alert variant="destructive" className="my-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error instanceof Error ? error.message : 'Failed to load jobs'}
              <div className="mt-4">
                <Button onClick={() => refetch()} variant="outline" size="sm">
                  Try Again
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {jobs?.map((job) => (
                <JobListingCard key={job.id} job={job} />
              ))}
            </div>

            {(jobs?.length || 0) === 0 && <NoJobsFound />}
          </>
        )}
      </ErrorBoundary>
    </div>
    </ErrorBoundary>
  );
};

export default ViewOpenings;

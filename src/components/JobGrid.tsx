
import { Loader2, AlertCircle } from "lucide-react";
import { Job } from "@/contexts/SavedJobsContext";
import JobListingCard from "./JobListingCard";
import NoJobsFound from "./NoJobsFound";
import ErrorBoundary from "./ErrorBoundary";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Button } from "./ui/button";

interface JobGridProps {
  jobs: Job[];
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
}

const JobGrid = ({ jobs, isLoading, error, onRetry }: JobGridProps) => {
  return (
    <ErrorBoundary>
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-job-primary" />
          <span className="ml-3 text-lg">Loading job opportunities...</span>
        </div>
      ) : error ? (
        <Alert variant="destructive" className="my-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error}
            <div className="mt-4">
              <Button onClick={onRetry} variant="outline" size="sm">
                Try Again
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListingCard key={job.id} job={job} />
            ))}
          </div>

          {jobs.length === 0 && <NoJobsFound />}
        </>
      )}
    </ErrorBoundary>
  );
};

export default JobGrid;


import { Filter, Loader2 } from "lucide-react";

interface JobResultsHeaderProps {
  isLoading: boolean;
  jobCount: number;
}

const JobResultsHeader = ({ isLoading, jobCount }: JobResultsHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-foreground">
        {isLoading ? (
          <span className="flex items-center">
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Loading jobs...
          </span>
        ) : (
          <>
            {jobCount} Job{jobCount !== 1 ? 's' : ''} Found
          </>
        )}
      </h2>
      <div className="flex items-center text-muted-foreground">
        <Filter className="h-4 w-4 mr-2" />
        <span className="text-sm">Showing relevant opportunities</span>
      </div>
    </div>
  );
};

export default JobResultsHeader;

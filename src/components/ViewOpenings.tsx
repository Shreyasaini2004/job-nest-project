
import { useState } from "react";
import { mockJobs } from "@/data/mockJobData";
import { useJobFiltering } from "@/hooks/useJobFiltering";
import JobSearchFilters from "./JobSearchFilters";
import WelcomeSection from "./WelcomeSection";
import JobResultsHeader from "./JobResultsHeader";
import JobGrid from "./JobGrid";
import ErrorBoundary from "./ErrorBoundary";

const ViewOpenings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterLocation, setFilterLocation] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filteredJobs = useJobFiltering(mockJobs, searchTerm, filterType, filterLocation);

  const handleRetry = () => {
    setError(null);
    setIsLoading(false);
  };

  return (
    <ErrorBoundary>
      <div className="space-y-8">
        <WelcomeSection />

        <JobSearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterType={filterType}
          setFilterType={setFilterType}
          filterLocation={filterLocation}
          setFilterLocation={setFilterLocation}
        />

        <JobResultsHeader 
          isLoading={isLoading}
          jobCount={filteredJobs.length}
        />

        <JobGrid
          jobs={filteredJobs}
          isLoading={isLoading}
          error={error}
          onRetry={handleRetry}
        />
      </div>
    </ErrorBoundary>
  );
};

export default ViewOpenings;

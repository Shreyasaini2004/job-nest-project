
import { useMemo } from "react";
import { Job } from "@/contexts/SavedJobsContext";

export const useJobFiltering = (
  jobs: Job[],
  searchTerm: string,
  filterType: string,
  filterLocation: string
) => {
  return useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = searchTerm ? (
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      ) : true;
      
      const matchesType = filterType !== 'all' ? 
        job.type.toLowerCase() === filterType.toLowerCase() : true;
      
      const matchesLocation = filterLocation !== 'all' ? 
        job.location.toLowerCase().includes(filterLocation.toLowerCase()) : true;
      
      return matchesSearch && matchesType && matchesLocation;
    });
  }, [jobs, searchTerm, filterType, filterLocation]);
};

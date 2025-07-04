
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, DollarSign, Clock, ChevronDown, ChevronUp } from "lucide-react";
import BookmarkButton from "./BookmarkButton";
import JobApplicationForm from "./JobApplicationForm";
import { Job } from "@/contexts/SavedJobsContext";

interface JobListingCardProps {
  job: Job;
}

const JobListingCard = ({ job }: JobListingCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-to-br from-card to-card/50">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <Badge 
            variant="outline" 
            className="bg-job-primary/10 text-job-primary border-job-primary/20"
          >
            {job.type}
          </Badge>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {job.posted}
            </span>
            <BookmarkButton job={job} />
          </div>
        </div>
        <CardTitle className="text-lg mb-1 text-foreground hover:text-job-primary transition-colors line-clamp-2">
          {job.title}
        </CardTitle>
        <p className="text-sm font-semibold text-job-primary">{job.company}</p>
      </CardHeader>
      
      <CardContent className="space-y-3 pt-0">
        <div className="space-y-1 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-2 text-job-primary" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-3 w-3 mr-2 text-job-success" />
            <span className="font-medium">{job.salary}</span>
          </div>
        </div>
        
        {/* Collapsible description */}
        <div className={`text-sm text-muted-foreground leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}>
          {job.description}
        </div>

        {/* Skills - only show if expanded */}
        {isExpanded && job.skills && (
          <div className="flex flex-wrap gap-1 pt-2">
            {job.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex gap-2 pt-2">
          <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
            <DialogTrigger asChild>
              <Button className="flex-1 bg-job-primary hover:bg-job-primary/90 text-white text-sm">
                Apply Now
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Apply for {job.title}</DialogTitle>
              </DialogHeader>
              <JobApplicationForm
                jobId={job.id}
                jobTitle={job.title}
                companyName={job.company}
                onSuccess={() => setIsApplicationOpen(false)}
                onCancel={() => setIsApplicationOpen(false)}
              />
            </DialogContent>
          </Dialog>
          
          <Button 
            variant="outline" 
            className="border-job-primary/20 hover:bg-job-primary/5 text-sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-3 w-3 mr-1" />
                Less
              </>
            ) : (
              <>
                <ChevronDown className="h-3 w-3 mr-1" />
                Details
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobListingCard;

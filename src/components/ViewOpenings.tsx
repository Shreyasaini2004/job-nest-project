import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, DollarSign, Search, Filter } from "lucide-react";

const ViewOpenings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterLocation, setFilterLocation] = useState("all");

  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "New York, NY",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      postedDate: "2 days ago",
      description: "We are looking for a skilled Frontend Developer to join our team and build amazing user experiences...",
    },
    {
      id: 2,
      title: "UX Designer",
      company: "Design Studio",
      location: "San Francisco, CA",
      type: "Remote",
      salary: "$60,000 - $80,000",
      postedDate: "1 week ago",
      description: "Join our creative team as a UX Designer and help shape user experiences that matter...",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$80,000 - $100,000",
      postedDate: "3 days ago",
      description: "We need a versatile Full Stack Developer to work on exciting projects and scale our platform...",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Analytics Inc",
      location: "Boston, MA",
      type: "Part-time",
      salary: "$90,000 - $120,000",
      postedDate: "5 days ago",
      description: "Seeking a Data Scientist to extract insights from complex datasets and drive business decisions...",
    },
    {
      id: 5,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$100,000 - $130,000",
      postedDate: "1 day ago",
      description: "Lead product strategy and development in a fast-paced environment with cutting-edge technology...",
    },
    {
      id: 6,
      title: "Backend Engineer",
      company: "Cloud Solutions",
      location: "Remote",
      type: "Contract",
      salary: "$85,000 - $110,000",
      postedDate: "4 days ago",
      description: "Build scalable backend systems and APIs that power millions of users worldwide...",
    },
  ];

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || job.type.toLowerCase() === filterType;
    const matchesLocation = filterLocation === "all" || job.location.toLowerCase().includes(filterLocation.toLowerCase());
    
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
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
      <div className="bg-card rounded-lg p-6 border shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="text-sm font-medium text-foreground mb-2 block">
              Search Jobs
            </label>
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by job title or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-48">
            <label className="text-sm font-medium text-foreground mb-2 block">
              Job Type
            </label>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full lg:w-48">
            <label className="text-sm font-medium text-foreground mb-2 block">
              Location
            </label>
            <Select value={filterLocation} onValueChange={setFilterLocation}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="new york">New York</SelectItem>
                <SelectItem value="san francisco">San Francisco</SelectItem>
                <SelectItem value="austin">Austin</SelectItem>
                <SelectItem value="boston">Boston</SelectItem>
                <SelectItem value="seattle">Seattle</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">
          {filteredJobs.length} Job{filteredJobs.length !== 1 ? 's' : ''} Found
        </h2>
        <div className="flex items-center text-muted-foreground">
          <Filter className="h-4 w-4 mr-2" />
          <span className="text-sm">Showing relevant opportunities</span>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-to-br from-card to-card/50">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-3">
                <Badge 
                  variant="outline" 
                  className="bg-job-primary/10 text-job-primary border-job-primary/20"
                >
                  {job.type}
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {job.postedDate}
                </span>
              </div>
              <CardTitle className="text-xl mb-2 text-foreground hover:text-job-primary transition-colors">
                {job.title}
              </CardTitle>
              <p className="text-lg font-semibold text-job-primary">{job.company}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-job-primary" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2 text-job-success" />
                  <span className="font-medium">{job.salary}</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                {job.description}
              </p>
              
              <div className="flex gap-2 pt-2">
                <Button className="flex-1 bg-job-primary hover:bg-job-primary/90 text-white">
                  Apply Now
                </Button>
                <Button variant="outline" className="border-job-primary/20 hover:bg-job-primary/5">
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-foreground mb-2">No jobs found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search criteria or filters to find more opportunities.
          </p>
        </div>
      )}
    </div>
  );
};

export default ViewOpenings;

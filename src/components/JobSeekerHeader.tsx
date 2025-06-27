
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { User, Settings, LogOut, Eye } from "lucide-react";

const JobSeekerHeader = () => {
  const currentStatus = "Pending"; // This would come from user data
  const userName = "John Doe"; // This would come from user data

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-job-success text-white';
      case 'pending':
        return 'bg-yellow-500 text-white';
      case 'rejected':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <header className="w-full bg-gradient-to-r from-background via-job-secondary/20 to-background border-b border-border/50 p-6 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-1">
              Welcome back, {userName}!
            </h1>
            <p className="text-muted-foreground">
              Ready to take the next step in your career journey?
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative hover:bg-job-primary/10">
                <User className="h-5 w-5" />
                <Badge className={`absolute -top-1 -right-1 h-3 w-3 p-0 ${getStatusColor(currentStatus)}`} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-background border border-border/50 shadow-lg">
              <DropdownMenuLabel className="font-semibold">Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-job-primary/5">
                <Eye className="h-4 w-4" />
                <span>View Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-job-primary/5">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-red-50 text-red-600">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default JobSeekerHeader;

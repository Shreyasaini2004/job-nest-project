
import { Button } from "@/components/ui/button";
import { Search, Bell, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-job-primary to-job-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JN</span>
            </div>
            <span className="text-xl font-bold text-foreground">JobNest</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-job-primary transition-colors">Jobs</a>
            <a href="#" className="text-foreground hover:text-job-primary transition-colors">Companies</a>
            <a href="#" className="text-foreground hover:text-job-primary transition-colors">Resources</a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="outline" className="hidden md:flex">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          
          <Button className="hidden md:flex bg-job-success hover:bg-job-success/90">
            Post Job
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

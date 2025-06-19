import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-job-primary to-job-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JN</span>
              </div>
              <span className="text-xl font-bold text-foreground">JobNest</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting talented professionals with their dream careers. Your next opportunity awaits.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* For Job Seekers */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">For Job Seekers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-job-primary transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-job-primary transition-colors">Career Advice</a></li>
              <li><a href="#" className="hover:text-job-primary transition-colors">Resume Builder</a></li>
              <li><a href="#" className="hover:text-job-primary transition-colors">Salary Guide</a></li>
              <li><a href="#" className="hover:text-job-primary transition-colors">Interview Tips</a></li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">For Employers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-job-primary transition-colors">Post a Job</a></li>
              <li><a href="#" className="hover:text-job-primary transition-colors">Browse Candidates</a></li>
              <li><a href="#" className="hover:text-job-primary transition-colors">Hiring Solutions</a></li>
              <li><a href="#" className="hover:text-job-primary transition-colors">Company Profiles</a></li>
              <li><a href="#" className="hover:text-job-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest job opportunities and career insights delivered to your inbox.
            </p>
            <div className="flex flex-col space-y-2">
              <Input placeholder="Enter your email" className="text-sm" />
              <Button className="bg-job-primary hover:bg-job-primary/90 text-white text-sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 JobNest. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-job-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-job-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-job-primary transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
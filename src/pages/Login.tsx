import { JobSeekerLogin } from '@/components/JobSeekerLogin';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-job-secondary via-background to-job-secondary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-foreground mb-2">
            Welcome to <span className="bg-gradient-to-r from-job-primary to-job-accent bg-clip-text text-transparent">JobNest</span>
          </h1>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            Sign in to continue your job search journey
          </p>
        </div>
        <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border/50">
          <JobSeekerLogin />
          <div className="px-8 pb-8 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-job-primary hover:underline">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
        <div className="text-center">
          <Button 
            variant="outline" 
            className="w-full max-w-xs mx-auto border-job-primary/30 text-job-primary hover:bg-job-primary/10 hover:border-job-primary/50 transition-colors"
            asChild
          >
            <Link to="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

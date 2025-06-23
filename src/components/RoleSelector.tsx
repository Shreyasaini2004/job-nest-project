
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Briefcase, Shield } from "lucide-react";

interface RoleSelectorProps {
  onRoleSelect: (role: 'job-seeker' | 'employee' | 'admin') => void;
}

const RoleSelector = ({ onRoleSelect }: RoleSelectorProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-job-secondary via-background to-job-secondary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Welcome to
          <span className="bg-gradient-to-r from-job-primary to-job-accent bg-clip-text text-transparent"> JobNest</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose your role to get started with the right experience for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1" onClick={() => onRoleSelect('job-seeker')}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-job-primary transition-colors">
                Job Seeker
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Find your dream job and advance your career
              </p>
              <Button className="bg-job-primary hover:bg-job-primary/90">
                Continue as Job Seeker
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1" onClick={() => onRoleSelect('employee')}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-job-primary transition-colors">
                Employer
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Post jobs and find talented candidates
              </p>
              <Button className="bg-job-success hover:bg-job-success/90">
                Continue as Employer
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1" onClick={() => onRoleSelect('admin')}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-job-primary transition-colors">
                Admin
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Manage the platform and oversee operations
              </p>
              <Button className="bg-job-accent hover:bg-job-accent/90">
                Continue as Admin
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RoleSelector;

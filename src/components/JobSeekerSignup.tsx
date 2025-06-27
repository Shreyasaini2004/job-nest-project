import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof signupSchema>;

interface JobSeekerSignupProps {
  userType: 'job-seeker' | 'employer';
}

export function JobSeekerSignup({ userType }: JobSeekerSignupProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();
  const { setUser } = useUser();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    try {
      setIsLoading(true);
      
      // Create user data object
      const userData = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        password: data.password, // In a real app, you should hash the password
        userType: userType,
        createdAt: new Date().toISOString(),
      };
      
      // Save user data to localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Save user data to context
      setUser(userData);
      
      // Show success message
      toast({
        title: "Success!",
        description: `Welcome to JobNest, ${data.name}! Your ${userType} account has been created.`,
      });
      
      // Navigate to appropriate dashboard after successful registration
      navigate(userType === 'employer' ? '/employer-dashboard' : '/job-seeker-dashboard');
      
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: "An error occurred during registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isEmployer = userType === 'employer';
  
  return (
    <div className="px-8 pt-8">
      <CardHeader className="px-0 pt-0 pb-6">
        <CardTitle className="text-2xl font-bold text-foreground">
          {isEmployer ? 'Employer' : 'Job Seeker'} Sign Up
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground/80">
              Full Name
            </Label>
            <div className="relative">
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="h-12 px-4 text-base border-border/50 focus-visible:ring-2 focus-visible:ring-job-primary/50"
                disabled={isLoading}
                {...register('name')}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground/80">
              Email Address
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-12 px-4 text-base border-border/50 focus-visible:ring-2 focus-visible:ring-job-primary/50"
                disabled={isLoading}
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-sm font-medium text-foreground/80">
                Password
              </Label>
            </div>
            <div className="relative">
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-12 px-4 pr-10 text-base border-border/50 focus-visible:ring-2 focus-visible:ring-job-primary/50"
                  disabled={isLoading}
                  {...register('password')}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground/80">
              Confirm Password
            </Label>
            <div className="relative">
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-12 px-4 pr-10 text-base border-border/50 focus-visible:ring-2 focus-visible:ring-job-primary/50"
                  disabled={isLoading}
                  {...register('confirmPassword')}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-destructive">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base font-medium bg-gradient-to-r from-job-primary to-job-accent hover:from-job-primary/90 hover:to-job-accent/90 transition-all"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </span>
            ) : (
              `Sign Up as ${isEmployer ? 'Employer' : 'Job Seeker'}`
            )}
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm">
          <p className="text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-job-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </CardContent>
    </div>
  );
}

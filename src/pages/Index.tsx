
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import JobCategories from "@/components/JobCategories";
import FeaturedJobs from "@/components/FeaturedJobs";
import Footer from "@/components/Footer";
import RoleSelector from "@/components/RoleSelector";

const Index = () => {
  const [userRole, setUserRole] = useState<'job-seeker' | 'employee' | null>(null);

  const handleRoleSelect = (role: 'job-seeker' | 'employee') => {
    setUserRole(role);
  };

  const renderContent = () => {
    if (!userRole) {
      return <RoleSelector onRoleSelect={handleRoleSelect} />;
    }

    switch (userRole) {
      case 'job-seeker':
        return (
          <>
            <HeroSection />
            <JobCategories />
            <FeaturedJobs />
          </>
        );
      case 'employee':
        return (
          <>
            <HeroSection />
            <JobCategories />
            <FeaturedJobs />
          </>
        );
      default:
        return <RoleSelector onRoleSelect={handleRoleSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default Index;

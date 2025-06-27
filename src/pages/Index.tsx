import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import JobCategories from "@/components/JobCategories";
import FeaturedJobs from "@/components/FeaturedJobs";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import RoleSelector from "@/components/RoleSelector";

const Index = () => {
  const [userRole, setUserRole] = useState<'job-seeker' | 'employee' | null>(null);
  const navigate = useNavigate();

  const handleRoleSelect = (role: 'job-seeker' | 'employee') => {
    setUserRole(role);
    if (role === 'job-seeker') {
      navigate('/login');
    }
    // Handle employee role if needed
  };

  const renderContent = () => {
    if (!userRole) {
      return (
        <>
          <RoleSelector onRoleSelect={handleRoleSelect} />
          <AboutSection />
        </>
      );
    }


    // This part will only be reached if the user selects 'employee' role
    return (
      <>
        <HeroSection />
        <JobCategories />
        <FeaturedJobs />
      </>
    );
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


import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import JobCategories from "@/components/JobCategories";
import FeaturedJobs from "@/components/FeaturedJobs";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import RoleSelector from "@/components/RoleSelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main>
        <HeroSection />
        <RoleSelector />
        <JobCategories />
        <FeaturedJobs />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

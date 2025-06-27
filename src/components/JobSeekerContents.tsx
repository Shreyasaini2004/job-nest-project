import UpdateDetailsForm from "@/components/UpdateDetailsForm";
import ViewOpenings from "@/components/ViewOpenings";
import ManageApplications from "@/components/ManageApplications";

interface JobSeekerContentProps {
  activeSection: 'update-details' | 'view-openings' | 'manage-applications';
}

const JobSeekerContent = ({ activeSection }: JobSeekerContentProps) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'update-details':
        return <UpdateDetailsForm />;
      case 'view-openings':
        return <ViewOpenings />;
      case 'manage-applications':
        return <ManageApplications />;
      default:
        return <UpdateDetailsForm />;
    }
  };

  return (
    <main className="flex-1 p-6 bg-background">
      {renderContent()}
    </main>
  );
};

export default JobSeekerContent;

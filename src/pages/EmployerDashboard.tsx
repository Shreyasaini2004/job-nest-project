
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import EmployerSidebar from "@/components/EmployerSidebar";
import EmployerHeader from "@/components/EmployerHeader";
import PostOpening from "@/components/PostOpening";
import ViewApplications from "@/components/ViewApplications";
import ViewStatus from "@/components/ViewStatus";

const EmployerDashboard = () => {
  const [activeSection, setActiveSection] = useState<'post-opening' | 'view-applications' | 'view-status'>('post-opening');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <EmployerSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          <div className="flex-1 flex flex-col">
            <EmployerHeader />
            <main className="flex-1 p-6">
              {activeSection === 'post-opening' && <PostOpening />}
              {activeSection === 'view-applications' && <ViewApplications />}
              {activeSection === 'view-status' && <ViewStatus />}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default EmployerDashboard;

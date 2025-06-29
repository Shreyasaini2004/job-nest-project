import { User, Briefcase, FileText, Bookmark, Bell } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

interface JobSeekerSidebarProps {
  activeSection: 'update-details' | 'view-openings' | 'manage-applications' | 'saved-jobs';
  onSectionChange: (section: 'update-details' | 'view-openings' | 'manage-applications' | 'saved-jobs') => void;
}

const JobSeekerSidebar = ({ activeSection, onSectionChange }: JobSeekerSidebarProps) => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const menuItems = [
    {
      id: 'update-details' as const,
      label: 'Update User Details',
      icon: User
    },
    {
      id: 'view-openings' as const,
      label: 'View Openings',
      icon: Briefcase
    },
    {
      id: 'saved-jobs' as const,
      label: 'Saved Jobs & Reminders',
      icon: Bookmark
    },
    {
      id: 'manage-applications' as const,
      label: 'Manage Applications',
      icon: FileText
    },
  ];

  return (
    <Sidebar className="border-r border-slate-200 bg-white shadow-lg">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3 p-3">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(item.id)}
                    isActive={activeSection === item.id}
                    className={`w-full py-4 px-4 rounded-lg transition-all duration-200 min-h-[56px] ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'hover:bg-slate-50 text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    <item.icon className={`h-5 w-5 ${isCollapsed ? 'mx-auto' : 'mr-3'} flex-shrink-0`} />
                    {!isCollapsed && (
                      <span className="font-medium text-sm leading-relaxed">{item.label}</span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default JobSeekerSidebar;

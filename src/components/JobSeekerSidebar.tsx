import { User, Briefcase, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface JobSeekerSidebarProps {
  activeSection: 'update-details' | 'view-openings' | 'manage-applications';
  onSectionChange: (section: 'update-details' | 'view-openings' | 'manage-applications') => void;
}

const JobSeekerSidebar = ({ activeSection, onSectionChange }: JobSeekerSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      title: "Update User Details",
      key: "update-details" as const,
      icon: User,
      color: "text-blue-600 hover:bg-blue-50",
      activeColor: "bg-blue-100 text-blue-700 border-blue-200"
    },
    {
      title: "View Openings",
      key: "view-openings" as const,
      icon: Briefcase,
      color: "text-green-600 hover:bg-green-50",
      activeColor: "bg-green-100 text-green-700 border-green-200"
    },
    {
      title: "Manage Applications",
      key: "manage-applications" as const,
      icon: FileText,
      color: "text-purple-600 hover:bg-purple-50",
      activeColor: "bg-purple-100 text-purple-700 border-purple-200"
    },
  ];

  return (
    <Sidebar className={`border-r border-border transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center justify-between px-2 mb-4">
            {!isCollapsed && (
              <SidebarGroupLabel className="text-lg font-semibold">
                Job Seeker Dashboard
              </SidebarGroupLabel>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="h-8 w-8 hover:bg-gray-100"
            >
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(item.key)}
                    isActive={activeSection === item.key}
                    className={`
                      w-full justify-start py-3 px-4 rounded-lg transition-all duration-200
                      ${activeSection === item.key 
                        ? `${item.activeColor} border-l-4 font-medium shadow-sm` 
                        : `${item.color} hover:shadow-sm border-l-4 border-transparent`
                      }
                      ${isCollapsed ? 'justify-center px-2' : ''}
                    `}
                    title={isCollapsed ? item.title : undefined}
                  >
                    <item.icon className={`h-5 w-5 ${!isCollapsed ? 'mr-3' : ''}`} />
                    {!isCollapsed && (
                      <span className="text-sm font-medium">{item.title}</span>
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

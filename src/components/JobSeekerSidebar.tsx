import { Link, useLocation } from 'react-router-dom';
import { User, Briefcase, FileText, Bookmark, Bell, Target, History, Settings } from "lucide-react";
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
  activeSection: 'update-details' | 'view-openings' | 'manage-applications' | 'saved-jobs' | 'ats-score' | 'saved-analyses';
  onSectionChange: (section: 'update-details' | 'view-openings' | 'manage-applications' | 'saved-jobs' | 'ats-score' | 'saved-analyses') => void;
}

const JobSeekerSidebar = ({ activeSection, onSectionChange }: JobSeekerSidebarProps) => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const location = useLocation();

  const menuItems = [
    {
      id: 'update-details' as const,
      label: 'Update User Details',
      icon: User,
      to: '/dashboard?section=update-details'
    },
    {
      id: 'view-openings' as const,
      label: 'View Openings',
      icon: Briefcase,
      to: '/dashboard?section=view-openings'
    },
    {
      id: 'saved-jobs' as const,
      label: 'Saved Jobs & Reminders',
      icon: Bookmark,
      to: '/dashboard?section=saved-jobs'
    },
    {
      id: 'manage-applications' as const,
      label: 'Manage Applications',
      icon: FileText,
      to: '/dashboard?section=manage-applications'
    },
    {
      id: 'ats-score' as const,
      label: 'ATS Score Analysis',
      icon: Target,
      to: '/dashboard?section=ats-score'
    },
    {
      id: 'saved-analyses' as const,
      label: 'Saved Analyses',
      icon: History,
      to: '/dashboard?section=saved-analyses'
    },
    {
      id: 'profile' as const,
      label: 'Profile',
      icon: User,
      to: '/profile'
    },
    {
      id: 'settings' as const,
      label: 'Settings',
      icon: Settings,
      to: '/settings'
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
                    onClick={() => {
                      if (onSectionChange && item.to.includes('section=')) {
                        const section = item.to.split('section=')[1];
                        onSectionChange(section);
                      }
                    }}
                    isActive={location.pathname + location.search === item.to}
                    className={`w-full py-4 px-4 rounded-lg transition-all duration-200 min-h-[56px] ${
                      location.pathname + location.search === item.to
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

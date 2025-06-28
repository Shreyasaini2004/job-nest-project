
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { PlusCircle, Users, BarChart3 } from "lucide-react";

interface EmployerSidebarProps {
  activeSection: 'post-opening' | 'view-applications' | 'view-status';
  onSectionChange: (section: 'post-opening' | 'view-applications' | 'view-status') => void;
}

const EmployerSidebar = ({ activeSection, onSectionChange }: EmployerSidebarProps) => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const menuItems = [
    {
      id: 'post-opening' as const,
      label: 'Post Opening',
      icon: PlusCircle,
      description: 'Create new job postings'
    },
    {
      id: 'view-applications' as const,
      label: 'View Applications',
      icon: Users,
      description: 'Review candidate applications'
    },
    {
      id: 'view-status' as const,
      label: 'View Status',
      icon: BarChart3,
      description: 'Track application status'
    }
  ];

  return (
    <Sidebar className="border-r border-slate-200 bg-white shadow-lg">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 p-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(item.id)}
                    isActive={activeSection === item.id}
                    className={`w-full p-3 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'hover:bg-slate-100 text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    <item.icon className={`h-5 w-5 ${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
                    {!isCollapsed && (
                      <div className="flex flex-col items-start">
                        <span className="font-medium">{item.label}</span>
                        <span className="text-xs opacity-80">{item.description}</span>
                      </div>
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

export default EmployerSidebar;

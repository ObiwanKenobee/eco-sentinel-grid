
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";
import { 
  SidebarProvider, 
  Sidebar,
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter, 
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset
} from "@/components/ui/sidebar";
import {
  Shield,
  Users,
  LineChart,
  Globe,
  Building,
  Brain,
  BarChart,
  Map,
  AlertCircle,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  Search,
  BellRing
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Define an interface for user profile data
interface Profile {
  id: string;
  role: string;
  full_name: string;
  avatar_url?: string;
  organization?: string;
}

export default function DashboardLayout() {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        
        if (!session && event === 'SIGNED_OUT') {
          navigate('/auth');
        }
      }
    );

    // Check for existing session
    const getSession = async () => {
      setLoading(true);
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);

        if (session) {
          // Fetch user profile
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          if (error) throw error;
          setProfile(data);
        } else {
          // No session found, redirect to auth
          navigate('/auth');
        }
      } catch (error) {
        console.error('Error getting session:', error);
        toast({
          title: "Error",
          description: "Failed to load user profile",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    getSession();

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, toast]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out",
        description: "You have been signed out successfully",
      });
      navigate('/auth');
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    }
  };
  
  // Get role-specific menu items
  const getMenuItems = () => {
    // Common menu items for all roles
    const commonItems = [
      { id: "dashboard", label: "Dashboard", icon: <BarChart className="h-4 w-4" />, path: "/dashboard" },
      { id: "map", label: "Interactive Map", icon: <Map className="h-4 w-4" />, path: "/dashboard/map" },
      { id: "alerts", label: "Alerts", icon: <AlertCircle className="h-4 w-4" />, path: "/dashboard/alerts" },
    ];
    
    // Role-specific menu items
    const roleItems = {
      ranger: [
        { id: "incidents", label: "Incident Reporting", icon: <Shield className="h-4 w-4" />, path: "/dashboard/incidents" },
        { id: "tracker", label: "Tracker Status", icon: <Map className="h-4 w-4" />, path: "/dashboard/tracker" },
      ],
      community: [
        { id: "report", label: "Report Incident", icon: <AlertCircle className="h-4 w-4" />, path: "/dashboard/report" },
        { id: "education", label: "Education Modules", icon: <FileText className="h-4 w-4" />, path: "/dashboard/education" },
        { id: "rewards", label: "Rewards", icon: <Users className="h-4 w-4" />, path: "/dashboard/rewards" },
      ],
      esg: [
        { id: "suppliers", label: "Supplier Profiles", icon: <Users className="h-4 w-4" />, path: "/dashboard/suppliers" },
        { id: "tracking", label: "Track & Trace", icon: <Map className="h-4 w-4" />, path: "/dashboard/tracking" },
        { id: "reports", label: "ESG Reports", icon: <FileText className="h-4 w-4" />, path: "/dashboard/reports" },
      ],
      ngo: [
        { id: "data-layers", label: "Data Layers", icon: <Map className="h-4 w-4" />, path: "/dashboard/data-layers" },
        { id: "cases", label: "Case Builder", icon: <FileText className="h-4 w-4" />, path: "/dashboard/cases" },
        { id: "collaboration", label: "Collaboration Hub", icon: <Users className="h-4 w-4" />, path: "/dashboard/collaboration" },
      ],
      government: [
        { id: "compliance", label: "Compliance Heatmaps", icon: <Map className="h-4 w-4" />, path: "/dashboard/compliance" },
        { id: "inspections", label: "Inspection Tools", icon: <Shield className="h-4 w-4" />, path: "/dashboard/inspections" },
        { id: "customs", label: "Customs Integration", icon: <Building className="h-4 w-4" />, path: "/dashboard/customs" },
      ],
      admin: [
        { id: "roles", label: "User Management", icon: <Users className="h-4 w-4" />, path: "/dashboard/users" },
        { id: "system", label: "System Health", icon: <LineChart className="h-4 w-4" />, path: "/dashboard/system" },
        { id: "comms", label: "Communications", icon: <MessageSquare className="h-4 w-4" />, path: "/dashboard/communications" },
        { id: "analytics", label: "Analytics Hub", icon: <BarChart className="h-4 w-4" />, path: "/dashboard/analytics" },
      ],
    };
    
    // Return combined menu items based on role
    if (profile?.role && roleItems[profile.role as keyof typeof roleItems]) {
      return [...commonItems, ...roleItems[profile.role as keyof typeof roleItems]];
    }
    
    return commonItems;
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!session) {
    return null; // Will redirect to auth in useEffect
  }

  return (
    <SidebarProvider defaultOpen>
      <div className="h-screen w-full bg-background flex">
        <Sidebar variant="sidebar">
          <SidebarHeader className="py-4">
            <div className="flex items-center gap-2 px-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-ecosentinel-green-500 to-ecosentinel-blue-500 flex items-center justify-center">
                <span className="text-white text-sm">ES</span>
              </div>
              <span className="font-bold">EcoSentinel AI</span>
            </div>
          </SidebarHeader>

          <SidebarContent className="p-2">
            <SidebarMenu>
              {getMenuItems().map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    onClick={() => navigate(item.path)}
                    tooltip={item.label}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter>
            <div className="p-2">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-muted-foreground" 
                onClick={() => navigate('/dashboard/settings')}
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-muted-foreground" 
                onClick={handleSignOut}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex flex-col">
          <header className="sticky top-0 z-10 bg-background border-b">
            <div className="flex items-center h-16 px-4">
              <SidebarTrigger />
              <div className="flex-1 mx-4">
                <div className="relative max-w-md">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search..." 
                    className="pl-8 bg-muted/50"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative"
                >
                  <BellRing className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </Button>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {profile?.full_name ? profile.full_name.charAt(0) : session.user.email?.charAt(0).toUpperCase()}
                  </div>
                  <div className="hidden md:block">
                    <div className="text-sm font-medium">
                      {profile?.full_name || session.user.email?.split('@')[0]}
                    </div>
                    <div className="text-xs text-muted-foreground">{profile?.organization || profile?.role || 'User'}</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

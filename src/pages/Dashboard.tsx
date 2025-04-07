
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { AlertCircle, Clock, Map as MapIcon, Shield, Users, LineChart } from "lucide-react";
import RoleSelection from "@/components/RoleSelection";

interface Profile {
  id: string;
  role: string;
  full_name: string;
}

export default function Dashboard() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          return;
        }

        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) throw error;
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // If no role is selected yet, show role selection screen
  if (!loading && profile && !profile.role) {
    return <RoleSelection />;
  }

  // Get role-specific welcome message and stats
  const getRoleContent = () => {
    switch(profile?.role) {
      case 'ranger':
        return {
          title: "Field Ranger Dashboard",
          description: "Monitor ecosystem health, report threats, and respond to alerts",
          stats: [
            { title: "Active Sensors", value: "24", icon: <Shield className="h-4 w-4 text-ecosentinel-green-500" /> },
            { title: "Recent Alerts", value: "3", icon: <AlertCircle className="h-4 w-4 text-red-500" /> },
            { title: "Patrol Coverage", value: "87%", icon: <MapIcon className="h-4 w-4 text-ecosentinel-blue-500" /> },
            { title: "Incidents Today", value: "1", icon: <Clock className="h-4 w-4 text-ecosentinel-earth-500" /> },
          ]
        };
      case 'community':
        return {
          title: "Community Reporter Dashboard",
          description: "Report incidents and contribute to ecosystem protection",
          stats: [
            { title: "Reports Filed", value: "12", icon: <AlertCircle className="h-4 w-4 text-ecosentinel-green-500" /> },
            { title: "Rewards Earned", value: "250", icon: <Users className="h-4 w-4 text-ecosentinel-blue-500" /> },
            { title: "Local Alerts", value: "5", icon: <MapIcon className="h-4 w-4 text-red-500" /> },
            { title: "Learning Progress", value: "68%", icon: <LineChart className="h-4 w-4 text-ecosentinel-earth-500" /> },
          ]
        };
      case 'esg':
        return {
          title: "ESG Compliance Dashboard",
          description: "Monitor, audit and ensure ethical compliance across supply chains",
          stats: [
            { title: "Active Suppliers", value: "48", icon: <Users className="h-4 w-4 text-ecosentinel-green-500" /> },
            { title: "Compliance Rate", value: "92%", icon: <Shield className="h-4 w-4 text-ecosentinel-blue-500" /> },
            { title: "Risk Alerts", value: "7", icon: <AlertCircle className="h-4 w-4 text-red-500" /> },
            { title: "Reports Due", value: "3", icon: <Clock className="h-4 w-4 text-ecosentinel-earth-500" /> },
          ]
        };
      case 'ngo':
        return {
          title: "NGO Coordinator Dashboard",
          description: "Analyze data and coordinate interventions across partners",
          stats: [
            { title: "Active Cases", value: "17", icon: <Shield className="h-4 w-4 text-ecosentinel-green-500" /> },
            { title: "Partner Organizations", value: "9", icon: <Users className="h-4 w-4 text-ecosentinel-blue-500" /> },
            { title: "Wildlife Alerts", value: "13", icon: <AlertCircle className="h-4 w-4 text-red-500" /> },
            { title: "Human Trafficking Risks", value: "8", icon: <Clock className="h-4 w-4 text-ecosentinel-earth-500" /> },
          ]
        };
      case 'government':
        return {
          title: "Government Inspector Dashboard",
          description: "Oversee regulatory compliance and crisis response",
          stats: [
            { title: "Compliance Checks", value: "34", icon: <Shield className="h-4 w-4 text-ecosentinel-green-500" /> },
            { title: "Risk Zones", value: "12", icon: <MapIcon className="h-4 w-4 text-ecosentinel-blue-500" /> },
            { title: "Pending Inspections", value: "8", icon: <Clock className="h-4 w-4 text-red-500" /> },
            { title: "Resolved Cases", value: "27", icon: <Users className="h-4 w-4 text-ecosentinel-earth-500" /> },
          ]
        };
      case 'admin':
        return {
          title: "Super Admin Dashboard",
          description: "Platform management, system monitoring and cross-agency coordination",
          stats: [
            { title: "Active Users", value: "215", icon: <Users className="h-4 w-4 text-ecosentinel-green-500" /> },
            { title: "System Uptime", value: "99.8%", icon: <Shield className="h-4 w-4 text-ecosentinel-blue-500" /> },
            { title: "Critical Alerts", value: "2", icon: <AlertCircle className="h-4 w-4 text-red-500" /> },
            { title: "Analytics Trends", value: "+12%", icon: <LineChart className="h-4 w-4 text-ecosentinel-earth-500" /> },
          ]
        };
      default:
        return {
          title: "EcoSentinel Dashboard",
          description: "Welcome to your personalized dashboard",
          stats: [
            { title: "Recent Alerts", value: "8", icon: <AlertCircle className="h-4 w-4 text-red-500" /> },
            { title: "Active Users", value: "215", icon: <Users className="h-4 w-4 text-ecosentinel-blue-500" /> },
            { title: "Protected Areas", value: "18", icon: <MapIcon className="h-4 w-4 text-ecosentinel-green-500" /> },
            { title: "Recent Reports", value: "24", icon: <Shield className="h-4 w-4 text-ecosentinel-earth-500" /> },
          ]
        };
    }
  };

  const roleContent = getRoleContent();

  if (loading) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{roleContent?.title}</h1>
        <p className="text-muted-foreground">{roleContent?.description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {roleContent?.stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Interactive Map</CardTitle>
            <CardDescription>Wildlife activity and incident reports</CardDescription>
          </CardHeader>
          <CardContent className="h-80 bg-muted rounded-md flex items-center justify-center">
            <div className="text-center">
              <MapIcon className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
              <p>Interactive map visualization would appear here</p>
              <Button variant="outline" className="mt-2">Explore Map</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
            <CardDescription>Latest updates from your areas of interest</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                <div>
                  <p className="text-sm font-medium">Suspected poaching activity</p>
                  <p className="text-xs text-muted-foreground">Sector B3, 35 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-amber-500"></div>
                <div>
                  <p className="text-sm font-medium">Unusual vehicle movement</p>
                  <p className="text-xs text-muted-foreground">Northern border, 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                  <p className="text-sm font-medium">Elephant herd migration</p>
                  <p className="text-xs text-muted-foreground">Eastern corridor, 5 hours ago</p>
                </div>
              </div>
            </div>
            <Button variant="ghost" className="w-full mt-4">View all alerts</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Activity Overview</CardTitle>
          <CardDescription>System activity and stakeholder engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="reports">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="incidents">Incidents</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="reports" className="h-40 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <p>Recent reports data would appear here</p>
              </div>
            </TabsContent>
            <TabsContent value="incidents" className="h-40 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <p>Incident tracking visualization would appear here</p>
              </div>
            </TabsContent>
            <TabsContent value="compliance" className="h-40 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <p>Compliance status dashboard would appear here</p>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="h-40 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <p>Analytics and trend visualization would appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

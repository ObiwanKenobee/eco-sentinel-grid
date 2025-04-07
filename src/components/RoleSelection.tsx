
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, LineChart, Globe, Building, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

const RoleCard = ({ title, description, icon, selected, onClick }: RoleCardProps) => (
  <Card 
    className={`cursor-pointer transition-all hover:shadow-md ${
      selected ? "border-2 border-ecosentinel-green-500 shadow-md" : ""
    }`}
    onClick={onClick}
  >
    <CardHeader className="p-4">
      <CardTitle className="flex items-center gap-2 text-lg">
        {icon}
        <span>{title}</span>
      </CardTitle>
      <CardDescription className="text-sm mt-1">{description}</CardDescription>
    </CardHeader>
  </Card>
);

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const roles = [
    {
      id: "ranger",
      title: "Field Ranger / Wildlife Officer",
      description: "Monitor ecosystem health, report threats, receive alerts",
      icon: <Shield className="h-5 w-5 text-ecosentinel-green-600" />
    },
    {
      id: "community",
      title: "Community Watch Reporter",
      description: "Report incidents, access safety alerts, earn rewards",
      icon: <Users className="h-5 w-5 text-ecosentinel-earth-500" />
    },
    {
      id: "esg",
      title: "ESG Compliance Officer",
      description: "Audit supply chains, ensure ethical sourcing transparency",
      icon: <LineChart className="h-5 w-5 text-ecosentinel-blue-600" />
    },
    {
      id: "ngo",
      title: "NGO Coordinator / Analyst",
      description: "Analyze data, manage cases, coordinate interventions",
      icon: <Globe className="h-5 w-5 text-ecosentinel-green-500" />
    },
    {
      id: "government",
      title: "Government Inspector",
      description: "Oversee regulatory compliance, manage crisis response",
      icon: <Building className="h-5 w-5 text-ecosentinel-blue-500" />
    },
    {
      id: "admin",
      title: "Super Admin",
      description: "Manage platform, monitor systems, orchestrate operations",
      icon: <Brain className="h-5 w-5 text-ecosentinel-earth-600" />
    }
  ];

  const handleContinue = async () => {
    if (!selectedRole) return;
    
    setLoading(true);
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        // Update user profile with selected role
        const { error } = await supabase
          .from('profiles')
          .update({ role: selectedRole })
          .eq('id', user.id);
          
        if (error) throw error;
      }
      
      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Error setting user role:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-4xl py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Select Your Role</h1>
        <p className="text-muted-foreground">
          Choose the role that best describes your work with EcoSentinel AI.
          Your dashboard will be customized based on this selection.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {roles.map((role) => (
          <RoleCard
            key={role.id}
            title={role.title}
            description={role.description}
            icon={role.icon}
            selected={selectedRole === role.id}
            onClick={() => setSelectedRole(role.id)}
          />
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button
          onClick={handleContinue}
          disabled={!selectedRole || loading}
          className="bg-gradient-to-r from-ecosentinel-green-500 to-ecosentinel-blue-500 hover:opacity-90 px-8"
        >
          {loading ? "Saving..." : "Continue to Dashboard"}
        </Button>
      </div>
    </div>
  );
}

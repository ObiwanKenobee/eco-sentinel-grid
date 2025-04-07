
import React from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Calendar,
  Check,
  Database,
  LineChart,
  Lock,
  MessageSquare,
  Radio,
  Search,
  Shield,
  Smartphone,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import NavBar from '@/components/NavBar';
import MapVisualization from '@/components/MapVisualization';
import StatCard from '@/components/StatCard';
import FeatureCard from '@/components/FeatureCard';
import StakeholderCard from '@/components/StakeholderCard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 hero-pattern">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-ecosentinel-green-500/10 text-ecosentinel-green-600 border border-ecosentinel-green-500/20 w-fit">
                <span className="flex h-2 w-2 rounded-full bg-ecosentinel-green-500 mr-2"></span>
                Launching Beta Program
              </div>
              
              <h1 className="font-bold">
                <span className="gradient-text">EcoSentinel AI</span>
                <br />
                <span>Nairobi's Guardian Grid</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                The first full-stack ecosystem intelligence platform tackling both wildlife trafficking and modern slavery, headquartered in Nairobi.
              </p>
              
              <div className="text-lg font-medium">
                "Tracking Crime. Protecting Life. Powering Change."
              </div>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <Button size="lg" className="bg-gradient-to-r from-ecosentinel-green-500 to-ecosentinel-blue-500 hover:opacity-90">
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-4 max-w-md">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">250+</span>
                  <span className="text-sm text-muted-foreground">Incidents Tracked</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">12</span>
                  <span className="text-sm text-muted-foreground">Partner NGOs</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">85%</span>
                  <span className="text-sm text-muted-foreground">Prediction Accuracy</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <MapVisualization />
              </div>
              <div className="absolute -top-6 -left-6 -right-6 -bottom-6 bg-gradient-to-r from-ecosentinel-green-500/10 to-ecosentinel-blue-500/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4" id="features">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4">Full-Stack Intelligence Platform</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              EcoSentinel's integrated ecosystem combines cutting-edge technology to detect, predict, and respond to wildlife and human trafficking events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={LineChart} 
              title="AI-Powered Predictive Analytics" 
              description="Machine learning models analyze patterns to predict wildlife crime and labor exploitation hotspots with up to 85% accuracy."
              variant="primary"
            />
            <FeatureCard 
              icon={Radio} 
              title="IoT Sensor Network" 
              description="Connect ranger wearables, animal collars, and environmental sensors for real-time monitoring and incident detection."
              variant="secondary"
            />
            <FeatureCard 
              icon={Lock} 
              title="Blockchain Verification" 
              description="Immutable supply chain tracking ensures ethical sourcing and transparent verification of product origins."
              variant="accent"
            />
            <FeatureCard 
              icon={Database} 
              title="Unified Data Platform" 
              description="Integrate data from multiple sources into actionable intelligence for stakeholders across sectors."
              variant="default"
            />
            <FeatureCard 
              icon={Smartphone} 
              title="Mobile Field Reporting" 
              description="Multilingual apps enable offline field reporting with GPS tagging for areas with limited connectivity."
              variant="default"
            />
            <FeatureCard 
              icon={Shield} 
              title="Integrated Alert System" 
              description="Customized notifications and response playbooks for NGOs, law enforcement, and community leaders."
              variant="default"
            />
          </div>
        </div>
      </section>
      
      {/* Dashboard Preview */}
      <section className="py-20 px-4 bg-muted" id="dashboard">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4">Real-Time Dashboard</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Monitor wildlife and human trafficking incidents, analyze trends, and coordinate responses from a unified interface.
            </p>
          </div>
          
          <Card className="shadow-lg border-0 overflow-hidden">
            <Tabs defaultValue="map" className="w-full">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="font-medium">EcoSentinel AI Dashboard</h3>
                <TabsList className="grid grid-cols-3 w-[400px]">
                  <TabsTrigger value="map">Map View</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="alerts">Alerts</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="map" className="p-0 m-0">
                <div className="grid grid-cols-4 gap-4 p-4">
                  <StatCard 
                    title="Active Incidents" 
                    value={28} 
                    description="Last 24 hours" 
                    icon={AlertTriangle} 
                    trend={{value: "12%", isPositive: false}}
                    variant="outline"
                  />
                  <StatCard 
                    title="Wildlife Trafficking" 
                    value={14} 
                    description="Active cases" 
                    icon={Activity}
                    trend={{value: "8%", isPositive: false}}
                    variant="primary"
                  />
                  <StatCard 
                    title="Labor Exploitation" 
                    value={9} 
                    description="Active cases" 
                    icon={Users}
                    trend={{value: "5%", isPositive: false}}
                    variant="secondary"
                  />
                  <StatCard 
                    title="Risk Score" 
                    value="64%" 
                    description="Regional average" 
                    icon={Search}
                    trend={{value: "3%", isPositive: true}}
                    variant="outline"
                  />
                </div>
                
                <div className="p-4">
                  <MapVisualization className="h-[500px]" />
                </div>
                
                <div className="p-4 border-t">
                  <h4 className="font-medium mb-3">Recent Alerts</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-ecosentinel-alert-red/10 rounded-md">
                      <AlertTriangle className="h-5 w-5 text-ecosentinel-alert-red" />
                      <div>
                        <div className="font-medium">Wildlife trafficking detected in Tsavo East</div>
                        <div className="text-xs text-muted-foreground">22 minutes ago • High priority</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-ecosentinel-alert-orange/10 rounded-md">
                      <AlertTriangle className="h-5 w-5 text-ecosentinel-alert-orange" />
                      <div>
                        <div className="font-medium">Labor exploitation risk in mining operation</div>
                        <div className="text-xs text-muted-foreground">1 hour ago • Medium priority</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-ecosentinel-alert-yellow/10 rounded-md">
                      <AlertTriangle className="h-5 w-5 text-ecosentinel-alert-yellow" />
                      <div>
                        <div className="font-medium">Supply chain verification needed</div>
                        <div className="text-xs text-muted-foreground">2 hours ago • Low priority</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="p-6">
                <div className="flex justify-center items-center h-96 bg-muted/50 rounded-lg">
                  <div className="text-center">
                    <LineChart className="h-16 w-16 mx-auto text-muted-foreground mb-2" />
                    <h3 className="font-medium text-lg">Analytics Dashboard</h3>
                    <p className="text-muted-foreground max-w-md">Detailed trend analysis and predictive models would be displayed here.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="alerts" className="p-6">
                <div className="flex justify-center items-center h-96 bg-muted/50 rounded-lg">
                  <div className="text-center">
                    <MessageSquare className="h-16 w-16 mx-auto text-muted-foreground mb-2" />
                    <h3 className="font-medium text-lg">Alert Management</h3>
                    <p className="text-muted-foreground max-w-md">Real-time notifications and response coordination would be displayed here.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </section>
      
      {/* Stakeholders */}
      <section className="py-20 px-4" id="stakeholders">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4">Tailored for Key Stakeholders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              EcoSentinel AI provides specialized tools for different user groups, creating a collaborative ecosystem to combat exploitation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StakeholderCard 
              title="Conservation Rangers" 
              description="Field teams protecting wildlife and natural resources"
              icon="🌿"
              variant="primary"
              features={[
                "Mobile reporting app with offline capabilities",
                "Real-time alerts on detected threats",
                "GPS-guided navigation to incident locations",
                "Evidence collection and documentation tools"
              ]}
            />
            
            <StakeholderCard 
              title="NGO Coordinators" 
              description="Organizations monitoring human rights and wildlife conservation"
              icon="🤝"
              variant="secondary"
              features={[
                "Comprehensive dashboard for incident tracking",
                "Case management and follow-up workflows",
                "Resource allocation optimization",
                "Collaboration tools for multi-stakeholder response"
              ]}
            />
            
            <StakeholderCard 
              title="ESG Compliance Officers" 
              description="Corporate teams ensuring ethical supply chains"
              icon="🔍"
              variant="accent"
              features={[
                "Supply chain transparency verification",
                "Risk scoring for sourcing regions",
                "Blockchain-certified material provenance",
                "Compliance reporting and documentation"
              ]}
            />
            
            <StakeholderCard 
              title="Government Inspectors" 
              description="Official enforcement and regulatory personnel"
              icon="⚖️"
              variant="default"
              features={[
                "Cross-agency data sharing platform",
                "Legal case building and evidence management",
                "Regulatory compliance monitoring",
                "Inter-jurisdiction coordination tools"
              ]}
            />
            
            <StakeholderCard 
              title="Local Community Members" 
              description="Residents in affected regions contributing vital data"
              icon="🏘️"
              variant="default"
              features={[
                "Anonymous reporting channels",
                "Community alert systems",
                "Educational resources on rights and reporting",
                "Feedback on resolved cases and outcomes"
              ]}
            />
            
            <StakeholderCard 
              title="Research Scientists" 
              description="Academics studying exploitation patterns and solutions"
              icon="🔬"
              variant="default"
              features={[
                "Anonymized data access for research",
                "Pattern analysis and trend identification",
                "Integration with scientific datasets",
                "Model training and improvement contributions"
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-ecosentinel-green-500/10 to-ecosentinel-blue-500/10">
        <div className="container mx-auto text-center">
          <h2 className="font-bold mb-6 max-w-3xl mx-auto">Join the EcoSentinel Network</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you're an NGO, government agency, corporation, or community organization, 
            become part of our growing ecosystem of partners committed to protecting both wildlife and vulnerable communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-ecosentinel-green-500 to-ecosentinel-blue-500 hover:opacity-90">
              Request Demo
            </Button>
            <Button size="lg" variant="outline">
              Partner With Us
            </Button>
          </div>
          
          <div className="mt-12 pt-12 border-t border-border max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-8">Trusted by Organizations Across Sectors</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              <div className="h-12 w-32 bg-muted rounded flex items-center justify-center font-semibold">WildlifeOrg</div>
              <div className="h-12 w-32 bg-muted rounded flex items-center justify-center font-semibold">GovTech</div>
              <div className="h-12 w-32 bg-muted rounded flex items-center justify-center font-semibold">EarthSafe</div>
              <div className="h-12 w-32 bg-muted rounded flex items-center justify-center font-semibold">HumanityPlus</div>
              <div className="h-12 w-32 bg-muted rounded flex items-center justify-center font-semibold">TechForGood</div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

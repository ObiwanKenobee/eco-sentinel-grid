import React, { useEffect, useState } from 'react';
import NavBar from "@/components/NavBar";
import FeatureCard from "@/components/FeatureCard";
import { Shield, Users, BarChart3, GanttChart } from "lucide-react";
import { StakeholderCard } from "@/components/StakeholderCard"; 
import { StatCard } from "@/components/StatCard";
import { MapVisualization } from "@/components/MapVisualization";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export default function Index() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
      setLoading(false);
    };
    
    checkSession();
  }, []);

  const handleLoginClick = () => {
    navigate('/auth');
  };
  
  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ecosentinel-green-500/20 to-ecosentinel-blue-500/20 py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Tracking Crime. Protecting Life. <span className="text-ecosentinel-green-600">Powering Change.</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              The first full-stack ecosystem intelligence platform tackling both wildlife trafficking and modern slavery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {!loading && (
                isLoggedIn ? (
                  <Button 
                    className="bg-gradient-to-r from-ecosentinel-green-500 to-ecosentinel-blue-500 hover:opacity-90"
                    onClick={handleDashboardClick}
                  >
                    Go to Dashboard
                  </Button>
                ) : (
                  <Button 
                    className="bg-gradient-to-r from-ecosentinel-green-500 to-ecosentinel-blue-500 hover:opacity-90"
                    onClick={handleLoginClick}
                  >
                    Login / Sign Up
                  </Button>
                )
              )}
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
              <MapVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              title="Wildlife Protection" 
              description="AI-powered detection and prediction of wildlife trafficking events in real-time."
              icon={Shield}
              variant="primary"
            />
            <FeatureCard 
              title="Human Rights Safeguarding" 
              description="Tools to identify and prevent modern slavery and human rights abuses."
              icon={Users}
              variant="secondary"
            />
            <FeatureCard 
              title="Supply Chain Verification" 
              description="Blockchain-based transparency for ethical sourcing verification."
              icon={GanttChart}
              variant="accent"
            />
            <FeatureCard 
              title="Data-Driven Action" 
              description="Actionable insights for NGOs, governments, and frontline communities."
              icon={BarChart3}
              variant="default"
            />
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="py-16 bg-gradient-to-r from-ecosentinel-earth-100 to-ecosentinel-green-500/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Intelligent Dashboard</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">Our customized dashboards provide real-time insights for different stakeholders, from field rangers to corporate ESG officers.</p>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-ecosentinel-green-600 to-ecosentinel-blue-600 p-4 text-white">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-white/30"></div>
                <div className="h-3 w-3 rounded-full bg-white/30"></div>
                <div className="h-3 w-3 rounded-full bg-white/30"></div>
                <span className="ml-2 text-sm font-medium">EcoSentinel Dashboard</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <StatCard label="Wildlife Incidents Tracked" value="2,450" trend="+12%" trendDirection="up" />
                <StatCard label="Verified Supply Chains" value="87" trend="+23%" trendDirection="up" />
                <StatCard label="Risk Areas Identified" value="142" trend="-8%" trendDirection="down" />
              </div>
              
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-gray-500">
                  <p className="font-medium">Interactive Map Visualization</p>
                  <p className="text-sm">Wildlife trafficking hotspots and supply chain routes</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  className="bg-gradient-to-r from-ecosentinel-green-500 to-ecosentinel-blue-500 hover:opacity-90"
                  onClick={handleLoginClick}
                >
                  Access Dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section id="stakeholders" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Who We Serve</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">EcoSentinel AI connects multiple stakeholders across the ecosystem protection landscape.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StakeholderCard 
              title="Field Rangers" 
              description="Equipping those on the frontlines with tools to detect, report, and respond to wildlife crime."
              imageUrl="/placeholder.svg"
            />
            <StakeholderCard 
              title="NGOs & Advocates" 
              description="Providing data-driven insights for more effective conservation and human rights campaigns."
              imageUrl="/placeholder.svg"
            />
            <StakeholderCard 
              title="Government Agencies" 
              description="Supporting policy enforcement with intelligence and coordinated response systems."
              imageUrl="/placeholder.svg"
            />
            <StakeholderCard 
              title="Local Communities" 
              description="Empowering residents to report suspicious activities and participate in protection efforts."
              imageUrl="/placeholder.svg"
            />
            <StakeholderCard 
              title="ESG Officers" 
              description="Verifying ethical supply chains and demonstrating corporate responsibility commitments."
              imageUrl="/placeholder.svg"
            />
            <StakeholderCard 
              title="Research Institutions" 
              description="Advancing conservation science with comprehensive ecosystem data and analytical tools."
              imageUrl="/placeholder.svg"
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-ecosentinel-blue-500/10 to-ecosentinel-green-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About EcoSentinel AI</h2>
            <p className="mb-8 text-lg">
              Based in Nairobi, EcoSentinel AI is a pioneering platform at the intersection of environmental and human rights protection. We combine cutting-edge technology with on-the-ground expertise to create a unified approach to combating wildlife trafficking and modern slavery.
            </p>
            <p className="mb-8">
              Our mission is to create a world where both ecosystems and communities thrive free from exploitation. By connecting diverse stakeholders and providing powerful tools for detection, verification, and response, we're building a model that can scale globally to protect vulnerable populations - both human and wildlife.
            </p>
            <Button variant="outline">Learn About Our Impact</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

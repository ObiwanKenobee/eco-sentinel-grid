
import React from 'react';
import { cn } from '@/lib/utils';

interface MapVisualizationProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const MapVisualization: React.FC<MapVisualizationProps> = ({ className, ...props }) => {
  // Simplified Africa map with Kenya highlighted
  return (
    <div 
      className={cn("relative w-full rounded-lg overflow-hidden bg-ecosentinel-blue-50 shadow-lg", className)} 
      style={{ height: '400px' }}
      {...props}
    >
      <div className="absolute inset-0 bg-pattern-dots">
        {/* This would be replaced with an actual map library in a real implementation */}
        <div className="p-4 bg-gradient-radial from-ecosentinel-green-500/20 via-transparent absolute" 
          style={{ width: '120px', height: '120px', top: '45%', left: '60%' }}>
        </div>
        
        {/* Pulse animations for incident spots */}
        <div className="absolute h-4 w-4 rounded-full bg-ecosentinel-alert-red animate-pulse" 
          style={{ top: '48%', left: '62%' }}>
          <div className="absolute inset-0 rounded-full bg-ecosentinel-alert-red/30 animate-ping"></div>
        </div>
        <div className="absolute h-3 w-3 rounded-full bg-ecosentinel-alert-yellow animate-pulse" 
          style={{ top: '43%', left: '58%' }}>
          <div className="absolute inset-0 rounded-full bg-ecosentinel-alert-yellow/30 animate-ping"></div>
        </div>
        <div className="absolute h-3 w-3 rounded-full bg-ecosentinel-alert-orange animate-pulse" 
          style={{ top: '52%', left: '59%' }}>
          <div className="absolute inset-0 rounded-full bg-ecosentinel-alert-orange/30 animate-ping"></div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
        <h4 className="text-sm font-medium">Real-time Incident Detection</h4>
        <p className="text-xs text-muted-foreground">3 active incidents detected in East Africa region</p>
      </div>
      
      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button className="h-8 w-8 bg-background/80 backdrop-blur-sm rounded flex items-center justify-center hover:bg-background">
          <span className="text-xl">+</span>
        </button>
        <button className="h-8 w-8 bg-background/80 backdrop-blur-sm rounded flex items-center justify-center hover:bg-background">
          <span className="text-xl">−</span>
        </button>
      </div>
      
      {/* Legend */}
      <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm rounded p-2 text-xs">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-2 w-2 rounded-full bg-ecosentinel-alert-red"></div>
          <span>Wildlife trafficking</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div className="h-2 w-2 rounded-full bg-ecosentinel-alert-orange"></div>
          <span>Labor exploitation</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-ecosentinel-alert-yellow"></div>
          <span>Supply chain risk</span>
        </div>
      </div>
    </div>
  );
};

export default MapVisualization;

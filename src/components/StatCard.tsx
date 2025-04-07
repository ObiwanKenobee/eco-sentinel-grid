
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: {
    value: string | number;
    isPositive: boolean;
  };
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend, 
  variant = 'default', 
  className, 
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "rounded-lg p-4 flex flex-col gap-2",
        variant === 'default' && "bg-card text-card-foreground",
        variant === 'primary' && "bg-ecosentinel-green-500/10 border border-ecosentinel-green-500/20",
        variant === 'secondary' && "bg-ecosentinel-blue-500/10 border border-ecosentinel-blue-500/20",
        variant === 'outline' && "border bg-transparent",
        className
      )} 
      {...props}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-muted-foreground">{title}</h4>
        {Icon && (
          <div className={cn(
            "h-8 w-8 rounded-full flex items-center justify-center",
            variant === 'primary' && "bg-ecosentinel-green-500/20 text-ecosentinel-green-600",
            variant === 'secondary' && "bg-ecosentinel-blue-500/20 text-ecosentinel-blue-600",
            variant === 'default' && "bg-muted text-muted-foreground", 
            variant === 'outline' && "bg-background text-muted-foreground"
          )}>
            <Icon className="h-4 w-4" />
          </div>
        )}
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-2xl font-semibold">{value}</div>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        {trend && (
          <div className={cn(
            "text-xs flex items-center gap-1",
            trend.isPositive ? "text-ecosentinel-green-500" : "text-ecosentinel-alert-red"
          )}>
            <span>
              {trend.isPositive ? '↑' : '↓'} {trend.value}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;

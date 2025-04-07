
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  iconClassName?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  variant = 'default',
  iconClassName,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-lg p-6 transition-all duration-300",
        variant === 'default' && "bg-card hover:shadow-md",
        variant === 'primary' && "bg-ecosentinel-green-500/10 hover:bg-ecosentinel-green-500/20",
        variant === 'secondary' && "bg-ecosentinel-blue-500/10 hover:bg-ecosentinel-blue-500/20",
        variant === 'accent' && "bg-ecosentinel-earth-100 hover:bg-ecosentinel-earth-200",
        className
      )}
      {...props}
    >
      <div className={cn(
        "h-12 w-12 rounded-full flex items-center justify-center mb-4",
        variant === 'default' && "bg-muted",
        variant === 'primary' && "bg-ecosentinel-green-500/20",
        variant === 'secondary' && "bg-ecosentinel-blue-500/20",
        variant === 'accent' && "bg-ecosentinel-earth-200",
        iconClassName
      )}>
        <Icon className={cn(
          "h-6 w-6",
          variant === 'primary' && "text-ecosentinel-green-600",
          variant === 'secondary' && "text-ecosentinel-blue-600",
          variant === 'accent' && "text-ecosentinel-earth-500",
        )} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;

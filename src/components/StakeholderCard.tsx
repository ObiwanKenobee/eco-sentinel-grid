
import React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';

interface StakeholderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  features?: string[];
  icon?: string | React.ReactNode;
  imageUrl?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
}

const StakeholderCard: React.FC<StakeholderCardProps> = ({
  title,
  description,
  features = [],
  imageUrl,
  icon,
  variant = 'default',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-lg border p-6 transition-all duration-300 hover:shadow-md",
        variant === 'default' && "bg-card border-border",
        variant === 'primary' && "bg-ecosentinel-green-500/5 border-ecosentinel-green-500/20",
        variant === 'secondary' && "bg-ecosentinel-blue-500/5 border-ecosentinel-blue-500/20",
        variant === 'accent' && "bg-ecosentinel-earth-100 border-ecosentinel-earth-300/30",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4">
          {typeof icon === 'string' ? (
            <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center text-2xl font-bold">
              {icon}
            </div>
          ) : (
            icon
          )}
        </div>
      )}

      {imageUrl && (
        <div className="mb-4 overflow-hidden rounded-md">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-40 object-cover"
          />
        </div>
      )}
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-2">
              <CheckIcon className={cn(
                "h-5 w-5 mt-0.5 flex-shrink-0",
                variant === 'primary' && "text-ecosentinel-green-500",
                variant === 'secondary' && "text-ecosentinel-blue-500",
                variant === 'accent' && "text-ecosentinel-earth-500",
                variant === 'default' && "text-primary"
              )} />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StakeholderCard;

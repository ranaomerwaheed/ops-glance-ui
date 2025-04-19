
import { ArrowUp, ArrowDown, LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
}

const StatsCard = ({ title, value, change, icon: Icon }: StatsCardProps) => {
  const isPositive = change >= 0;
  
  return (
    <div className="stats-card">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
      <div className="mt-2 flex items-center">
        <span className={`flex items-center text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <ArrowUp className="mr-1 h-4 w-4" /> : <ArrowDown className="mr-1 h-4 w-4" />}
          {Math.abs(change)}%
        </span>
        <span className="ml-2 text-sm text-gray-500">vs last month</span>
      </div>
    </div>
  );
};

export default StatsCard;

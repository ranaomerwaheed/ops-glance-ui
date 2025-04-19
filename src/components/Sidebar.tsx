
import { Home, BarChart2, Users, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const navItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BarChart2, label: 'Analytics' },
    { icon: Users, label: 'Team' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-40 h-screen bg-white transition-all duration-300",
      isOpen ? "w-64" : "w-20"
    )}>
      <div className="flex h-16 items-center justify-between border-b px-4">
        {isOpen && <span className="text-xl font-semibold">Operations</span>}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          {isOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </button>
      </div>
      
      <nav className="space-y-1 p-4">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={cn(
              "nav-item",
              item.active && "active"
            )}
          >
            <item.icon className="h-5 w-5" />
            {isOpen && <span>{item.label}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

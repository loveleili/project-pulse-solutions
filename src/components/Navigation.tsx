
import { Link, useLocation } from 'react-router-dom';
import { Code2, BarChart3, Users, Clock, FileText, Settings, DollarSign } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: BarChart3 },
    { path: '/projects', label: 'Proyectos', icon: Code2 },
    { path: '/developers', label: 'Desarrolladores', icon: Users },
    { path: '/time-tracking', label: 'Control de Tiempo', icon: Clock },
    { path: '/billing', label: 'Facturación', icon: DollarSign },
    { path: '/reports', label: 'Reportes', icon: FileText },
    { path: '/settings', label: 'Configuración', icon: Settings },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Code2 className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">Code Solutions</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

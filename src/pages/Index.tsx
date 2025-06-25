
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Users, Code2, Clock, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';

const Index = () => {
  const metrics = [
    {
      title: 'Proyectos Activos',
      value: '12',
      change: '+2 este mes',
      icon: Code2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Desarrolladores',
      value: '20',
      change: '5 disponibles',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Horas Facturadas',
      value: '1,247',
      change: '+18% vs mes anterior',
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Ingresos del Mes',
      value: '$45,280',
      change: '+12% vs mes anterior',
      icon: DollarSign,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    }
  ];

  const activeProjects = [
    { name: 'E-commerce Platform', client: 'TechCorp', progress: 75, team: 5, deadline: '2024-08-15', status: 'En progreso' },
    { name: 'Mobile Banking App', client: 'FinanceFlow', progress: 40, team: 3, deadline: '2024-09-30', status: 'En progreso' },
    { name: 'CRM System', client: 'SalesMax', progress: 90, team: 4, deadline: '2024-07-20', status: 'Finalizando' },
    { name: 'Inventory Management', client: 'LogiCorp', progress: 25, team: 2, deadline: '2024-10-15', status: 'Iniciando' },
  ];

  const recentActivities = [
    { action: 'Juan Pérez registró 8 horas en E-commerce Platform', time: 'Hace 2 horas', type: 'time' },
    { action: 'Nuevo proyecto "Analytics Dashboard" asignado a María García', time: 'Hace 4 horas', type: 'project' },
    { action: 'Factura #2024-045 generada para TechCorp ($12,500)', time: 'Hace 1 día', type: 'billing' },
    { action: 'Carlos López completó la fase de desarrollo en CRM System', time: 'Hace 1 día', type: 'milestone' },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Vista general de Code Solutions</p>
        </div>

        {/* Métricas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{metric.change}</p>
                    </div>
                    <div className={`p-3 rounded-full ${metric.bgColor}`}>
                      <Icon className={`h-6 w-6 ${metric.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Proyectos activos */}
          <Card className="animate-slide-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code2 className="h-5 w-5 mr-2 text-primary-500" />
                Proyectos Activos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeProjects.map((project, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{project.name}</h4>
                      <Badge variant={project.status === 'Finalizando' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Cliente: {project.client}</p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">Progreso</span>
                      <span className="text-sm font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="mb-2" />
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{project.team} desarrolladores</span>
                      <span>Fecha límite: {project.deadline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Actividad reciente */}
          <Card className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-primary-500" />
                Actividad Reciente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0">
                      {activity.type === 'time' && <Clock className="h-4 w-4 text-purple-500 mt-1" />}
                      {activity.type === 'project' && <Code2 className="h-4 w-4 text-blue-500 mt-1" />}
                      {activity.type === 'billing' && <DollarSign className="h-4 w-4 text-green-500 mt-1" />}
                      {activity.type === 'milestone' && <TrendingUp className="h-4 w-4 text-orange-500 mt-1" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alertas y notificaciones */}
        <Card className="mt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
              Alertas y Notificaciones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <span className="text-sm text-yellow-800">
                  El proyecto "CRM System" tiene fecha límite en 5 días
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <Users className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-blue-800">
                  3 desarrolladores han superado las 40 horas semanales
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <DollarSign className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-800">
                  2 facturas pendientes de envío esta semana
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;

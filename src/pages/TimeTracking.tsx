
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Play, Pause, Square, Filter } from 'lucide-react';

const TimeTracking = () => {
  const todayEntries = [
    {
      id: 1,
      developer: 'Juan Pérez',
      project: 'E-commerce Platform',
      task: 'Implementación del carrito de compras',
      startTime: '09:00',
      endTime: '12:30',
      duration: '3h 30m',
      status: 'completed',
      description: 'Desarrollo de funcionalidades del carrito y integración con API de pagos'
    },
    {
      id: 2,
      developer: 'María García',
      project: 'E-commerce Platform',
      task: 'API de autenticación',
      startTime: '08:30',
      endTime: 'En progreso',
      duration: '4h 15m',
      status: 'active',
      description: 'Implementación de JWT y middleware de autenticación'
    },
    {
      id: 3,
      developer: 'Carlos López',
      project: 'Mobile Banking App',
      task: 'Diseño de wireframes',
      startTime: '10:00',
      endTime: '15:00',
      duration: '5h 00m',
      status: 'completed',
      description: 'Creación de wireframes para pantallas principales de la app'
    },
    {
      id: 4,
      developer: 'Elena Morales',
      project: 'CRM System',
      task: 'Testing de componentes',
      startTime: '14:00',
      endTime: 'En progreso',
      duration: '2h 45m',
      status: 'active',
      description: 'Pruebas unitarias y de integración para módulo de contactos'
    }
  ];

  const weeklyStats = [
    { developer: 'Juan Pérez', project: 'E-commerce Platform', hours: 32, target: 40, efficiency: 89 },
    { developer: 'María García', project: 'E-commerce Platform', hours: 38, target: 40, efficiency: 92 },
    { developer: 'Carlos López', project: 'Mobile Banking App', hours: 35, target: 40, efficiency: 88 },
    { developer: 'Elena Morales', project: 'CRM System', hours: 41, target: 40, efficiency: 95 },
    { developer: 'Luis Martín', project: 'Múltiples', hours: 28, target: 40, efficiency: 85 },
    { developer: 'Ana Rodríguez', project: 'En vacaciones', hours: 0, target: 40, efficiency: 0 }
  ];

  const projectHours = [
    { project: 'E-commerce Platform', totalHours: 145, thisWeek: 28, budget: 200, completion: 72 },
    { project: 'Mobile Banking App', totalHours: 87, thisWeek: 15, budget: 150, completion: 58 },
    { project: 'CRM System', totalHours: 120, thisWeek: 18, budget: 130, completion: 92 },
    { project: 'Inventory Management', totalHours: 45, thisWeek: 12, budget: 100, completion: 45 }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Play className="h-4 w-4 text-green-600" />;
      case 'paused':
        return <Pause className="h-4 w-4 text-yellow-600" />;
      case 'completed':
        return <Square className="h-4 w-4 text-gray-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Control de Tiempo</h1>
            <p className="text-gray-600">Seguimiento de horas trabajadas por proyecto y desarrollador</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button className="bg-primary-500 hover:bg-primary-600">
              <Clock className="h-4 w-4 mr-2" />
              Nuevo Registro
            </Button>
          </div>
        </div>

        {/* Resumen diario */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">42</p>
                <p className="text-sm text-gray-600">Horas Hoy</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">186</p>
                <p className="text-sm text-gray-600">Horas Esta Semana</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">4</p>
                <p className="text-sm text-gray-600">Desarrolladores Activos</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">8</p>
                <p className="text-sm text-gray-600">Proyectos en Progreso</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Entradas de tiempo de hoy */}
          <div className="space-y-6">
            <Card className="animate-slide-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary-500" />
                  Registro de Hoy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayEntries.map((entry, index) => (
                    <div key={entry.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(entry.status)}
                          <h4 className="font-semibold text-gray-900">{entry.developer}</h4>
                        </div>
                        <Badge className={getStatusColor(entry.status)}>
                          {entry.status === 'active' ? 'Activo' : 
                           entry.status === 'paused' ? 'Pausado' : 'Completado'}
                        </Badge>
                      </div>
                      
                      <div className="mb-2">
                        <p className="text-sm font-medium text-gray-700">{entry.project}</p>
                        <p className="text-sm text-gray-600">{entry.task}</p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span>{entry.startTime} - {entry.endTime}</span>
                        <span className="font-medium text-primary-600">{entry.duration}</span>
                      </div>
                      
                      <p className="text-xs text-gray-500">{entry.description}</p>
                      
                      {entry.status === 'active' && (
                        <div className="mt-3 flex space-x-2">
                          <Button size="sm" variant="outline" className="text-yellow-600 border-yellow-300">
                            <Pause className="h-3 w-3 mr-1" />
                            Pausar
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 border-red-300">
                            <Square className="h-3 w-3 mr-1" />
                            Finalizar
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Horas por proyecto */}
            <Card className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary-500" />
                  Horas por Proyecto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projectHours.map((project, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{project.project}</h4>
                        <Badge variant="outline">{project.completion}% completo</Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Total: <span className="font-medium">{project.totalHours}h</span></p>
                          <p className="text-gray-600">Esta semana: <span className="font-medium">{project.thisWeek}h</span></p>
                        </div>
                        <div>
                          <p className="text-gray-600">Presupuesto: <span className="font-medium">{project.budget}h</span></p>
                          <p className="text-gray-600">Restante: <span className="font-medium">{project.budget - project.totalHours}h</span></p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Estadísticas semanales */}
          <Card className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary-500" />
                Estadísticas Semanales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyStats.map((stat, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{stat.developer}</h4>
                        <p className="text-sm text-gray-600">{stat.project}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary-600">{stat.hours}h</p>
                        <p className="text-xs text-gray-500">de {stat.target}h</p>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((stat.hours / stat.target) * 100, 100)}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">
                        {stat.hours > stat.target ? 'Sobrecarga' : 
                         stat.hours === 0 ? 'Sin actividad' : 
                         `${stat.target - stat.hours}h restantes`}
                      </span>
                      <span className={`font-medium ${
                        stat.efficiency >= 90 ? 'text-green-600' : 
                        stat.efficiency >= 80 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {stat.efficiency}% eficiencia
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TimeTracking;

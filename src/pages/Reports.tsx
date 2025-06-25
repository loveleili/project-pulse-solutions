
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BarChart, FileText, TrendingUp, Calendar, Download, Filter } from 'lucide-react';

const Reports = () => {
  const projectReports = [
    {
      project: 'E-commerce Platform',
      client: 'TechCorp',
      progress: 75,
      budget: 25000,
      spent: 18750,
      hoursWorked: 750,
      estimatedHours: 1000,
      profitability: 25,
      teamSize: 5,
      efficiency: 89,
      status: 'En progreso'
    },
    {
      project: 'Mobile Banking App',
      client: 'FinanceFlow',
      progress: 40,
      budget: 35000,
      spent: 14000,
      hoursWorked: 280,
      estimatedHours: 700,
      profitability: 60,
      teamSize: 3,
      efficiency: 92,
      status: 'En progreso'
    },
    {
      project: 'CRM System',
      client: 'SalesMax',
      progress: 90,
      budget: 18000,
      spent: 16200,
      hoursWorked: 540,
      estimatedHours: 600,
      profitability: 10,
      teamSize: 4,
      efficiency: 95,
      status: 'Finalizando'
    }
  ];

  const developerReports = [
    {
      name: 'Juan Pérez',
      role: 'Senior Frontend',
      hoursThisMonth: 168,
      projectsActive: 2,
      efficiency: 92,
      revenue: 7560,
      tasksCompleted: 28,
      avgTaskTime: '6h',
      utilization: 95
    },
    {
      name: 'María García',
      role: 'Full Stack',
      hoursThisMonth: 172,
      projectsActive: 1,
      efficiency: 88,
      revenue: 7224,
      tasksCompleted: 24,
      avgTaskTime: '7h',
      utilization: 97
    },
    {
      name: 'Carlos López',
      role: 'UI/UX Designer',
      hoursThisMonth: 156,
      projectsActive: 3,
      efficiency: 95,
      revenue: 6240,
      tasksCompleted: 32,
      avgTaskTime: '5h',
      utilization: 88
    }
  ];

  const monthlyMetrics = [
    { month: 'Enero', revenue: 45000, hours: 1120, projects: 8, efficiency: 87 },
    { month: 'Febrero', revenue: 38500, hours: 980, projects: 7, efficiency: 89 },
    { month: 'Marzo', revenue: 52000, hours: 1300, projects: 10, efficiency: 91 },
    { month: 'Abril', revenue: 41200, hours: 1050, projects: 8, efficiency: 88 },
    { month: 'Mayo', revenue: 48900, hours: 1225, projects: 9, efficiency: 90 },
    { month: 'Junio', revenue: 42850, hours: 1170, projects: 8, efficiency: 92 }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En progreso':
        return 'bg-blue-100 text-blue-800';
      case 'Finalizando':
        return 'bg-green-100 text-green-800';
      case 'Pausado':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProfitabilityColor = (profitability: number) => {
    if (profitability >= 30) return 'text-green-600';
    if (profitability >= 15) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 90) return 'text-green-600';
    if (efficiency >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Reportes y Análisis</h1>
            <p className="text-gray-600">Análisis de rendimiento, rentabilidad y productividad</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Período
            </Button>
            <Button className="bg-primary-500 hover:bg-primary-600">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* Métricas generales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">$128,450</p>
                <p className="text-sm text-gray-600">Ingresos del Mes</p>
                <p className="text-xs text-green-600 mt-1">+12% vs mes anterior</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">3,425</p>
                <p className="text-sm text-gray-600">Horas Facturadas</p>
                <p className="text-xs text-green-600 mt-1">+8% vs mes anterior</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">91%</p>
                <p className="text-sm text-gray-600">Eficiencia Promedio</p>
                <p className="text-xs text-green-600 mt-1">+3% vs mes anterior</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">28%</p>
                <p className="text-sm text-gray-600">Margen de Ganancia</p>
                <p className="text-xs text-green-600 mt-1">+5% vs mes anterior</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reporte de proyectos */}
          <Card className="animate-slide-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-primary-500" />
                Análisis de Proyectos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {projectReports.map((project, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{project.project}</h4>
                        <p className="text-sm text-gray-600">{project.client}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        <span className="text-sm font-bold text-primary-600">{project.progress}%</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Presupuesto:</span>
                          <span className="font-medium">{formatCurrency(project.budget)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Gastado:</span>
                          <span className="font-medium">{formatCurrency(project.spent)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Rentabilidad:</span>
                          <span className={`font-medium ${getProfitabilityColor(project.profitability)}`}>
                            {project.profitability}%
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Horas trabajadas:</span>
                          <span className="font-medium">{project.hoursWorked}h</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Horas estimadas:</span>
                          <span className="font-medium">{project.estimatedHours}h</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Eficiencia:</span>
                          <span className={`font-medium ${getEfficiencyColor(project.efficiency)}`}>
                            {project.efficiency}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Equipo: {project.teamSize} desarrolladores</span>
                      <span>Restante: {formatCurrency(project.budget - project.spent)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reporte de desarrolladores */}
          <Card className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-primary-500" />
                Rendimiento de Desarrolladores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {developerReports.map((developer, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{developer.name}</h4>
                        <p className="text-sm text-gray-600">{developer.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary-600">{formatCurrency(developer.revenue)}</p>
                        <p className="text-xs text-gray-500">Ingresos del mes</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Horas:</span>
                          <span className="font-medium">{developer.hoursThisMonth}h</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Proyectos:</span>
                          <span className="font-medium">{developer.projectsActive}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Tareas:</span>
                          <span className="font-medium">{developer.tasksCompleted}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Eficiencia:</span>
                          <span className={`font-medium ${getEfficiencyColor(developer.efficiency)}`}>
                            {developer.efficiency}%
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Utilización:</span>
                          <span className="font-medium">{developer.utilization}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Tiempo/tarea:</span>
                          <span className="font-medium">{developer.avgTaskTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${developer.efficiency}%` }}
                      ></div>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      Rendimiento general: {developer.efficiency}%
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Métricas mensuales */}
        <Card className="mt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary-500" />
              Tendencias Mensuales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {monthlyMetrics.map((metric, index) => (
                <div key={index} className="border rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.month}</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="text-lg font-bold text-primary-600">{formatCurrency(metric.revenue)}</p>
                      <p className="text-xs text-gray-500">Ingresos</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">{metric.hours}h</p>
                      <p className="text-xs text-gray-500">Horas</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">{metric.projects}</p>
                      <p className="text-xs text-gray-500">Proyectos</p>
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${getEfficiencyColor(metric.efficiency)}`}>
                        {metric.efficiency}%
                      </p>
                      <p className="text-xs text-gray-500">Eficiencia</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Reports;

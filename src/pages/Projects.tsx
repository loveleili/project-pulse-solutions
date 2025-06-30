
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Users, Clock, DollarSign } from 'lucide-react';
import NewProjectDialog from '@/components/NewProjectDialog';
import ProjectDetailsDialog from '@/components/ProjectDetailsDialog';
import ManageProjectDialog from '@/components/ManageProjectDialog';
import ProjectOptionsMenu from '@/components/ProjectOptionsMenu';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      client: 'TechCorp',
      status: 'En progreso',
      progress: 75,
      budget: 25000,
      spent: 18750,
      startDate: '2024-03-01',
      endDate: '2024-08-15',
      team: [
        { name: 'Juan Pérez', role: 'Frontend', avatar: 'JP' },
        { name: 'María García', role: 'Backend', avatar: 'MG' },
        { name: 'Carlos López', role: 'UI/UX', avatar: 'CL' },
        { name: 'Ana Rodríguez', role: 'QA', avatar: 'AR' },
        { name: 'Luis Martín', role: 'DevOps', avatar: 'LM' }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      hoursLogged: 750,
      estimatedHours: 1000
    },
    {
      id: 2,
      name: 'Mobile Banking App',
      client: 'FinanceFlow',
      status: 'En progreso',
      progress: 40,
      budget: 35000,
      spent: 14000,
      startDate: '2024-04-15',
      endDate: '2024-09-30',
      team: [
        { name: 'Pedro Sánchez', role: 'Mobile Dev', avatar: 'PS' },
        { name: 'Laura Torres', role: 'Backend', avatar: 'LT' },
        { name: 'Miguel Ruiz', role: 'Security', avatar: 'MR' }
      ],
      technologies: ['React Native', 'Express.js', 'MongoDB', 'Firebase'],
      hoursLogged: 280,
      estimatedHours: 700
    },
    {
      id: 3,
      name: 'CRM System',
      client: 'SalesMax',
      status: 'Finalizando',
      progress: 90,
      budget: 18000,
      spent: 16200,
      startDate: '2024-02-01',
      endDate: '2024-07-20',
      team: [
        { name: 'Elena Morales', role: 'Fullstack', avatar: 'EM' },
        { name: 'Roberto Silva', role: 'Backend', avatar: 'RS' },
        { name: 'Carmen Díaz', role: 'Frontend', avatar: 'CD' },
        { name: 'Javier Herrera', role: 'QA', avatar: 'JH' }
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
      hoursLogged: 540,
      estimatedHours: 600
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En progreso':
        return 'bg-blue-100 text-blue-800';
      case 'Finalizando':
        return 'bg-green-100 text-green-800';
      case 'Pausado':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Proyectos</h1>
            <p className="text-gray-600">Administra todos los proyectos de desarrollo</p>
          </div>
          <NewProjectDialog />
        </div>

        {/* Resumen de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">12</p>
                <p className="text-sm text-gray-600">Total Proyectos</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">8</p>
                <p className="text-sm text-gray-600">En Progreso</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">3</p>
                <p className="text-sm text-gray-600">Finalizando</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">1</p>
                <p className="text-sm text-gray-600">Pausados</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de proyectos */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow duration-200 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <CardTitle className="text-xl">{project.name}</CardTitle>
                      <p className="text-gray-600 mt-1">Cliente: {project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <ProjectOptionsMenu project={project} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Progreso y cronograma */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Progreso del proyecto</span>
                        <span className="text-sm font-bold text-primary-600">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="mb-2" />
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{project.startDate} - {project.endDate}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{project.hoursLogged} / {project.estimatedHours} horas</span>
                    </div>
                  </div>

                  {/* Presupuesto */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Presupuesto utilizado</span>
                        <span className="text-sm font-bold">
                          {formatCurrency(project.spent)} / {formatCurrency(project.budget)}
                        </span>
                      </div>
                      <Progress 
                        value={(project.spent / project.budget) * 100} 
                        className="mb-2"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <DollarSign className="h-4 w-4" />
                      <span>Restante: {formatCurrency(project.budget - project.spent)}</span>
                    </div>
                  </div>

                  {/* Equipo y tecnologías */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Users className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">Equipo ({project.team.length})</span>
                      </div>
                      <div className="flex -space-x-2">
                        {project.team.slice(0, 5).map((member, idx) => (
                          <div
                            key={idx}
                            className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-white"
                            title={`${member.name} - ${member.role}`}
                          >
                            {member.avatar}
                          </div>
                        ))}
                        {project.team.length > 5 && (
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-medium border-2 border-white">
                            +{project.team.length - 5}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-700 block mb-2">Tecnologías</span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
                  <ProjectDetailsDialog project={project}>
                    <Button variant="outline" size="sm">
                      Ver Detalles
                    </Button>
                  </ProjectDetailsDialog>
                  <ManageProjectDialog project={project}>
                    <Button size="sm" className="bg-primary-500 hover:bg-primary-600">
                      Gestionar
                    </Button>
                  </ManageProjectDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

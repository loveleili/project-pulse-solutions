
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Plus, Mail, Phone, MapPin, Code, Award, Calendar } from 'lucide-react';

const Developers = () => {
  const developers = [
    {
      id: 1,
      name: 'Juan Pérez',
      role: 'Senior Frontend Developer',
      email: 'juan.perez@codesolutions.com',
      phone: '+1 (555) 123-4567',
      location: 'Buenos Aires, Argentina',
      avatar: 'JP',
      status: 'Disponible',
      currentProject: null,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
      experience: '5 años',
      hourlyRate: 45,
      hoursThisWeek: 32,
      efficiency: 92,
      completedProjects: 12,
      joinDate: '2022-03-15'
    },
    {
      id: 2,
      name: 'María García',
      role: 'Full Stack Developer',
      email: 'maria.garcia@codesolutions.com',
      phone: '+1 (555) 234-5678',
      location: 'Madrid, España',
      avatar: 'MG',
      status: 'Ocupado',
      currentProject: 'E-commerce Platform',
      skills: ['Node.js', 'React', 'PostgreSQL', 'Docker', 'AWS'],
      experience: '4 años',
      hourlyRate: 42,
      hoursThisWeek: 40,
      efficiency: 88,
      completedProjects: 8,
      joinDate: '2022-07-20'
    },
    {
      id: 3,
      name: 'Carlos López',
      role: 'UI/UX Designer',
      email: 'carlos.lopez@codesolutions.com',
      phone: '+1 (555) 345-6789',
      location: 'Ciudad de México, México',
      avatar: 'CL',
      status: 'Ocupado',
      currentProject: 'Mobile Banking App',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research'],
      experience: '6 años',
      hourlyRate: 40,
      hoursThisWeek: 38,
      efficiency: 95,
      completedProjects: 15,
      joinDate: '2021-11-10'
    },
    {
      id: 4,
      name: 'Ana Rodríguez',
      role: 'Backend Developer',
      email: 'ana.rodriguez@codesolutions.com',
      phone: '+1 (555) 456-7890',
      location: 'Bogotá, Colombia',
      avatar: 'AR',
      status: 'En vacaciones',
      currentProject: null,
      skills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
      experience: '3 años',
      hourlyRate: 38,
      hoursThisWeek: 0,
      efficiency: 87,
      completedProjects: 6,
      joinDate: '2023-02-01'
    },
    {
      id: 5,
      name: 'Luis Martín',
      role: 'DevOps Engineer',
      email: 'luis.martin@codesolutions.com',
      phone: '+1 (555) 567-8901',
      location: 'Barcelona, España',
      avatar: 'LM',
      status: 'Disponible',
      currentProject: null,
      skills: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'MongoDB'],
      experience: '7 años',
      hourlyRate: 50,
      hoursThisWeek: 35,
      efficiency: 91,
      completedProjects: 20,
      joinDate: '2021-05-12'
    },
    {
      id: 6,
      name: 'Elena Morales',
      role: 'Mobile Developer',
      email: 'elena.morales@codesolutions.com',
      phone: '+1 (555) 678-9012',
      location: 'Santiago, Chile',
      avatar: 'EM',
      status: 'Ocupado',
      currentProject: 'CRM System',
      skills: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'API Integration'],
      experience: '4 años',
      hourlyRate: 43,
      hoursThisWeek: 42,
      efficiency: 89,
      completedProjects: 9,
      joinDate: '2022-09-05'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disponible':
        return 'bg-green-100 text-green-800';
      case 'Ocupado':
        return 'bg-blue-100 text-blue-800';
      case 'En vacaciones':
        return 'bg-purple-100 text-purple-800';
      case 'Licencia':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const availableDevelopers = developers.filter(dev => dev.status === 'Disponible').length;
  const busyDevelopers = developers.filter(dev => dev.status === 'Ocupado').length;
  const onLeaveDevelopers = developers.filter(dev => dev.status === 'En vacaciones' || dev.status === 'Licencia').length;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Desarrolladores</h1>
            <p className="text-gray-600">Administra tu equipo de desarrollo</p>
          </div>
          <Button className="bg-primary-500 hover:bg-primary-600">
            <Plus className="h-4 w-4 mr-2" />
            Añadir Desarrollador
          </Button>
        </div>

        {/* Resumen del equipo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{developers.length}</p>
                <p className="text-sm text-gray-600">Total Desarrolladores</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{availableDevelopers}</p>
                <p className="text-sm text-gray-600">Disponibles</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{busyDevelopers}</p>
                <p className="text-sm text-gray-600">Ocupados</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">{onLeaveDevelopers}</p>
                <p className="text-sm text-gray-600">En Descanso</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de desarrolladores */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {developers.map((developer, index) => (
            <Card key={developer.id} className="hover:shadow-lg transition-shadow duration-200 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary-500 text-white font-semibold">
                        {developer.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{developer.name}</CardTitle>
                      <p className="text-gray-600">{developer.role}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(developer.status)}>
                    {developer.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Información de contacto */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>{developer.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{developer.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{developer.location}</span>
                  </div>
                </div>

                {/* Proyecto actual */}
                {developer.currentProject && (
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-blue-900">Proyecto Actual</p>
                    <p className="text-sm text-blue-700">{developer.currentProject}</p>
                  </div>
                )}

                {/* Métricas */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-lg font-bold text-gray-900">{developer.hoursThisWeek}</p>
                    <p className="text-xs text-gray-600">Horas esta semana</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-lg font-bold text-primary-600">{developer.efficiency}%</p>
                    <p className="text-xs text-gray-600">Eficiencia</p>
                  </div>
                </div>

                {/* Habilidades */}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Code className="h-4 w-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Habilidades</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {developer.skills.slice(0, 3).map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {developer.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{developer.skills.length - 3} más
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Información adicional */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4" />
                    <span>{developer.experience} exp.</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>${developer.hourlyRate}/hora</span>
                  </div>
                </div>

                {/* Acciones */}
                <div className="flex justify-between pt-4 border-t">
                  <Button variant="outline" size="sm">
                    Ver Perfil
                  </Button>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">
                      Asignar Proyecto
                    </Button>
                    <Button size="sm" className="bg-primary-500 hover:bg-primary-600">
                      Contactar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Developers;

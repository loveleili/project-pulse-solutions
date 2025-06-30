
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Users, Clock, DollarSign } from 'lucide-react';

interface ProjectDetailsDialogProps {
  project: {
    id: number;
    name: string;
    client: string;
    status: string;
    progress: number;
    budget: number;
    spent: number;
    startDate: string;
    endDate: string;
    team: Array<{ name: string; role: string; avatar: string }>;
    technologies: string[];
    hoursLogged: number;
    estimatedHours: number;
  };
  children: React.ReactNode;
}

const ProjectDetailsDialog = ({ project, children }: ProjectDetailsDialogProps) => {
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
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl">{project.name}</DialogTitle>
              <p className="text-gray-600 mt-1">Cliente: {project.client}</p>
            </div>
            <Badge className={getStatusColor(project.status)}>
              {project.status}
            </Badge>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Progreso general */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Progreso del Proyecto</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Completado</span>
                  <span className="font-bold">{project.progress}%</span>
                </div>
                <Progress value={project.progress} />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Presupuesto</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Utilizado</span>
                  <span className="font-bold">
                    {formatCurrency(project.spent)} / {formatCurrency(project.budget)}
                  </span>
                </div>
                <Progress value={(project.spent / project.budget) * 100} />
                <p className="text-sm text-gray-600">
                  Restante: {formatCurrency(project.budget - project.spent)}
                </p>
              </div>
            </div>
          </div>

          {/* Cronograma y horas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Cronograma</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Inicio: {project.startDate}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Fin: {project.endDate}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Horas de Trabajo</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>Registradas: {project.hoursLogged}h</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>Estimadas: {project.estimatedHours}h</span>
                </div>
                <Progress value={(project.hoursLogged / project.estimatedHours) * 100} />
              </div>
            </div>
          </div>

          {/* Equipo */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Equipo del Proyecto ({project.team.length} personas)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.team.map((member, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-medium">
                    {member.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{member.name}</p>
                    <p className="text-xs text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tecnologías */}
          <div>
            <h3 className="font-semibold mb-3">Tecnologías Utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <Badge key={idx} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;


import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, User, Briefcase, FileText, Play } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface NewTimeEntryDialogProps {
  trigger: React.ReactNode;
}

const NewTimeEntryDialog = ({ trigger }: NewTimeEntryDialogProps) => {
  const [selectedDeveloper, setSelectedDeveloper] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const developers = [
    'Juan Pérez',
    'María García', 
    'Carlos López',
    'Elena Morales',
    'Luis Martín',
    'Ana Rodríguez'
  ];

  const projects = [
    'E-commerce Platform',
    'Mobile Banking App',
    'CRM System',
    'Inventory Management',
    'Website Redesign',
    'API Integration'
  ];

  const handleStartTimer = () => {
    if (!selectedDeveloper || !selectedProject || !taskName) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }

    const newEntry = {
      developer: selectedDeveloper,
      project: selectedProject,
      task: taskName,
      description: description,
      startTime: new Date().toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      status: 'active'
    };

    console.log('Nuevo registro de tiempo:', newEntry);
    
    toast({
      title: "Registro iniciado",
      description: `Timer iniciado para ${selectedDeveloper} en ${selectedProject}`,
    });

    // Reset form
    setSelectedDeveloper('');
    setSelectedProject('');
    setTaskName('');
    setDescription('');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Clock className="h-5 w-5 mr-2 text-primary-500" />
            Nuevo Registro de Tiempo
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Desarrollador */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <User className="h-4 w-4 mr-2" />
              Desarrollador *
            </label>
            <select
              value={selectedDeveloper}
              onChange={(e) => setSelectedDeveloper(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Seleccionar desarrollador...</option>
              {developers.map((dev) => (
                <option key={dev} value={dev}>{dev}</option>
              ))}
            </select>
          </div>

          {/* Proyecto */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Briefcase className="h-4 w-4 mr-2" />
              Proyecto *
            </label>
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Seleccionar proyecto...</option>
              {projects.map((project) => (
                <option key={project} value={project}>{project}</option>
              ))}
            </select>
          </div>

          {/* Tarea */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Nombre de la tarea *
            </label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Ej: Implementación del carrito de compras"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2">
              Descripción (opcional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descripción detallada de la tarea..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Preview */}
          {selectedDeveloper && selectedProject && taskName && (
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <h4 className="text-sm font-medium text-green-800 mb-2">Vista previa del registro:</h4>
                <div className="text-sm text-green-700">
                  <p><strong>Desarrollador:</strong> {selectedDeveloper}</p>
                  <p><strong>Proyecto:</strong> {selectedProject}</p>
                  <p><strong>Tarea:</strong> {taskName}</p>
                  {description && <p><strong>Descripción:</strong> {description}</p>}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Botones de acción */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
            <Button 
              onClick={handleStartTimer} 
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Play className="h-4 w-4 mr-2" />
              Iniciar Timer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewTimeEntryDialog;

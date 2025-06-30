
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface ManageProjectDialogProps {
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
    hoursLogged: number;
    estimatedHours: number;
  };
  children: React.ReactNode;
}

const ManageProjectDialog = ({ project, children }: ManageProjectDialogProps) => {
  const [formData, setFormData] = useState({
    status: project.status,
    progress: project.progress,
    spent: project.spent,
    hoursLogged: project.hoursLogged,
    estimatedHours: project.estimatedHours,
    notes: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Actualizando proyecto:', { ...project, ...formData });
    toast({
      title: "Proyecto actualizado",
      description: `Los cambios en "${project.name}" han sido guardados exitosamente.`,
    });
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Gestionar Proyecto: {project.name}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Estado del proyecto */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="status">Estado del Proyecto</Label>
              <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="En progreso">En progreso</SelectItem>
                  <SelectItem value="Finalizando">Finalizando</SelectItem>
                  <SelectItem value="Pausado">Pausado</SelectItem>
                  <SelectItem value="Cancelado">Cancelado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="progress">Progreso (%)</Label>
              <Input
                id="progress"
                type="number"
                min="0"
                max="100"
                value={formData.progress}
                onChange={(e) => handleInputChange('progress', parseInt(e.target.value))}
              />
              <Progress value={formData.progress} className="mt-2" />
            </div>
          </div>

          {/* Presupuesto */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="spent">Presupuesto Gastado (USD)</Label>
              <Input
                id="spent"
                type="number"
                value={formData.spent}
                onChange={(e) => handleInputChange('spent', parseFloat(e.target.value))}
              />
              <p className="text-sm text-gray-600 mt-1">
                Presupuesto total: ${project.budget.toLocaleString()}
              </p>
            </div>
            
            <div>
              <Label>Utilización del Presupuesto</Label>
              <div className="mt-2">
                <Progress value={(formData.spent / project.budget) * 100} />
                <p className="text-sm text-gray-600 mt-1">
                  {((formData.spent / project.budget) * 100).toFixed(1)}% utilizado
                </p>
              </div>
            </div>
          </div>

          {/* Horas de trabajo */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="hoursLogged">Horas Registradas</Label>
              <Input
                id="hoursLogged"
                type="number"
                value={formData.hoursLogged}
                onChange={(e) => handleInputChange('hoursLogged', parseInt(e.target.value))}
              />
            </div>
            
            <div>
              <Label htmlFor="estimatedHours">Horas Estimadas</Label>
              <Input
                id="estimatedHours"
                type="number"
                value={formData.estimatedHours}
                onChange={(e) => handleInputChange('estimatedHours', parseInt(e.target.value))}
              />
            </div>
          </div>

          <div>
            <Progress value={(formData.hoursLogged / formData.estimatedHours) * 100} />
            <p className="text-sm text-gray-600 mt-1">
              {formData.hoursLogged} de {formData.estimatedHours} horas completadas
            </p>
          </div>

          {/* Notas adicionales */}
          <div>
            <Label htmlFor="notes">Notas de Actualización</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              rows={3}
              placeholder="Añadir notas sobre los cambios realizados..."
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline">
              Cancelar
            </Button>
            <Button type="submit">
              Guardar Cambios
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ManageProjectDialog;

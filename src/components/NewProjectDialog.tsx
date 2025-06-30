
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewProjectDialog = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    client: '',
    description: '',
    budget: '',
    startDate: '',
    endDate: '',
    status: 'En progreso'
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nuevo proyecto:', formData);
    toast({
      title: "Proyecto creado",
      description: `El proyecto "${formData.name}" ha sido creado exitosamente.`,
    });
    setOpen(false);
    setFormData({
      name: '',
      client: '',
      description: '',
      budget: '',
      startDate: '',
      endDate: '',
      status: 'En progreso'
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary-500 hover:bg-primary-600">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Proyecto
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Crear Nuevo Proyecto</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nombre del Proyecto</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="client">Cliente</Label>
              <Input
                id="client"
                value={formData.client}
                onChange={(e) => handleInputChange('client', e.target.value)}
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={3}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="budget">Presupuesto (USD)</Label>
              <Input
                id="budget"
                type="number"
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="startDate">Fecha de Inicio</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="endDate">Fecha de Fin</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => handleInputChange('endDate', e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="status">Estado</Label>
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

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              Crear Proyecto
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectDialog;

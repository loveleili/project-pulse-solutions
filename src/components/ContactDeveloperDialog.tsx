
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface ContactDeveloperDialogProps {
  developer: {
    id: number;
    name: string;
    email: string;
  };
  children: React.ReactNode;
}

const ContactDeveloperDialog = ({ developer, children }: ContactDeveloperDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
    priority: 'normal'
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contactando desarrollador:', developer.id, formData);
    toast({
      title: "Mensaje enviado",
      description: `Se ha enviado el mensaje a ${developer.name} exitosamente.`,
    });
    setOpen(false);
    setFormData({
      subject: '',
      message: '',
      priority: 'normal'
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Contactar a {developer.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="to">Para:</Label>
            <div className="mt-1 p-2 bg-gray-50 rounded text-sm text-gray-700">
              {developer.name} ({developer.email})
            </div>
          </div>

          <div>
            <Label htmlFor="subject">Asunto</Label>
            <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar asunto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Asignación de Proyecto">Asignación de Proyecto</SelectItem>
                <SelectItem value="Consulta Técnica">Consulta Técnica</SelectItem>
                <SelectItem value="Reunión de Seguimiento">Reunión de Seguimiento</SelectItem>
                <SelectItem value="Actualización de Estado">Actualización de Estado</SelectItem>
                <SelectItem value="Otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="priority">Prioridad</Label>
            <Select value={formData.priority} onValueChange={(value) => handleInputChange('priority', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Baja</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="high">Alta</SelectItem>
                <SelectItem value="urgent">Urgente</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={6}
              required
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              Enviar Mensaje
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDeveloperDialog;


import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface NewInvoiceDialogProps {
  children: React.ReactNode;
}

const NewInvoiceDialog = ({ children }: NewInvoiceDialogProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    client: '',
    project: '',
    amount: '',
    hours: '',
    description: '',
    dueDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.client || !formData.project || !formData.amount) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }

    console.log('Nueva factura creada:', formData);
    
    toast({
      title: "Factura creada",
      description: `Se ha creado la factura para ${formData.client} - ${formData.project}`,
    });
    
    setFormData({
      client: '',
      project: '',
      amount: '',
      hours: '',
      description: '',
      dueDate: ''
    });
    setOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            Nueva Factura
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="client">Cliente *</Label>
              <Select value={formData.client} onValueChange={(value) => handleInputChange('client', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar cliente" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TechCorp">TechCorp</SelectItem>
                  <SelectItem value="FinanceFlow">FinanceFlow</SelectItem>
                  <SelectItem value="SalesMax">SalesMax</SelectItem>
                  <SelectItem value="LogiCorp">LogiCorp</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="project">Proyecto *</Label>
              <Select value={formData.project} onValueChange={(value) => handleInputChange('project', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar proyecto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="E-commerce Platform">E-commerce Platform</SelectItem>
                  <SelectItem value="Mobile Banking App">Mobile Banking App</SelectItem>
                  <SelectItem value="CRM System">CRM System</SelectItem>
                  <SelectItem value="Inventory Management">Inventory Management</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="amount">Monto (USD) *</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="hours">Horas</Label>
              <Input
                id="hours"
                type="number"
                placeholder="0"
                value={formData.hours}
                onChange={(e) => handleInputChange('hours', e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="dueDate">Fecha de Vencimiento</Label>
            <Input
              id="dueDate"
              type="date"
              value={formData.dueDate}
              onChange={(e) => handleInputChange('dueDate', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              placeholder="Descripción del trabajo realizado..."
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              Crear Factura
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewInvoiceDialog;

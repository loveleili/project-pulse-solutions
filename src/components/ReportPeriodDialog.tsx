
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface ReportPeriodDialogProps {
  children: React.ReactNode;
}

const ReportPeriodDialog = ({ children }: ReportPeriodDialogProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [period, setPeriod] = useState({
    type: 'thisMonth',
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined
  });

  const handleApplyPeriod = () => {
    console.log('Aplicando período:', period);
    
    let description = '';
    switch (period.type) {
      case 'thisMonth':
        description = 'Los reportes muestran datos del mes actual';
        break;
      case 'lastMonth':
        description = 'Los reportes muestran datos del mes anterior';
        break;
      case 'thisYear':
        description = 'Los reportes muestran datos del año actual';
        break;
      case 'custom':
        description = `Los reportes muestran datos del ${period.startDate ? format(period.startDate, 'dd/MM/yyyy') : ''} al ${period.endDate ? format(period.endDate, 'dd/MM/yyyy') : ''}`;
        break;
      default:
        description = 'Período aplicado correctamente';
    }
    
    toast({
      title: "Período actualizado",
      description,
    });
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <CalendarIcon className="h-5 w-5 mr-2" />
            Seleccionar Período
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label>Período de Reporte</Label>
            <Select value={period.type} onValueChange={(value) => 
              setPeriod(prev => ({ ...prev, type: value }))
            }>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="thisMonth">Este mes</SelectItem>
                <SelectItem value="lastMonth">Mes anterior</SelectItem>
                <SelectItem value="last3Months">Últimos 3 meses</SelectItem>
                <SelectItem value="last6Months">Últimos 6 meses</SelectItem>
                <SelectItem value="thisYear">Este año</SelectItem>
                <SelectItem value="lastYear">Año anterior</SelectItem>
                <SelectItem value="custom">Período personalizado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {period.type === 'custom' && (
            <div className="space-y-4">
              <div>
                <Label>Fecha de Inicio</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !period.startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {period.startDate ? format(period.startDate, "PPP", { locale: es }) : "Seleccionar fecha"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={period.startDate}
                      onSelect={(date) => setPeriod(prev => ({ ...prev, startDate: date }))}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label>Fecha de Fin</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !period.endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {period.endDate ? format(period.endDate, "PPP", { locale: es }) : "Seleccionar fecha"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={period.endDate}
                      onSelect={(date) => setPeriod(prev => ({ ...prev, endDate: date }))}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleApplyPeriod}>
              <CalendarIcon className="h-4 w-4 mr-2" />
              Aplicar Período
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReportPeriodDialog;

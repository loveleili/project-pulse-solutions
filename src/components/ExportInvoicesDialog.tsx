
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ExportInvoicesDialogProps {
  children: React.ReactNode;
}

const ExportInvoicesDialog = ({ children }: ExportInvoicesDialogProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [exportSettings, setExportSettings] = useState({
    format: 'pdf',
    dateRange: 'all',
    includeDetails: true,
    includeSummary: true,
    status: 'all'
  });

  const handleExport = () => {
    console.log('Exportando facturas con configuración:', exportSettings);
    
    // Simular exportación
    setTimeout(() => {
      toast({
        title: "Exportación completada",
        description: `Se ha generado el archivo ${exportSettings.format.toUpperCase()} con las facturas seleccionadas`,
      });
      
      // Simular descarga
      const blob = new Blob(['Datos de facturas exportadas'], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `facturas.${exportSettings.format}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      setOpen(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Download className="h-5 w-5 mr-2" />
            Exportar Facturas
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label>Formato de Exportación</Label>
            <Select value={exportSettings.format} onValueChange={(value) => 
              setExportSettings(prev => ({ ...prev, format: value }))
            }>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="excel">Excel</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Rango de Fechas</Label>
            <Select value={exportSettings.dateRange} onValueChange={(value) => 
              setExportSettings(prev => ({ ...prev, dateRange: value }))
            }>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las fechas</SelectItem>
                <SelectItem value="thisMonth">Este mes</SelectItem>
                <SelectItem value="lastMonth">Mes anterior</SelectItem>
                <SelectItem value="thisYear">Este año</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Estado de Facturas</Label>
            <Select value={exportSettings.status} onValueChange={(value) => 
              setExportSettings(prev => ({ ...prev, status: value }))
            }>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="paid">Solo pagadas</SelectItem>
                <SelectItem value="pending">Solo pendientes</SelectItem>
                <SelectItem value="overdue">Solo vencidas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="includeDetails" 
                checked={exportSettings.includeDetails}
                onCheckedChange={(checked) => 
                  setExportSettings(prev => ({ ...prev, includeDetails: !!checked }))
                }
              />
              <Label htmlFor="includeDetails">Incluir detalles de facturas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="includeSummary" 
                checked={exportSettings.includeSummary}
                onCheckedChange={(checked) => 
                  setExportSettings(prev => ({ ...prev, includeSummary: !!checked }))
                }
              />
              <Label htmlFor="includeSummary">Incluir resumen financiero</Label>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExportInvoicesDialog;

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ReportFiltersDialogProps {
  children: React.ReactNode;
}

const ReportFiltersDialog = ({ children }: ReportFiltersDialogProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [filters, setFilters] = useState({
    status: 'all',
    projectType: 'all',
    developer: 'all',
    client: 'all',
    profitability: 'all',
    includeCompleted: true,
    includeInProgress: true,
    includePaused: false
  });

  const handleApplyFilters = () => {
    console.log('Aplicando filtros:', filters);
    
    toast({
      title: "Filtros aplicados",
      description: "Los reportes se han actualizado con los filtros seleccionados",
    });
    
    setOpen(false);
  };

  const handleResetFilters = () => {
    setFilters({
      status: 'all',
      projectType: 'all',
      developer: 'all',
      client: 'all',
      profitability: 'all',
      includeCompleted: true,
      includeInProgress: true,
      includePaused: false
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Filtros de Reportes
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Estado del Proyecto</Label>
              <Select value={filters.status} onValueChange={(value) => 
                setFilters(prev => ({ ...prev, status: value }))
              }>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los estados</SelectItem>
                  <SelectItem value="progress">En progreso</SelectItem>
                  <SelectItem value="completed">Completados</SelectItem>
                  <SelectItem value="paused">Pausados</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Tipo de Proyecto</Label>
              <Select value={filters.projectType} onValueChange={(value) => 
                setFilters(prev => ({ ...prev, projectType: value }))
              }>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los tipos</SelectItem>
                  <SelectItem value="web">Desarrollo Web</SelectItem>
                  <SelectItem value="mobile">Aplicaciones Móviles</SelectItem>
                  <SelectItem value="design">Diseño UI/UX</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Desarrollador</Label>
              <Select value={filters.developer} onValueChange={(value) => 
                setFilters(prev => ({ ...prev, developer: value }))
              }>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los desarrolladores</SelectItem>
                  <SelectItem value="juan">Juan Pérez</SelectItem>
                  <SelectItem value="maria">María García</SelectItem>
                  <SelectItem value="carlos">Carlos López</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Cliente</Label>
              <Select value={filters.client} onValueChange={(value) => 
                setFilters(prev => ({ ...prev, client: value }))
              }>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los clientes</SelectItem>
                  <SelectItem value="techcorp">TechCorp</SelectItem>
                  <SelectItem value="financeflow">FinanceFlow</SelectItem>
                  <SelectItem value="salesmax">SalesMax</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Rentabilidad</Label>
            <Select value={filters.profitability} onValueChange={(value) => 
              setFilters(prev => ({ ...prev, profitability: value }))
            }>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las rentabilidades</SelectItem>
                <SelectItem value="high">Alta {'>'}30%</SelectItem>
                <SelectItem value="medium">Media (15-30%)</SelectItem>
                <SelectItem value="low">Baja {'<'}15%</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label>Incluir en el reporte:</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="includeCompleted" 
                  checked={filters.includeCompleted}
                  onCheckedChange={(checked) => 
                    setFilters(prev => ({ ...prev, includeCompleted: !!checked }))
                  }
                />
                <Label htmlFor="includeCompleted">Proyectos completados</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="includeInProgress" 
                  checked={filters.includeInProgress}
                  onCheckedChange={(checked) => 
                    setFilters(prev => ({ ...prev, includeInProgress: !!checked }))
                  }
                />
                <Label htmlFor="includeInProgress">Proyectos en progreso</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="includePaused" 
                  checked={filters.includePaused}
                  onCheckedChange={(checked) => 
                    setFilters(prev => ({ ...prev, includePaused: !!checked }))
                  }
                />
                <Label htmlFor="includePaused">Proyectos pausados</Label>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={handleResetFilters}>
              Limpiar Filtros
            </Button>
            <div className="flex space-x-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleApplyFilters}>
                <Filter className="h-4 w-4 mr-2" />
                Aplicar Filtros
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReportFiltersDialog;

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Filter, X, Calendar, User, Briefcase, Clock } from 'lucide-react';

interface TimeFiltersDialogProps {
  trigger: React.ReactNode;
}

const TimeFiltersDialog = ({ trigger }: TimeFiltersDialogProps) => {
  const [selectedDeveloper, setSelectedDeveloper] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [selectedDateRange, setSelectedDateRange] = useState<string>('');

  const developers = ['Juan Pérez', 'María García', 'Carlos López', 'Elena Morales', 'Luis Martín'];
  const projects = ['E-commerce Platform', 'Mobile Banking App', 'CRM System', 'Inventory Management'];
  const statuses = ['Activo', 'Pausado', 'Completado'];
  const dateRanges = ['Hoy', 'Esta semana', 'Este mes', 'Último mes'];

  const handleApplyFilters = () => {
    console.log('Filtros aplicados:', {
      developer: selectedDeveloper,
      project: selectedProject,
      status: selectedStatus,
      dateRange: selectedDateRange
    });
  };

  const handleClearFilters = () => {
    setSelectedDeveloper('');
    setSelectedProject('');
    setSelectedStatus('');
    setSelectedDateRange('');
  };

  const hasActiveFilters = selectedDeveloper || selectedProject || selectedStatus || selectedDateRange;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Filter className="h-5 w-5 mr-2 text-primary-500" />
            Filtros de Control de Tiempo
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Desarrollador */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <User className="h-4 w-4 mr-2" />
              Desarrollador
            </label>
            <div className="flex flex-wrap gap-2">
              {developers.map((dev) => (
                <Badge
                  key={dev}
                  variant={selectedDeveloper === dev ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary-100"
                  onClick={() => setSelectedDeveloper(selectedDeveloper === dev ? '' : dev)}
                >
                  {dev}
                </Badge>
              ))}
            </div>
          </div>

          {/* Proyecto */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Briefcase className="h-4 w-4 mr-2" />
              Proyecto
            </label>
            <div className="flex flex-wrap gap-2">
              {projects.map((project) => (
                <Badge
                  key={project}
                  variant={selectedProject === project ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary-100"
                  onClick={() => setSelectedProject(selectedProject === project ? '' : project)}
                >
                  {project}
                </Badge>
              ))}
            </div>
          </div>

          {/* Estado */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Estado
            </label>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <Badge
                  key={status}
                  variant={selectedStatus === status ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary-100"
                  onClick={() => setSelectedStatus(selectedStatus === status ? '' : status)}
                >
                  {status}
                </Badge>
              ))}
            </div>
          </div>

          {/* Rango de fechas */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Período
            </label>
            <div className="flex flex-wrap gap-2">
              {dateRanges.map((range) => (
                <Badge
                  key={range}
                  variant={selectedDateRange === range ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary-100"
                  onClick={() => setSelectedDateRange(selectedDateRange === range ? '' : range)}
                >
                  {range}
                </Badge>
              ))}
            </div>
          </div>

          {/* Filtros activos */}
          {hasActiveFilters && (
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-gray-700">Filtros Activos</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearFilters}
                    className="text-red-600 hover:text-red-700"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Limpiar todo
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedDeveloper && (
                    <Badge variant="secondary" className="flex items-center">
                      {selectedDeveloper}
                      <X 
                        className="h-3 w-3 ml-1 cursor-pointer" 
                        onClick={() => setSelectedDeveloper('')}
                      />
                    </Badge>
                  )}
                  {selectedProject && (
                    <Badge variant="secondary" className="flex items-center">
                      {selectedProject}
                      <X 
                        className="h-3 w-3 ml-1 cursor-pointer" 
                        onClick={() => setSelectedProject('')}
                      />
                    </Badge>
                  )}
                  {selectedStatus && (
                    <Badge variant="secondary" className="flex items-center">
                      {selectedStatus}
                      <X 
                        className="h-3 w-3 ml-1 cursor-pointer" 
                        onClick={() => setSelectedStatus('')}
                      />
                    </Badge>
                  )}
                  {selectedDateRange && (
                    <Badge variant="secondary" className="flex items-center">
                      {selectedDateRange}
                      <X 
                        className="h-3 w-3 ml-1 cursor-pointer" 
                        onClick={() => setSelectedDateRange('')}
                      />
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Botones de acción */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button variant="outline" onClick={handleClearFilters}>
              Limpiar Filtros
            </Button>
            <Button onClick={handleApplyFilters} className="bg-primary-500 hover:bg-primary-600">
              Aplicar Filtros
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TimeFiltersDialog;

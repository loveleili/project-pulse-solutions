
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, User, Briefcase, Clock, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { cn } from '@/lib/utils';

interface HourEntryData {
  date: string;
  project: string;
  developer: string;
  hours: number;
  description: string;
}

interface HourEntryFormProps {
  initialData?: HourEntryData | null;
  onSave: (data: HourEntryData) => void;
  onCancel: () => void;
}

const HourEntryForm = ({ initialData, onSave, onCancel }: HourEntryFormProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [developer, setDeveloper] = useState('');
  const [project, setProject] = useState('');
  const [hours, setHours] = useState<number>(0);
  const [description, setDescription] = useState('');

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

  // Cargar datos iniciales si estamos editando
  useEffect(() => {
    if (initialData) {
      setSelectedDate(new Date(initialData.date));
      setDeveloper(initialData.developer);
      setProject(initialData.project);
      setHours(initialData.hours);
      setDescription(initialData.description);
    } else {
      // Reset form para nuevo registro
      setSelectedDate(new Date());
      setDeveloper('');
      setProject('');
      setHours(0);
      setDescription('');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!developer || !project || hours <= 0) {
      return;
    }

    const entryData: HourEntryData = {
      date: format(selectedDate, 'yyyy-MM-dd'),
      developer,
      project,
      hours,
      description
    };

    onSave(entryData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fecha */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
            <CalendarIcon className="h-4 w-4 mr-2" />
            Fecha *
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !selectedDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate ? format(selectedDate, "PPP", { locale: es }) : "Seleccionar fecha"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Desarrollador */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
            <User className="h-4 w-4 mr-2" />
            Desarrollador *
          </label>
          <select
            value={developer}
            onChange={(e) => setDeveloper(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
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
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          >
            <option value="">Seleccionar proyecto...</option>
            {projects.map((proj) => (
              <option key={proj} value={proj}>{proj}</option>
            ))}
          </select>
        </div>

        {/* Horas */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            Horas trabajadas *
          </label>
          <input
            type="number"
            value={hours || ''}
            onChange={(e) => setHours(parseFloat(e.target.value) || 0)}
            step="0.5"
            min="0"
            max="24"
            placeholder="Ej: 8.5"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      {/* Descripción */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
          <FileText className="h-4 w-4 mr-2" />
          Descripción del trabajo realizado
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe las tareas realizadas durante estas horas..."
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Botones de acción */}
      <div className="flex justify-end space-x-3 pt-4 border-t">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button 
          type="submit" 
          className="bg-primary-500 hover:bg-primary-600"
          disabled={!developer || !project || hours <= 0}
        >
          {initialData ? 'Actualizar Registro' : 'Guardar Registro'}
        </Button>
      </div>
    </form>
  );
};

export default HourEntryForm;

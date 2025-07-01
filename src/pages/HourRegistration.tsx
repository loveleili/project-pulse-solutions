
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Plus, User, Briefcase, Save, Edit, Trash2 } from 'lucide-react';
import HourEntryForm from '@/components/HourEntryForm';
import { useToast } from '@/hooks/use-toast';

interface HourEntry {
  id: number;
  date: string;
  project: string;
  developer: string;
  hours: number;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
}

const HourRegistration = () => {
  const { toast } = useToast();
  
  const [showForm, setShowForm] = useState(false);
  const [editingEntry, setEditingEntry] = useState<HourEntry | null>(null);
  
  const [hourEntries, setHourEntries] = useState<HourEntry[]>([
    {
      id: 1,
      date: '2024-01-15',
      project: 'E-commerce Platform',
      developer: 'Juan Pérez',
      hours: 8,
      description: 'Desarrollo del módulo de pagos y integración con API externa',
      status: 'approved'
    },
    {
      id: 2,
      date: '2024-01-15',
      project: 'Mobile Banking App',
      developer: 'María García',
      hours: 6.5,
      description: 'Diseño de interfaces de usuario para transferencias',
      status: 'pending'
    },
    {
      id: 3,
      date: '2024-01-14',
      project: 'CRM System',
      developer: 'Carlos López',
      hours: 7,
      description: 'Implementación de reportes y dashboard administrativo',
      status: 'approved'
    },
    {
      id: 4,
      date: '2024-01-14',
      project: 'E-commerce Platform',
      developer: 'Elena Morales',
      hours: 5,
      description: 'Testing y corrección de bugs en el carrito de compras',
      status: 'rejected'
    },
    {
      id: 5,
      date: '2024-01-13',
      project: 'Inventory Management',
      developer: 'Luis Martín',
      hours: 8.5,
      description: 'Desarrollo de funcionalidades de gestión de stock',
      status: 'pending'
    }
  ]);

  const handleSaveEntry = (entryData: Omit<HourEntry, 'id' | 'status'>) => {
    if (editingEntry) {
      // Editar entrada existente
      setHourEntries(entries => 
        entries.map(entry => 
          entry.id === editingEntry.id 
            ? { ...entry, ...entryData, status: 'pending' as const }
            : entry
        )
      );
      toast({
        title: "Registro actualizado",
        description: "Las horas han sido actualizadas correctamente",
      });
      setEditingEntry(null);
    } else {
      // Crear nueva entrada
      const newEntry: HourEntry = {
        id: Math.max(...hourEntries.map(e => e.id)) + 1,
        ...entryData,
        status: 'pending'
      };
      setHourEntries([newEntry, ...hourEntries]);
      toast({
        title: "Horas registradas",
        description: "Las horas han sido registradas correctamente",
      });
    }
    setShowForm(false);
  };

  const handleDeleteEntry = (id: number) => {
    setHourEntries(entries => entries.filter(entry => entry.id !== id));
    toast({
      title: "Registro eliminado",
      description: "El registro de horas ha sido eliminado",
    });
  };

  const handleEditEntry = (entry: HourEntry) => {
    setEditingEntry(entry);
    setShowForm(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Aprobado';
      case 'pending':
        return 'Pendiente';
      case 'rejected':
        return 'Rechazado';
      default:
        return 'Desconocido';
    }
  };

  // Calcular estadísticas
  const totalHours = hourEntries.reduce((sum, entry) => sum + entry.hours, 0);
  const approvedHours = hourEntries
    .filter(entry => entry.status === 'approved')
    .reduce((sum, entry) => sum + entry.hours, 0);
  const pendingHours = hourEntries
    .filter(entry => entry.status === 'pending')
    .reduce((sum, entry) => sum + entry.hours, 0);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Registro de Horas</h1>
            <p className="text-gray-600">Registra y gestiona las horas trabajadas en cada proyecto</p>
          </div>
          <Button 
            onClick={() => {
              setEditingEntry(null);
              setShowForm(true);
            }}
            className="bg-primary-500 hover:bg-primary-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            Registrar Horas
          </Button>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">{totalHours}</p>
                <p className="text-sm text-gray-600">Total de Horas</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{approvedHours}</p>
                <p className="text-sm text-gray-600">Horas Aprobadas</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600">{pendingHours}</p>
                <p className="text-sm text-gray-600">Horas Pendientes</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{hourEntries.length}</p>
                <p className="text-sm text-gray-600">Total Registros</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Formulario de registro */}
        {showForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary-500" />
                {editingEntry ? 'Editar Registro de Horas' : 'Nuevo Registro de Horas'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <HourEntryForm
                initialData={editingEntry}
                onSave={handleSaveEntry}
                onCancel={() => {
                  setShowForm(false);
                  setEditingEntry(null);
                }}
              />
            </CardContent>
          </Card>
        )}

        {/* Lista de registros */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary-500" />
              Registros de Horas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {hourEntries.map((entry) => (
                <div key={entry.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(entry.status)}>
                        {getStatusText(entry.status)}
                      </Badge>
                      <span className="text-sm text-gray-500">{entry.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditEntry(entry)}
                        className="text-blue-600 border-blue-300 hover:bg-blue-50"
                      >
                        <Edit className="h-3 w-3 mr-1" />
                        Editar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteEntry(entry.id)}
                        className="text-red-600 border-red-300 hover:bg-red-50"
                      >
                        <Trash2 className="h-3 w-3 mr-1" />
                        Eliminar
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="font-medium">{entry.developer}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-gray-700">{entry.project}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="font-bold text-primary-600">{entry.hours}h</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600">{entry.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default HourRegistration;

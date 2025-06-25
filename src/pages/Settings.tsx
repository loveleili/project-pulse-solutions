
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Settings as SettingsIcon, User, Building, DollarSign, Clock, Mail, Bell, Shield, Database } from 'lucide-react';

const Settings = () => {
  const companyInfo = {
    name: 'Code Solutions',
    address: 'Av. Tecnología 123, Ciudad Tech',
    phone: '+1 (555) 123-4567',
    email: 'info@codesolutions.com',
    website: 'www.codesolutions.com',
    taxId: 'CS-2024-001',
    employees: 25,
    founded: '2020'
  };

  const billingSettings = {
    defaultHourlyRate: 45,
    currency: 'USD',
    invoicePrefix: 'INV-2024-',
    paymentTerms: 15,
    taxRate: 21,
    bankAccount: '**** **** **** 1234'
  };

  const projectSettings = {
    defaultProjectDuration: 90,
    workingHoursPerDay: 8,
    workingDaysPerWeek: 5,
    overtimeThreshold: 40,
    billableHoursTarget: 32,
    maxProjectsPerDeveloper: 3
  };

  const notificationSettings = [
    { id: 1, name: 'Nuevos proyectos asignados', enabled: true, category: 'Proyectos' },
    { id: 2, name: 'Facturas vencidas', enabled: true, category: 'Facturación' },
    { id: 3, name: 'Desarrolladores con sobrecarga', enabled: true, category: 'Recursos' },
    { id: 4, name: 'Fechas límite próximas', enabled: true, category: 'Proyectos' },
    { id: 5, name: 'Reportes semanales', enabled: false, category: 'Reportes' },
    { id: 6, name: 'Nuevos registros de tiempo', enabled: false, category: 'Tiempo' }
  ];

  const integrations = [
    { name: 'Slack', status: 'connected', description: 'Notificaciones de proyectos y tareas' },
    { name: 'Google Calendar', status: 'connected', description: 'Sincronización de fechas límite' },
    { name: 'GitHub', status: 'disconnected', description: 'Seguimiento de commits y pull requests' },
    { name: 'Jira', status: 'disconnected', description: 'Gestión avanzada de tareas' },
    { name: 'QuickBooks', status: 'connected', description: 'Integración contable y financiera' }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Configuración</h1>
            <p className="text-gray-600">Administra la configuración general del sistema</p>
          </div>
          <Button className="bg-primary-500 hover:bg-primary-600">
            Guardar Cambios
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Información de la empresa */}
          <Card className="animate-slide-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-5 w-5 mr-2 text-primary-500" />
                Información de la Empresa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la empresa</label>
                  <Input defaultValue={companyInfo.name} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                  <Input defaultValue={companyInfo.address} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <Input defaultValue={companyInfo.phone} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input defaultValue={companyInfo.email} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sitio web</label>
                    <Input defaultValue={companyInfo.website} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ID Fiscal</label>
                    <Input defaultValue={companyInfo.taxId} />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">{companyInfo.employees}</p>
                  <p className="text-sm text-gray-600">Empleados</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{companyInfo.founded}</p>
                  <p className="text-sm text-gray-600">Año de fundación</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configuración de facturación */}
          <Card className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-primary-500" />
                Configuración de Facturación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tarifa por hora predeterminada</label>
                  <Input defaultValue={`$${billingSettings.defaultHourlyRate}`} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Moneda</label>
                  <Input defaultValue={billingSettings.currency} />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prefijo de factura</label>
                  <Input defaultValue={billingSettings.invoicePrefix} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Términos de pago (días)</label>
                  <Input defaultValue={billingSettings.paymentTerms} type="number" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tasa de impuesto (%)</label>
                  <Input defaultValue={billingSettings.taxRate} type="number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cuenta bancaria</label>
                  <Input defaultValue={billingSettings.bankAccount} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configuración de proyectos */}
          <Card className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary-500" />
                Configuración de Proyectos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duración predeterminada (días)</label>
                  <Input defaultValue={projectSettings.defaultProjectDuration} type="number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Horas de trabajo por día</label>
                  <Input defaultValue={projectSettings.workingHoursPerDay} type="number" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Días laborales por semana</label>
                  <Input defaultValue={projectSettings.workingDaysPerWeek} type="number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Umbral de horas extra</label>
                  <Input defaultValue={projectSettings.overtimeThreshold} type="number" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Meta de horas facturables</label>
                  <Input defaultValue={projectSettings.billableHoursTarget} type="number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Máx. proyectos por desarrollador</label>
                  <Input defaultValue={projectSettings.maxProjectsPerDeveloper} type="number" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notificaciones */}
          <Card className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2 text-primary-500" />
                Notificaciones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notificationSettings.map((notification) => (
                  <div key={notification.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="font-medium text-gray-900">{notification.name}</p>
                      <p className="text-sm text-gray-600">{notification.category}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={notification.enabled ? 'default' : 'secondary'}>
                        {notification.enabled ? 'Activo' : 'Inactivo'}
                      </Badge>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className={notification.enabled ? 'text-red-600 border-red-300' : 'text-green-600 border-green-300'}
                      >
                        {notification.enabled ? 'Desactivar' : 'Activar'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Integraciones */}
        <Card className="mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="h-5 w-5 mr-2 text-primary-500" />
              Integraciones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{integration.name}</h4>
                    <Badge 
                      className={integration.status === 'connected' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                      }
                    >
                      {integration.status === 'connected' ? 'Conectado' : 'Desconectado'}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{integration.description}</p>
                  
                  <Button 
                    variant={integration.status === 'connected' ? 'outline' : 'default'}
                    size="sm"
                    className={integration.status === 'connected' 
                      ? 'text-red-600 border-red-300 hover:bg-red-50' 
                      : 'bg-primary-500 hover:bg-primary-600'
                    }
                  >
                    {integration.status === 'connected' ? 'Desconectar' : 'Conectar'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Configuración de seguridad */}
        <Card className="mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-primary-500" />
              Seguridad y Respaldos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border rounded-lg">
                <Shield className="h-8 w-8 mx-auto mb-3 text-green-600" />
                <h4 className="font-semibold text-gray-900 mb-2">SSL Activado</h4>
                <p className="text-sm text-gray-600 mb-3">Conexión segura habilitada</p>
                <Badge className="bg-green-100 text-green-800">Activo</Badge>
              </div>
              
              <div className="text-center p-6 border rounded-lg">
                <Database className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <h4 className="font-semibold text-gray-900 mb-2">Respaldo Automático</h4>
                <p className="text-sm text-gray-600 mb-3">Último respaldo: hace 2 horas</p>
                <Badge className="bg-blue-100 text-blue-800">Activo</Badge>
              </div>
              
              <div className="text-center p-6 border rounded-lg">
                <User className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                <h4 className="font-semibold text-gray-900 mb-2">Autenticación 2FA</h4>
                <p className="text-sm text-gray-600 mb-3">Factor de autenticación doble</p>
                <Badge className="bg-gray-100 text-gray-800">Configurar</Badge>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center space-x-4">
              <Button variant="outline">
                Crear Respaldo Manual
              </Button>
              <Button variant="outline">
                Configurar 2FA
              </Button>
              <Button className="bg-primary-500 hover:bg-primary-600">
                Ver Logs de Seguridad
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Settings;

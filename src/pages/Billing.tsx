import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DollarSign, FileText, Send, Download, Calendar, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import NewInvoiceDialog from '@/components/NewInvoiceDialog';
import ExportInvoicesDialog from '@/components/ExportInvoicesDialog';
import { useState } from 'react';

const Billing = () => {
  const { toast } = useToast();
  const [invoices, setInvoices] = useState([
    {
      id: 'INV-2024-001',
      client: 'TechCorp',
      project: 'E-commerce Platform',
      amount: 12500,
      hours: 250,
      issueDate: '2024-06-01',
      dueDate: '2024-06-15',
      paidDate: '2024-06-12',
      status: 'paid',
      description: 'Desarrollo de funcionalidades principales del e-commerce'
    },
    {
      id: 'INV-2024-002',
      client: 'FinanceFlow',
      project: 'Mobile Banking App',
      amount: 8750,
      hours: 175,
      issueDate: '2024-06-15',
      dueDate: '2024-06-30',
      paidDate: null,
      status: 'sent',
      description: 'Diseño e implementación de pantallas principales'
    },
    {
      id: 'INV-2024-003',
      client: 'SalesMax',
      project: 'CRM System',
      amount: 15200,
      hours: 320,
      issueDate: '2024-06-20',
      dueDate: '2024-07-05',
      paidDate: null,
      status: 'draft',
      description: 'Desarrollo completo del sistema CRM'
    },
    {
      id: 'INV-2024-004',
      client: 'LogiCorp',
      project: 'Inventory Management',
      amount: 6400,
      hours: 128,
      issueDate: '2024-06-25',
      dueDate: '2024-07-10',
      paidDate: null,
      status: 'overdue',
      description: 'Sistema de gestión de inventarios'
    }
  ]);

  const monthlyStats = [
    { month: 'Enero', invoiced: 45000, paid: 42000, pending: 3000 },
    { month: 'Febrero', invoiced: 38500, paid: 38500, pending: 0 },
    { month: 'Marzo', invoiced: 52000, paid: 48000, pending: 4000 },
    { month: 'Abril', invoiced: 41200, paid: 39200, pending: 2000 },
    { month: 'Mayo', invoiced: 48900, paid: 46900, pending: 2000 },
    { month: 'Junio', invoiced: 42850, paid: 12500, pending: 30350 }
  ];

  const clients = [
    { name: 'TechCorp', totalInvoiced: 85000, totalPaid: 82000, projects: 3, status: 'active' },
    { name: 'FinanceFlow', totalInvoiced: 45000, totalPaid: 36250, projects: 2, status: 'active' },
    { name: 'SalesMax', totalInvoiced: 67500, totalPaid: 52300, projects: 2, status: 'active' },
    { name: 'LogiCorp', totalInvoiced: 28000, totalPaid: 21600, projects: 1, status: 'new' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'sent':
        return 'bg-blue-100 text-blue-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'paid':
        return 'Pagada';
      case 'sent':
        return 'Enviada';
      case 'draft':
        return 'Borrador';
      case 'overdue':
        return 'Vencida';
      default:
        return 'Desconocido';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES');
  };

  const totalInvoiced = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const totalPaid = invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0);
  const totalPending = totalInvoiced - totalPaid;
  const overdueAmount = invoices.filter(inv => inv.status === 'overdue').reduce((sum, inv) => sum + inv.amount, 0);

  const handleDownloadInvoice = (invoiceId: string) => {
    console.log('Descargando factura:', invoiceId);
    toast({
      title: "Descargando factura",
      description: `Se está descargando la factura ${invoiceId}`,
    });
    
    // Simular descarga
    setTimeout(() => {
      const blob = new Blob([`Factura ${invoiceId} - Contenido PDF`], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${invoiceId}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 500);
  };

  const handleSendInvoice = (invoiceId: string) => {
    console.log('Enviando factura:', invoiceId);
    
    setInvoices(prev => prev.map(inv => 
      inv.id === invoiceId ? { ...inv, status: 'sent' } : inv
    ));
    
    toast({
      title: "Factura enviada",
      description: `La factura ${invoiceId} ha sido enviada al cliente`,
    });
  };

  const handleMarkAsPaid = (invoiceId: string) => {
    console.log('Marcando como pagada:', invoiceId);
    
    setInvoices(prev => prev.map(inv => 
      inv.id === invoiceId ? { 
        ...inv, 
        status: 'paid', 
        paidDate: new Date().toISOString().split('T')[0] 
      } : inv
    ));
    
    toast({
      title: "Factura marcada como pagada",
      description: `La factura ${invoiceId} ha sido marcada como pagada`,
    });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Facturación</h1>
            <p className="text-gray-600">Gestión de facturas, cobros y reportes financieros</p>
          </div>
          <div className="flex space-x-3">
            <ExportInvoicesDialog>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </ExportInvoicesDialog>
            <NewInvoiceDialog>
              <Button className="bg-primary-500 hover:bg-primary-600">
                <FileText className="h-4 w-4 mr-2" />
                Nueva Factura
              </Button>
            </NewInvoiceDialog>
          </div>
        </div>

        {/* Resumen financiero */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Total Facturado</p>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalInvoiced)}</p>
                </div>
                <div className="p-3 rounded-full bg-blue-50">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Total Cobrado</p>
                  <p className="text-2xl font-bold text-green-600">{formatCurrency(totalPaid)}</p>
                </div>
                <div className="p-3 rounded-full bg-green-50">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Por Cobrar</p>
                  <p className="text-2xl font-bold text-yellow-600">{formatCurrency(totalPending)}</p>
                </div>
                <div className="p-3 rounded-full bg-yellow-50">
                  <Calendar className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Vencidas</p>
                  <p className="text-2xl font-bold text-red-600">{formatCurrency(overdueAmount)}</p>
                </div>
                <div className="p-3 rounded-full bg-red-50">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de facturas */}
          <div className="lg:col-span-2">
            <Card className="animate-slide-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary-500" />
                  Facturas Recientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoices.map((invoice, index) => (
                    <div key={invoice.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div>
                            <h4 className="font-semibold text-gray-900">{invoice.id}</h4>
                            <p className="text-sm text-gray-600">{invoice.client} - {invoice.project}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">{formatCurrency(invoice.amount)}</p>
                          <Badge className={getStatusColor(invoice.status)}>
                            {getStatusText(invoice.status)}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{invoice.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-3">
                        <div>
                          <p>Horas: <span className="font-medium">{invoice.hours}h</span></p>
                          <p>Emitida: <span className="font-medium">{formatDate(invoice.issueDate)}</span></p>
                        </div>
                        <div>
                          <p>Vencimiento: <span className="font-medium">{formatDate(invoice.dueDate)}</span></p>
                          {invoice.paidDate && (
                            <p>Pagada: <span className="font-medium text-green-600">{formatDate(invoice.paidDate)}</span></p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleDownloadInvoice(invoice.id)}
                        >
                          <Download className="h-3 w-3 mr-1" />
                          Descargar
                        </Button>
                        {invoice.status === 'draft' && (
                          <Button 
                            size="sm" 
                            className="bg-blue-500 hover:bg-blue-600"
                            onClick={() => handleSendInvoice(invoice.id)}
                          >
                            <Send className="h-3 w-3 mr-1" />
                            Enviar
                          </Button>
                        )}
                        {invoice.status === 'sent' && (
                          <Button 
                            size="sm" 
                            className="bg-green-500 hover:bg-green-600"
                            onClick={() => handleMarkAsPaid(invoice.id)}
                          >
                            Marcar como Pagada
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Estadísticas por cliente */}
          <div className="space-y-6">
            <Card className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-primary-500" />
                  Clientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clients.map((client, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{client.name}</h4>
                        <Badge variant={client.status === 'new' ? 'secondary' : 'default'}>
                          {client.status === 'new' ? 'Nuevo' : 'Activo'}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Facturado:</span>
                          <span className="font-medium">{formatCurrency(client.totalInvoiced)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Pagado:</span>
                          <span className="font-medium text-green-600">{formatCurrency(client.totalPaid)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Pendiente:</span>
                          <span className="font-medium text-yellow-600">
                            {formatCurrency(client.totalInvoiced - client.totalPaid)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Proyectos:</span>
                          <span className="font-medium">{client.projects}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Estadísticas mensuales */}
            <Card className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary-500" />
                  Estadísticas Mensuales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyStats.slice(-6).map((stat, index) => (
                    <div key={index} className="border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{stat.month}</h4>
                        <span className="text-sm font-bold text-primary-600">
                          {formatCurrency(stat.invoiced)}
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${(stat.paid / stat.invoiced) * 100}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Pagado: {formatCurrency(stat.paid)}</span>
                        <span>Pendiente: {formatCurrency(stat.pending)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Billing;

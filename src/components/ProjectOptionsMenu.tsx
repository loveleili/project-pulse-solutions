
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/components/ui/context-menu';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { MoreHorizontal } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProjectOptionsMenuProps {
  project: {
    id: number;
    name: string;
  };
}

const ProjectOptionsMenu = ({ project }: ProjectOptionsMenuProps) => {
  const { toast } = useToast();

  const handleDuplicate = () => {
    console.log('Duplicando proyecto:', project.id);
    toast({
      title: "Proyecto duplicado",
      description: `Se ha creado una copia de "${project.name}".`,
    });
  };

  const handleArchive = () => {
    console.log('Archivando proyecto:', project.id);
    toast({
      title: "Proyecto archivado",
      description: `"${project.name}" ha sido archivado exitosamente.`,
    });
  };

  const handleDelete = () => {
    console.log('Eliminando proyecto:', project.id);
    toast({
      title: "Proyecto eliminado",
      description: `"${project.name}" ha sido eliminado permanentemente.`,
      variant: "destructive",
    });
  };

  const handleExport = () => {
    console.log('Exportando proyecto:', project.id);
    toast({
      title: "Exportando proyecto",
      description: `Los datos de "${project.name}" están siendo exportados.`,
    });
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem onClick={handleDuplicate}>
          Duplicar Proyecto
        </ContextMenuItem>
        <ContextMenuItem onClick={handleExport}>
          Exportar Datos
        </ContextMenuItem>
        <ContextMenuItem onClick={handleArchive}>
          Archivar Proyecto
        </ContextMenuItem>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <ContextMenuItem onSelect={(e) => e.preventDefault()}>
              <span className="text-red-600">Eliminar Proyecto</span>
            </ContextMenuItem>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción no se puede deshacer. El proyecto "{project.name}" será eliminado permanentemente junto con todos sus datos asociados.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
                Eliminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ProjectOptionsMenu;

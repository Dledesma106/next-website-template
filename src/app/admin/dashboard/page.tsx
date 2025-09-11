'use client';

import { useAuth, useLogout } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import { Heading1, BodyMedium } from '@/components/ui/Typography';

export default function AdminDashboardPage() {
    const { isAuthenticated, user } = useAuth();
    const { logout } = useLogout();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/admin/login');
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                    <p className="text-gray-600">Verificando autenticación...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <Heading1 className="text-gray-900 mb-2">
                            Panel Administrativo
                        </Heading1>
                        <BodyMedium className="text-gray-600">
                            Bienvenido, {user?.name || user?.email}
                        </BodyMedium>
                    </div>
                    <Button variant="secondary" onClick={logout}>
                        Cerrar Sesión
                    </Button>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">Información del Usuario</h2>
                    <div className="space-y-2">
                        <p><strong>Email:</strong> {user?.email}</p>
                        <p><strong>Nombre:</strong> {user?.name || 'No especificado'}</p>
                        <p><strong>Rol:</strong> {user?.role}</p>
                        <p><strong>ID:</strong> {user?.id}</p>
                    </div>
                </div>

                <div className="mt-8 bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">Acciones Rápidas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button variant="primary" className="w-full">
                            Gestionar Blogs
                        </Button>
                        <Button variant="secondary" className="w-full">
                            Gestionar Usuarios
                        </Button>
                        <Button variant="outline" className="w-full">
                            Configuración
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

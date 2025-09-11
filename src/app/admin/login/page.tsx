'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import CardContent from '@/components/ui/CardContent';
import CardHeader from '@/components/ui/CardHeader';
import CardTitle from '@/components/ui/CardHeader';
import { Heading1, BodyMedium, Caption } from '@/components/ui/Typography';
import { useLogin } from '@/hooks/useAuth';

export default function AdminLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const loginMutation = useLogin();
    const isLoading = loginMutation.isPending;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            await loginMutation.mutateAsync({ email, password });
            // Redirect to admin dashboard on success
            router.push('/admin/dashboard');
        } catch (err: any) {
            console.error('Login error:', err);
            setError(err.message || 'Credenciales inválidas. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <Heading1 className="text-gray-900 mb-2">
                        Panel Administrativo
                    </Heading1>
                    <BodyMedium className="text-gray-600">
                        Inicia sesión para acceder al backoffice
                    </BodyMedium>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Iniciar Sesión</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                                    {error}
                                </div>
                            )}

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Correo Electrónico
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@ejemplo.com"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Contraseña
                                </label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                <div className="text-center">
                    <Caption className="text-gray-500">
                        Acceso restringido para administradores
                    </Caption>
                </div>
            </div>
        </div>
    );
}

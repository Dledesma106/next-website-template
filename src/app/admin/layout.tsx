import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Panel Administrativo',
    description: 'Acceso al panel de administración del sitio web',
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="admin-layout">
            {children}
        </div>
    );
}

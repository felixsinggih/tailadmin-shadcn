import AuthLayout from '@/components/Layouts/Auth';
import { ReactNode } from 'react';

import "@/css/satoshi.css";
import "@/css/style.css";

export default function Auth({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    )
}

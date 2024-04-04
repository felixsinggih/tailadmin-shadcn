import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface SidebarNavLinkGroupProps {
    href: string;
    active: boolean;
    children: ReactNode;
}

const SidebarNavLinkGroup: FC<SidebarNavLinkGroupProps> = ({ href, active, children }) => {
    return (
        <Link href={href}
            className={`group relative flex items-center gap-2.5 rounded-md px-4 text-bodydark2 duration-300 ease-in-out hover:text-white ${active && 'text-white'}`}>
            {children}
        </Link>
    )
}

export default SidebarNavLinkGroup

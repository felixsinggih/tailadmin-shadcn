import Link from 'next/link';
import { AnchorHTMLAttributes, FC, ReactNode } from 'react';

interface SidebarNavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
    active?: boolean;
}

const SidebarNavLink: FC<SidebarNavLinkProps> = ({ href, children, active, ...props }) => {
    return (
        <Link href={href}
            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 text-bodydark1 duration-300 ease-in-out hover:bg-gray-4 dark:hover:bg-meta-4 ${active && 'bg-gray-4 dark:bg-meta-4'}`} {...props}>
            {children}
        </Link >
    )
}

export default SidebarNavLink

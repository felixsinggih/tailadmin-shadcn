'use client'

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { ReactNode, useState } from 'react'
import SidebarContext from './sidebarContext'

interface OuterAuthenticatedLayoutProps {
    children: ReactNode
}

export default function InnerAuthenticatedLayout({ children }: OuterAuthenticatedLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
            {/* <!-- ===== Page Wrapper Start ===== --> */}
            <div className="flex h-screen overflow-hidden">
                {/* <!-- ===== Sidebar Start ===== --> */}
                <Sidebar />
                {/* <!-- ===== Sidebar End ===== --> */}

                {/* <!-- ===== Content Area Start ===== --> */}
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    {/* <!-- ===== Header Start ===== --> */}
                    <Header />
                    {/* <!-- ===== Header End ===== --> */}

                    {/* <!-- ===== Main Content Start ===== --> */}
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            {children}
                        </div>
                    </main>
                    {/* <!-- ===== Main Content End ===== --> */}
                </div>
                {/* <!-- ===== Content Area End ===== --> */}
            </div>
            {/* <!-- ===== Page Wrapper End ===== --> */}
        </SidebarContext.Provider>
    )
}

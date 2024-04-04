"use client";

import { ArrowLeftIcon, ChevronDownIcon, GaugeIcon, LayoutDashboardIcon, LayoutGridIcon, LayoutListIcon, LogInIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import SidebarContext from "../Layouts/AuthenticatedLayout/sidebarContext";
import SidebarLinkGroup from "./SidebarLinkGroup";
import SidebarNavLink from "./SidebarNavLink";
import SidebarNavLinkGroup from "./SidebarNavLinkGroup";
import { Button } from "../ui/button";

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext)
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/images/logo/logo.svg"}
            alt="Logo"
            priority
          />
        </Link>

        <Button ref={trigger} onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls='sidebar' aria-expanded={sidebarOpen} variant='link' className='text-gray-400 p-1 block lg:hidden'>
          <ArrowLeftIcon size={26} />
        </Button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <SidebarNavLink href='/dashboard' active={pathname.includes('dashboard')}>
                  <GaugeIcon size={20} />
                  Dashboard
                </SidebarNavLink>
              </li>

              <SidebarLinkGroup activeCondition={pathname.includes('#')}>
                {(handleClick, open) => {
                  return (
                    <Fragment>
                      <SidebarNavLink href='#' active={(pathname.includes('#'))}
                        onClick={(e) => { e.preventDefault(); sidebarExpanded ? handleClick() : setSidebarExpanded(true) }}>
                        <LayoutGridIcon size={20} />
                        Drop Down Menu
                        <ChevronDownIcon size={20} strokeWidth={1.5} className={`absolute right-4 top-1/2 -translate-y-1/2 ${open && 'rotate-180'}`} />
                      </SidebarNavLink>
                      {/* Dropdown Menu Start */}
                      <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                        <ul className='mb-[1.375rem] mt-4 flex flex-col gap-2.5 pl-6'>
                          <li>
                            <SidebarNavLinkGroup href='#' active={pathname === '#'}>
                              Drop Down Menu 1
                            </SidebarNavLinkGroup>
                          </li>
                          <li>
                            <SidebarNavLinkGroup href='#' active={pathname === '#'}>
                              Drop Down Menu 2
                            </SidebarNavLinkGroup>
                          </li>
                        </ul>
                      </div>
                      {/* Dropdown Menu End*/}
                    </Fragment>
                  )
                }}
              </SidebarLinkGroup>
            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              OTHERS
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <SidebarNavLink href='#' active={pathname.includes('#')}>
                  <LayoutListIcon size={20} />
                  Other Menu 1
                </SidebarNavLink>
              </li>

              <li>
                <SidebarNavLink href='/signin' active={pathname.includes('#')}>
                  <LogInIcon size={20} />
                  Sign In
                </SidebarNavLink>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

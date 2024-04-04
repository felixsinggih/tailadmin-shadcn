import { ReactNode } from "react";
import InnerAuthenticatedLayout from "./InnerAuthenticatedLayout";

import "@/css/satoshi.css";
import "@/css/style.css";

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="bg-gray-1 dark:bg-boxdark-2 dark:text-bodydark">
      <InnerAuthenticatedLayout>
        {children}
      </InnerAuthenticatedLayout>
    </div>
  );
}

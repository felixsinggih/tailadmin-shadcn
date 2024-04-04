import { DataTable } from '@/components/Datatable'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { Payment, columns } from "./columns"

export const payments: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
    },
    {
        id: "a3f6h8j1",
        amount: 150,
        status: "success",
        email: "success@example.com",
    },
    {
        id: "b4g7i9k2",
        amount: 175,
        status: "failed",
        email: "failed@example.com",
    },
    {
        id: "c5h8j1k3",
        amount: 200,
        status: "pending",
        email: "pending2@example.com",
    }
]


export default function TableExample() {
    const data = payments // ambil data dari db
    const totalPages = 2 // ambil total page dari db

    return (
        <Card>
            <CardHeader>
                <CardTitle>Datatable Example</CardTitle>
                <CardDescription>Datatable Description</CardDescription>
            </CardHeader>
            <CardContent>
                <DataTable columns={columns} data={data} totalPages={totalPages} />
            </CardContent>
        </Card>
    )
}

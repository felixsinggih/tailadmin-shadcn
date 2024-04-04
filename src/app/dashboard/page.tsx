import FormExample from '@/components/Example/FormExample'
import TableExample from '@/components/Example/TableExample'
import AuthenticatedLayout from '@/components/Layouts/AuthenticatedLayout'

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <div className='space-y-6'>
                <FormExample />
                <TableExample />
            </div>
        </AuthenticatedLayout>
    )
}

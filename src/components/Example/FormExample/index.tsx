import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import InputExample from './InputExample'
import SelectExample from './SelectExample'

export default function FormExample() {
    return (
        <>
            <Breadcrumb pageName="Form Example" />

            <Card>
                <CardHeader>
                    <CardTitle>Form Example</CardTitle>
                    <CardDescription>Form Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='space-y-4'>
                        <InputExample />
                        <SelectExample />
                        <Button>Button</Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

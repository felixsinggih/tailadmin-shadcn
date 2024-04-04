import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function InputExample() {
    return (
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="input">Input Field</Label>
            <Input id="input" placeholder='Input field' />
        </div>
    )
}

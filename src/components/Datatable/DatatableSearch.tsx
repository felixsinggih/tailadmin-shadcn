import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function DatatableSearch() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((keyword: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', '1')
        if (keyword) {
            params.set('query', keyword)
        } else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 500)

    return (
        <div className='relative flex flex-1'>
            <Input
                type='text'
                className='sm:w-[75%] pl-10 py-2 rounded text-sm font-light'
                placeholder='Search...'
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <SearchIcon className='absolute left-3 top-3 size-4 text-gray-500' />
        </div>
    )
}
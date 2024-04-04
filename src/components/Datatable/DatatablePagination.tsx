import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { generatePagination } from '@/lib/utils'
import { usePathname, useSearchParams } from 'next/navigation'

export default function DatatablePagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currPage = Number(searchParams.get('page')) || 1

    const createPageURL = (pageNumber: string | number) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', pageNumber.toString())
        return `${pathname}?${params.toString()}`
    }

    const allPages = generatePagination(currPage, totalPages)

    return (
        <div className="flex">
            <div className="flex w-full items-center justify-between">
                <div className='text-sm font-normal'>
                    {totalPages > 0 ? `Showing page ${currPage} of ${totalPages}` : 'No entries'}
                </div>
                <div>
                    {totalPages > 1 &&
                        <Pagination>
                            <PaginationContent>
                                {/* Previous */}
                                <PaginationItem>
                                    {currPage <= 1 ? <PaginationPrevious href='' isActive /> : <PaginationPrevious href={createPageURL(currPage - 1)} />}
                                </PaginationItem>

                                {allPages.map((page, index) => {
                                    let position: 'first' | 'last' | 'single' | 'middle' | undefined

                                    if (index === 0) position = 'first'
                                    if (index === allPages.length - 1) position = 'last'
                                    if (allPages.length === 1) position = 'single'
                                    if (page === '...') position = 'middle'

                                    return (
                                        <PaginationItem key={index}>
                                            {page !== '...' ? (
                                                <PaginationLink
                                                    href={createPageURL(page)}
                                                    isActive={currPage === page}
                                                >
                                                    {page}
                                                </PaginationLink>
                                            ) : (
                                                <PaginationEllipsis />
                                            )}
                                        </PaginationItem>
                                    )
                                })}

                                {/* Next */}
                                <PaginationItem>
                                    {currPage >= totalPages ? <PaginationNext href='' isActive /> : <PaginationNext href={createPageURL(currPage + 1)} />}
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    }
                </div>
            </div>
        </div>
    )
}


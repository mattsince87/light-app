import { Tip } from '@/ui/atoms/tip/Tip'
import { Button } from '@/ui/atoms/button/Button'
import { Stack } from '@/ui/molecules/stack/Stack'
import { InvoiceRow } from '@/ui/molecules/row/InvoiceRow'
import { Pagination } from '@/ui/molecules/pagination/Pagination'

export default function Home() {
  return (
    <main className="block w-full">
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-12">
        <div className="flex flex-col justify-start order-1 w-full gap-4 md:col-span-7 md:order-0">
          <div className="flex flex-row w-full gap-2">
            <Button icon="Forward" label="Forward" />
            <Button icon="Stack" label="Stack" />
            <Button icon="Like" label="Approve" classes="ml-auto" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <div className="flex flex-col w-full gap-2 mb-4">
              <InvoiceRow />
            </div>
            <Pagination />
          </div>
        </div>

        <div className="block md:col-span-5 order-0 md:order-1">
          <h2 className="heading">Stacks</h2>
          <div className="block w-full mb-4">
            <Stack />
          </div>
          <Tip>
            You have selected more than one invoice, to approve multiple
            invoices at the same time click the “Bulk approve” button.
          </Tip>
        </div>
      </div>
    </main>
  )
}

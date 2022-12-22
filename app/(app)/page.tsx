import { Tip } from '@/ui/atoms/tip/Tip'
import { Button } from '@/ui/atoms/button/Button'
import { Stack } from '@/ui/molecules/stack/Stack'
import { InvoiceRow } from '@/ui/molecules/row/InvoiceRow'
import { Pagination } from '@/ui/molecules/pagination/Pagination'

export default function Home() {
  return (
    <main className="block w-full">
      <div className="grid grid-cols-12 gap-6">
        <div className="flex flex-col justify-start col-span-7 gap-4">
          <div className="flex flex-row w-full gap-2">
            <Button icon="Forward" label="Forward" />
            <Button icon="Stack" label="Stack" />
            <Button icon="Like" label="Approve" classes="ml-auto" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <InvoiceRow />
            <Pagination />
          </div>
        </div>

        <div className="col-span-5">
          <h2 className="heading">Stacks</h2>
          <Stack />
          <Tip>
            You have selected more than one invoice, to approve multiple
            invoices at the same time click the “Bulk approve” button.
          </Tip>
        </div>
      </div>
    </main>
  )
}

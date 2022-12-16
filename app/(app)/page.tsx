import Link from 'next/link'
import { Button } from '@/ui/atoms/button/Button'
import { BsChevronRight } from 'react-icons/bs'

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
            <Link
              href=""
              className="flex flex-row items-center justify-between w-full p-3 bg-white rounded shadow-md text-slate-600">
              <div className="inline-flex items-center justify-center w-16 h-16 text-white bg-pink-600 rounded">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-indigo-900">Airbnb</span>
                <span>Processed</span>
              </div>
              <div>07/11/22</div>
              <div className="font-bold text-indigo-900">$9999.99</div>
              <div className="flex flex-row gap-1">
                <span className="inline-flex items-center justify-center text-white bg-red-600 rounded w-7 h-7">
                  A
                </span>
                <span className="flex flex-row items-center font-bold">
                  <BsChevronRight className="-mr-2 opacity-20" />
                  <BsChevronRight className="opacity-50" />
                  <BsChevronRight className="-ml-2" />
                </span>
                <span className="inline-flex items-center justify-center text-white bg-black rounded w-7 h-7">
                  B
                </span>
              </div>
              <div>Revolut</div>
              <div>Salary</div>
              <div>
                <input type="checkbox" />
              </div>
            </Link>

            <Link
              href=""
              className="flex flex-row items-center justify-between w-full p-3 bg-white rounded shadow-md text-slate-600">
              <div className="inline-flex items-center justify-center w-16 h-16 text-white bg-pink-600 rounded">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-indigo-900">Airbnb</span>
                <span>Processed</span>
              </div>
              <div>07/11/22</div>
              <div className="font-bold text-indigo-900">$9999.99</div>
              <div className="flex flex-row gap-1">
                <span className="inline-flex items-center justify-center text-white bg-red-600 rounded w-7 h-7">
                  A
                </span>
                <span className="flex flex-row items-center font-bold">
                  <BsChevronRight className="-mr-2 opacity-20" />
                  <BsChevronRight className="opacity-50" />
                  <BsChevronRight className="-ml-2" />
                </span>
                <span className="inline-flex items-center justify-center text-white bg-black rounded w-7 h-7">
                  B
                </span>
              </div>
              <div>Revolut</div>
              <div>Salary</div>
              <div>
                <input type="checkbox" />
              </div>
            </Link>
          </div>
        </div>

        <div className="col-span-5">Last</div>
      </div>
    </main>
  )
}

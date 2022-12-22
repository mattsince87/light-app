import { Checkbox } from '@/ui/atoms/checkbox/Checkbox'
import Airbnb from '../../../public/svg/Airbnb.svg'
import Hsbc from '../../../public/svg/Hsbc.svg'
import Revolut from '../../../public/svg/Revolut.svg'

import { FiChevronRight } from 'react-icons/fi'
import { BsPatchCheckFill } from 'react-icons/bs'

interface Props {
  primary?: boolean
}

export const InvoiceRow = ({ primary = true }: Props) => {
  return (
    <div className="flex flex-row items-center gap-4 md:justify-between  w-full p-3 bg-white rounded-[10px] shadow-md text-oceania-400">
      <div className="relative inline-flex items-center justify-center w-16 h-16 text-white rounded bg-airbnb">
        <Airbnb />
        <div className="absolute inline-flex justify-center items-center -right-[13px] w-[26px] h-[26px]">
          <BsPatchCheckFill className="text-white text-[26px]" />
          <div className="absolute w-5 h-5 bg-white rounded-full" />
          <BsPatchCheckFill className="absolute text-teal-500 text-[20px]" />
        </div>
      </div>
      <div className="flex flex-col flex-auto gap-0 leading-5 md:flex">
        <span className="font-bold text-oceania-800">Airbnb</span>
        <span>Processed</span>
      </div>

      <div className="flex flex-col items-end gap-0 md:items-center md:flex-row md:gap-4 md:justify-between">
        <div>07/11/22</div>
        <div className="font-bold text-oceania-800">$9999.99</div>
      </div>

      <div className="flex-row hidden gap-1 md:flex">
        <span className="inline-flex items-center justify-center text-white bg-red-600 rounded w-7 h-7">
          <Hsbc />
        </span>
        <span className="flex flex-row items-center font-bold">
          <FiChevronRight className="-mr-[11px] opacity-20" />
          <FiChevronRight className="opacity-50" />
          <FiChevronRight className="-ml-[11px]" />
        </span>
        <span className="inline-flex items-center justify-center text-white bg-black rounded w-7 h-7">
          <Revolut />
        </span>
      </div>
      <div className="hidden md:inline-flex">Revolut</div>
      <div className="hidden md:inline-flex">Salary</div>
      <div className="hidden md:inline-flex">
        <Checkbox />
      </div>
    </div>
  )
}

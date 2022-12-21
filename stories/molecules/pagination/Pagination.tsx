import Link from 'next/link'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

interface Props {
  primary?: boolean
}

export const Pagination = ({ primary = true }: Props) => {
  return (
    <div className="flex flex-row w-full font-sans text-sm font-bold text-oceania-800">
      <ul className="inline-flex flex-row items-center gap-1">
        <li>
          <Link
            href="#"
            className="inline-flex items-center px-[10px] rounded h-7">
            <BsChevronLeft />
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-flex items-center px-[10px] text-white rounded h-7 bg-oceania-800">
            1
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-flex items-center px-[10px] rounded h-7">
            2
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-flex items-center px-[10px] rounded h-7">
            3
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-flex items-center px-[10px] rounded h-7">
            4
          </Link>
        </li>
        <li className="inline-flex items-center h-7">&hellip;</li>
        <li>
          <Link
            href="#"
            className="inline-flex items-center px-[10px] rounded h-7">
            <BsChevronRight />
          </Link>
        </li>
      </ul>
    </div>
  )
}

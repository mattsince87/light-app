import { MdKeyboardArrowDown } from 'react-icons/md'

interface Props {
  primary?: boolean
}

export const Dropdown = ({ primary = true }: Props) => {
  return (
    <>
      <div className="inline-flex flex-row items-center text-indigo-200 bg-indigo-800 rounded appearance-none cursor-pointer w-full min-w-[10ch] max-w-[15ch] relative">
        <MdKeyboardArrowDown className="absolute right-2 text-[26px]" />
        <select className="relative w-full h-full min-h-[40px] px-3 pr-8 m-0 bg-transparent border-none outline-none appearance-none cursor-pointer">
          <option value="Acme Inc">Acme Inc</option>
          <option value="Twitter">Twitter</option>
          <option value="Google">Google</option>
        </select>
      </div>
    </>
  )
}

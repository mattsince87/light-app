import { BsFillLightbulbFill } from 'react-icons/bs'

interface Props {
  primary?: boolean
  children: any
}

export const Tip = ({ children, primary = true }: Props) => {
  return (
    <div className="flex-col hidden w-full font-sans text-sm text-oceania-400 md:flex">
      <h5 className="inline-flex items-center gap-2 mb-3 font-semibold">
        <BsFillLightbulbFill className="text-lg" /> Tip
      </h5>
      <div className="">{children}</div>
    </div>
  )
}

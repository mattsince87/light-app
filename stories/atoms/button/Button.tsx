import React from 'react'
import {
  BsArrowUpRightSquareFill,
  BsStack,
  BsFillHandThumbsUpFill,
  BsFillTrashFill
} from 'react-icons/bs'

interface ButtonProps {
  classes?: string
  primary?: boolean
  color?: null | 'green' | 'red'
  size?: 'default' | 'large'
  icon?: 'none' | 'Forward' | 'Stack' | 'Like' | 'Delete'
  label: string
  onClick?: () => void
}

export const Button = ({
  primary = false,
  color = null,
  size = 'default',
  icon = 'none',
  classes,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'bg-white text-oceania-800'
    : 'bg-white text-oceania-800 shadow-lg'

  let sizing
  if (size === 'default') {
    sizing = 'px-4 py-2 text-base'
  } else if (size === 'large') {
    sizing = 'px-5 py-3 text-xl'
  }

  let theme
  if (color === 'green') {
    theme = 'bg-teal-500 text-emerald-50'
  } else if (color === 'red') {
    theme = 'bg-rose-500 text-rose-50'
  }

  return (
    <button
      type="button"
      className={[
        'rounded font-medium inline-flex items-center gap-2',
        mode,
        sizing,
        theme,
        classes
      ].join(' ')}
      {...props}>
      {icon !== 'none' ? (
        <span className="text-xl">
          {icon === 'Forward' ? <BsArrowUpRightSquareFill /> : ''}
          {icon === 'Stack' ? <BsStack /> : ''}
          {icon === 'Like' ? <BsFillHandThumbsUpFill /> : ''}
          {icon === 'Delete' ? <BsFillTrashFill /> : ''}
        </span>
      ) : (
        ''
      )}

      {label}
    </button>
  )
}

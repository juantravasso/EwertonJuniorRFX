import type { HTMLAttributes } from 'react'
import clsx from 'clsx'

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Box({ className, ...props }: BoxProps) {
  return <div className={clsx(className)} {...props} />
}
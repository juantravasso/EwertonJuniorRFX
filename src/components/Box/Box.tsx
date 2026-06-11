import { forwardRef, type HTMLAttributes } from 'react'
import clsx from 'clsx'

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={clsx(className)} {...props} />
  }
)

Box.displayName = 'Box'
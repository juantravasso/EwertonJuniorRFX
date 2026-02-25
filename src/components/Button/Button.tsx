import { useState, type AnchorHTMLAttributes } from 'react'
import clsx from 'clsx'
import { Text } from '../Text/Text'
import { colors, palette } from '../../theme/theme'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

export function Button({ children, className, ...props }: ButtonProps) {
  const [hover, setHover] = useState(false)

  return (
    <a
      {...props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        borderBottom: `1px solid ${colors.dividingLines}`,
        borderTop: `1px solid ${colors.dividingLines}`,
      }}
      className={clsx(
        'flex items-center justify-between py-5 transition-colors',
        className
      )}
    >
      <Text
        preset="paragraphMedium"
        style={{
          color: hover ? palette.gray3 : palette.gray1,
        }}
      >
        {children}
      </Text>

      <div
        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
        style={{
          backgroundColor: hover ? palette.gray3 : palette.gray1,
          color: palette.White,
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
    </a>
  )
}
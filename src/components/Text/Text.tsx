import React from 'react'
import { colors, type ThemeColors } from '../../theme/theme'

export type TextVariants =
  | 'heading'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'

const fontStyles: Record<
  TextVariants,
  { size: string; 
    color: ThemeColors;
    bold?: boolean;
    italic?: boolean
    semiBold?: boolean
  }
> = {
  heading: {
    size: 'text-[22px] leading-[26.4px]',
    color: 'textPrimary',
  },

  paragraphLarge: {
    size: 'text-[48px] leading-[57.6px]',
    color: 'textPrimary',
  },

  paragraphMedium: {
    size: 'text-[22px] leading-[26.4px]',
    color: 'textPrimary',
  },

  paragraphSmall: {
    size: 'text-[14px] leading-[19.6px]',
    color: 'textSecondary',
  },
}

const fontFamily = {
  bold: 'font-bold',
  italic: 'italic',
  semiBold: 'font-medium',
  regular: 'font-normal',
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  preset?: TextVariants
  color?: ThemeColors
  bold?: boolean
  italic?: boolean
  semiBold?: boolean
}

export function Text({
  children,
  preset = 'paragraphMedium',
  color,
  bold,
  italic,
  semiBold,
  className = '',
  style,
  ...rest
}: TextProps) {
  const presetStyle = fontStyles[preset]

const weightClass = bold
  ? fontFamily.bold
  : semiBold
  ? fontFamily.semiBold
  : presetStyle.bold
  ? fontFamily.bold
  : presetStyle.semiBold
  ? fontFamily.semiBold
  : fontFamily.regular

const italicClass =
  italic || presetStyle.italic ? fontFamily.italic : ''

  return (
    <p
      {...rest}
      className={`
        ${presetStyle.size}
        ${weightClass}
        ${italicClass}
        ${className}
      `}
      style={{
        color: colors[color ?? presetStyle.color],
        ...style,
      }}
    >
      {children}
    </p>
  )
}
export const palette = {
  Black: '#000000',
  gray1: '#111111',
  gray2: '#888888',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  White: '#FFFFFF',
  offWhite : '#FAF9F6',
} as const

export const colors = {
  buttonPrimary: palette.gray2,
  background: palette.offWhite,
  backgroundSecondary: palette.gray5,
  textPrimary: palette.gray1,
  textSecondary:palette.gray2,
  dividingLines:palette.gray3,
  icons:palette.gray3,
  backgroundContrast: palette.Black,
} as const


export const shadow = {
  custom: '0 -3px 12px rgba(0,0,0,0.05)',
} as const

export type PaletteColors = keyof typeof palette
export type ThemeColors = keyof typeof colors
export type ThemeShadow = keyof typeof shadow
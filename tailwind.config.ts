import type { Config } from "tailwindcss"
import { colors } from "./src/theme/theme"

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          light: colors.light.background,
          dark: colors.dark.background,
        },
      },
    },
  },
} satisfies Config
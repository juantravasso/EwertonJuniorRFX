import { Youtube, Instagram } from 'lucide-react'
import { colors } from '../../theme/theme'

export function SocialMedia() {
  return (
    <div className="flex gap-4">
      <SocialButton
        href="https://youtube.com/@ewertonjuniorrfx/"
        label="YouTube Ewerton Junior RFX"
      >
        <Youtube size={18} />
      </SocialButton>

      <SocialButton
        href="https://instagram.com/ewertonjuniorrfx"
        label="Instagram Ewerton Junior RFX"
      >
        <Instagram size={18} />
      </SocialButton>
    </div>
  )
}

interface SocialButtonProps {
  href: string
  label: string
  children: React.ReactNode
}

function SocialButton({ href, label, children }: SocialButtonProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-10 h-10
        flex items-center justify-center
        rounded-full
        transition-colors
      "
      style={{
        border: `1px solid ${colors.icons}`,
        color: colors.icons,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = colors.buttonPrimary
        e.currentTarget.style.borderColor = colors.icons
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = colors.icons
        e.currentTarget.style.borderColor = colors.icons
      }}
    >
      {children}
    </a>
  )
}
import { NavLink } from 'react-router-dom'
import { colors } from '../../theme/theme'
import { Box } from '../Box/Box'
import { SocialMedia } from '../Button/SocialMediaButton'
import { Text } from '../Text/Text'
import { useState } from 'react'

export function Header() {
  return (
    <Box className="pt-16 flex flex-col items-center gap-6">
      
      <Text preset="heading" semiBold>
        EWERTON JÚNIOR
      </Text>

      <SocialMedia />

      <Text
        preset="paragraphSmall"
        bold
        className="tracking-widest text-center max-w-[280px] sm:max-w-full leading-relaxed"
        style={{ color: colors.textSecondary }}
      >
        INTELIGÊNCIA ARTIFICIAL · VFX · TECNOLOGIA · CINEMA
      </Text>
      
      <nav className="flex gap-8 pt-6">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/contato">Contato</NavItem>
      </nav>
    </Box>
  )
}

interface NavItemProps {
  to: string
  children: React.ReactNode
}

function NavItem({ to, children }: NavItemProps) {
  const [hover, setHover] = useState(false)

  return (
    <NavLink
      to={to}
      className="font-bold"
      style={({ isActive }) => ({
        color: isActive
          ? colors.textPrimary
          : hover
            ? colors.textPrimary
            : colors.textSecondary,
      })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      
      {children}
      
    </NavLink>
  )
}
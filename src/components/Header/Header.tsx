import { NavLink } from "react-router-dom";
import { Text } from "../Text/Text";
import { SocialMedia } from "./Components/SocialMediaButton/SocialMediaButton";
import { ThemeToggle } from "./Components/ThemeToggle/ThemeToggle";

export function Header() {
  return (
    <header className="pt-16 flex flex-col items-center gap-6">
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>
      <Text preset="heading" semiBold>
        EWERTON JUNIOR
      </Text>

      <SocialMedia />

      <Text
        preset="paragraphSmall"
        bold
        className="
          tracking-widest 
          text-center 
          max-w-[280px] 
          sm:max-w-full 
          leading-relaxed
          text-text-secondary
        "
      >
        INTELIGÊNCIA ARTIFICIAL · VFX · TECNOLOGIA · CINEMA
      </Text>

      <nav className="flex gap-8 pt-6">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/contato">Contato</NavItem>
      </nav>
    </header>
  );
}

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

function NavItem({ to, children }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        font-bold 
        transition-colors
        ${isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"}
        `
      }
    >
      {children}
    </NavLink>
  );
}
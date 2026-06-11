import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import anime from "animejs";
import { Text } from "../Text/Text";
import { SocialMedia } from "./Components/SocialMediaButton/SocialMediaButton";
import { ThemeToggle } from "./Components/ThemeToggle/ThemeToggle";

const EASING = "cubicBezier(0.16, 1, 0.3, 1)";

export function Header() {
  const nameRef    = useRef<HTMLDivElement>(null);
  const socialRef  = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const navRef     = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = anime.timeline({ easing: EASING, autoplay: true });

    tl.add({
      targets: nameRef.current,
      opacity: [0, 1],
      translateY: [-14, 0],
      duration: 700,
    })
    .add({
      targets: socialRef.current,
      opacity: [0, 1],
      translateY: [8, 0],
      duration: 500,
    }, "-=300")
    .add({
      targets: taglineRef.current,
      opacity: [0, 1],
      letterSpacing: ["0.35em", "0.1em"],
      duration: 800,
    }, "-=200")
    .add({
      targets: navRef.current?.querySelectorAll("a"),
      opacity: [0, 1],
      translateY: [8, 0],
      duration: 500,
      delay: anime.stagger(80),
    }, "-=400");

    return () => { tl.pause(); };
  }, []);

  return (
    <header className="pt-16 flex flex-col items-center gap-6">
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>

      <div ref={nameRef} style={{ opacity: 0 }}>
        <Text preset="heading" semiBold>
          EWERTON JUNIOR
        </Text>
      </div>

      <div ref={socialRef} style={{ opacity: 0 }}>
        <SocialMedia />
      </div>

      <div ref={taglineRef} style={{ opacity: 0 }}>
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
      </div>

      <nav ref={navRef} className="flex gap-8 pt-6">
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
      style={{ opacity: 0 }}
      className={({ isActive }) =>
        `font-bold transition-colors ${
          isActive
            ? "text-text-primary"
            : "text-text-secondary hover:text-text-primary"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

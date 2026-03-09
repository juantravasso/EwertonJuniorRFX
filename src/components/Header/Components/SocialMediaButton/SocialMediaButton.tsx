import { Youtube, Instagram } from "lucide-react";

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
  );
}

interface SocialButtonProps {
  href: string;
  label: string;
  children: React.ReactNode;
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
        border border-icons
        text-icons
        transition-colors
        hover:text-button-primary
      "
    >
      {children}
    </a>
  );
}

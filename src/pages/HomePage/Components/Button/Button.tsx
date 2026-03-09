import type { AnchorHTMLAttributes } from "react";
import clsx from "clsx";
import { Text } from "../../../../components/Text/Text";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <a
  {...props}
  target="_blank"
  rel="noopener noreferrer"
  className={clsx(
    "group flex items-center justify-between py-5 border-y border-dividing-lines transition-colors",
    className
  )}
>
  <Text
    preset="paragraphMedium"
    className="text-text-primary group-hover:text-text-secondary transition-colors"
  >
    {children}
  </Text>

  <div
    className="
      w-9 h-9
      rounded-full
      flex items-center justify-center
      bg-text-primary
      text-background
      group-hover:bg-text-secondary
      transition-colors
    "
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
  );
}
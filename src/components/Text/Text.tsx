import React from "react";

export type TextVariants =
  | "heading"
  | "paragraphLarge"
  | "paragraphMedium"
  | "paragraphSmall";

type TextColors = "primary" | "secondary";

const fontStyles: Record<
  TextVariants,
  {
    size: string;
    color: TextColors;
  }
> = {
  heading: {
    size: "text-[22px] leading-[26.4px]",
    color: "primary",
  },

  paragraphLarge: {
    size: "text-[48px] leading-[57.6px]",
    color: "primary",
  },

  paragraphMedium: {
    size: "text-[22px] leading-[26.4px]",
    color: "primary",
  },

  paragraphSmall: {
    size: "text-[14px] leading-[19.6px]",
    color: "secondary",
  },
};

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  preset?: TextVariants;
  color?: TextColors;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export function Text({
  children,
  preset = "paragraphMedium",
  color,
  bold,
  italic,
  semiBold,
  className = "",
  ...rest
}: TextProps) {
  const presetStyle = fontStyles[preset];

  const weightClass = bold
    ? "font-bold"
    : semiBold
    ? "font-medium"
    : "font-normal";

  const italicClass = italic ? "italic" : "";

  const colorClass = `text-${color ?? presetStyle.color}`;

  return (
    <p
      {...rest}
      className={`
        ${presetStyle.size}
        ${weightClass}
        ${italicClass}
        ${colorClass}
        ${className}
      `}
    >
      {children}
    </p>
  );
}
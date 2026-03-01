"use client";

import { useState } from "react";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
  href?: string;
  as?: "div" | "a" | "section";
  onClick?: () => void;
}

export function HoverCard({
  children,
  className = "",
  style = {},
  hoverStyle = { transform: "translateY(-4px)" },
  href,
  as: Tag = "div",
  onClick,
}: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const combinedStyle = {
    ...style,
    ...(isHovered ? hoverStyle : {}),
    transition: "all 0.2s ease",
    cursor: href || onClick ? "pointer" : "default",
  };

  if (href) {
    return (
      <a
        href={href}
        className={className}
        style={combinedStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </a>
    );
  }

  return (
    <Tag
      className={className}
      style={combinedStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
}

interface HoverLinkProps {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
  className?: string;
}

export function HoverLink({
  href,
  children,
  style = {},
  hoverStyle = {},
  className = "",
}: HoverLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className={className}
      style={{
        ...style,
        ...(isHovered ? hoverStyle : {}),
        transition: "all 0.2s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
}

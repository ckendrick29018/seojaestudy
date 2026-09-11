import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 5l10 10M15 5L5 15" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" {...props}>
      <path d="M3 5.5h14M3 10h14M3 14.5h14" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3.25 9.25L10 3.5l6.75 5.75M4.75 8v8.5h10.5V8" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <circle cx="10" cy="10" r="7.5" />
      <path d="M2.5 10h15M10 2.5c2.4 2 2.4 13 0 15M10 2.5c-2.4 2-2.4 13 0 15" />
    </svg>
  );
}

export function SpeakerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path fill="currentColor" d="M3 7.5v5h3.2L11 16V4L6.2 7.5H3z" />
      <path
        d="M13.3 6.6a4.5 4.5 0 010 6.8"
        stroke="currentColor"
        strokeWidth={1.5}
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StopIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <rect x="5" y="5" width="10" height="10" rx="1.5" />
    </svg>
  );
}

export function PauseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <rect x="5" y="4" width="3.2" height="12" rx="1" />
      <rect x="11.8" y="4" width="3.2" height="12" rx="1" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M6.2 4.1v11.8c0 .82.9 1.32 1.6.89l9.2-5.9a1.05 1.05 0 000-1.78l-9.2-5.9a1.05 1.05 0 00-1.6.9z" />
    </svg>
  );
}

export function BookmarkIcon({ filled, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" {...props}>
      <path d="M5 3.5h10v13l-5-3.2-5 3.2v-13z" />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12.5 4.5L7 10l5.5 5.5" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7.5 4.5L13 10l-5.5 5.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="10" cy="10" r="7.5" />
      <path d="M10 5.5V10l3 2" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="10" cy="6.5" r="3.25" />
      <path d="M3.5 17c1-3.2 3.6-5 6.5-5s5.5 1.8 6.5 5" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="7.25" cy="7" r="2.75" />
      <path d="M2.25 16.2c.8-2.8 2.7-4.4 5-4.4s4.2 1.6 5 4.4" />
      <path d="M13.4 4.6a2.6 2.6 0 010 5.1M14.9 15.8c-.35-1.7-1.15-3-2.4-3.9" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4.5" y="9" width="11" height="8" rx="1.8" />
      <path d="M6.5 9V6.5a3.5 3.5 0 017 0V9" />
    </svg>
  );
}

export function BookOpenIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 5.5C8.5 4.3 6.3 4 4 4v10.5c2.3 0 4.5.3 6 1.5 1.5-1.2 3.7-1.5 6-1.5V4c-2.3 0-4.5.3-6 1.5v9.5" />
    </svg>
  );
}

export function BooksIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3.5" y="4" width="3.8" height="12" rx="0.8" />
      <rect x="8.3" y="4" width="3.8" height="12" rx="0.8" />
      <path d="M13.7 4.9l3.1.8-2.5 10.1-3.1-.8z" />
    </svg>
  );
}

export function CatIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 3.2l1.7 4.3M15 3.2l-1.7 4.3" />
      <path d="M4 10c0 3.3 2.7 6 6 6s6-2.7 6-6c0-2-1-3.9-2.6-5a10 10 0 01-6.8 0C5 6.1 4 8 4 10z" />
      <path d="M8.6 11.4h2.8M6.2 10.2l-2.1.5M13.8 10.2l2.1.5" />
    </svg>
  );
}

export function CardsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" {...props}>
      <rect x="6.5" y="3.5" width="10" height="10" rx="2" />
      <path d="M13 16.5H5.5A2 2 0 013.5 14.5V7" strokeLinecap="round" />
    </svg>
  );
}

export function HighlighterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 12l-2.5 2.5M4 16.5h4M11.5 4.5l4 4-6 6-4-4z" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...props}>
      <path d="M10 4v12M4 10h12" />
    </svg>
  );
}

export function SettingsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="10" cy="10" r="2.6" />
      <path d="M10 1.7v2.1M10 16.2v2.1M3.16 3.16l1.48 1.48M15.36 15.36l1.48 1.48M1.7 10h2.1M16.2 10h2.1M3.16 16.84l1.48-1.48M15.36 4.64l1.48-1.48" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" strokeLinejoin="round" {...props}>
      <path d="M10 1.6L11.94 7.33 17.99 7.4 13.14 11.02 14.94 16.8 10 13.3 5.06 16.8 6.86 11.02 2.01 7.4 8.06 7.33Z" />
    </svg>
  );
}

/**
 * The SeoJae Story wordmark glyph — an open book with a spark, matching the
 * favicon / PWA icon. Single-colour (currentColor) so the header can tint it.
 */
export function BrandMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 7.2C9.9 5.8 7 5.2 4.2 5.4v10.5c2.9-.2 5.8.4 7.8 1.8 2-1.4 4.9-2 7.8-1.8V5.4C17 5.2 14.1 5.8 12 7.2Z"
        fill="currentColor"
        fillOpacity={0.16}
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <path d="M12 7.2v10.3" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path
        d="M18 2.2l.85 2.25L21.1 5.3l-2.25.85L18 8.4l-.85-2.25L14.9 5.3l2.25-.85z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TrashIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 6h11M8 6V4.5h4V6M6 6l.7 9.5a1 1 0 001 .9h4.6a1 1 0 001-.9L15 6" />
    </svg>
  );
}

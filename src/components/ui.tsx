import * as React from 'react'
import { Link } from 'react-router-dom'

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
}

export function Hairline() {
  return <div className="h-px bg-[var(--line)]" />
}

export function Button({
  children,
  href,
  onClick,
  variant = 'outline',
  type = 'button',
}: {
  children: React.ReactNode
  href?: string
  onClick?: React.MouseEventHandler
  variant?: 'outline' | 'solid'
  type?: 'button' | 'submit'
}) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition duration-200 active:scale-[0.98]'
  const cls =
    variant === 'solid'
      ? 'bg-[var(--ink)] text-white shadow-[0_12px_28px_rgba(12,13,18,0.25)] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(12,13,18,0.3)]'
      : 'border border-[var(--line-strong)] bg-white/75 text-[var(--ink)] backdrop-blur hover:bg-white hover:-translate-y-0.5'

  if (href) {
    return (
      <Link className={`${base} ${cls}`} to={href}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${cls}`}>
      {children}
    </button>
  )
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--line-strong)] bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)] backdrop-blur">
      {children}
    </span>
  )
}

export function PlaceholderImage({ height = 220 }: { height?: number }) {
  return (
    <div
      className="w-full rounded-2xl border border-[var(--line)] bg-[radial-gradient(circle_at_20%_10%,#ffffff_0%,#f2f4f8_50%,#e8ebf2_100%)]"
      style={{ height }}
      aria-hidden="true"
    />
  )
}

export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-[0_24px_48px_rgba(8,14,40,0.08)] backdrop-blur ${className}`}>
      {children}
    </div>
  )
}

export function SectionTitle({
  title,
  action,
}: {
  title: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">{title}</h2>
      {action}
    </div>
  )
}

export function RowAction({ children }: { children: React.ReactNode }) {
  return <div className="text-xs font-medium text-[var(--ink-soft)]">{children}</div>
}

export function SmallLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      className="inline-flex items-center rounded-full border border-[var(--line-strong)] bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--ink)] transition hover:bg-white"
      to={href}
    >
      {children}
    </Link>
  )
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={
        'w-full rounded-2xl border border-[var(--line)] bg-white/85 px-4 py-3 text-sm text-[var(--ink)] outline-none transition placeholder:text-[var(--ink-muted)] focus:border-[var(--line-strong)] focus:bg-white ' +
        (props.className ?? '')
      }
    />
  )
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={
        'w-full rounded-2xl border border-[var(--line)] bg-white/85 px-4 py-3 text-sm text-[var(--ink)] outline-none transition placeholder:text-[var(--ink-muted)] focus:border-[var(--line-strong)] focus:bg-white ' +
        (props.className ?? '')
      }
    />
  )
}

export function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex min-w-max gap-5">{children}</div>
    </div>
  )
}

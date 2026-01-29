import * as React from 'react'

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-4xl px-4">{children}</div>
}

export function Hairline() {
  return <div className="h-px bg-black/10 dark:bg-white/10" />
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
    'inline-flex items-center justify-center rounded-md px-3 py-2 text-xs font-medium tracking-tight transition active:scale-[0.99]'
  const cls =
    variant === 'solid'
      ? 'bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90'
      : 'border border-black/20 text-black hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10'

  if (href) return <a className={`${base} ${cls}`} href={href}>{children}</a>
  return <button type={type} onClick={onClick} className={`${base} ${cls}`}>{children}</button>
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-black/20 dark:border-white/20 px-2 py-1 text-[10px] font-medium text-black/70 dark:text-white/70">
      {children}
    </span>
  )
}

export function PlaceholderImage({ height = 220 }: { height?: number }) {
  return (
    <div
      className="w-full border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10"
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
    <div className={`border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-950 ${className}`}>
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
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
      {action}
    </div>
  )
}

export function RowAction({ children }: { children: React.ReactNode }) {
  return <div className="text-[10px] text-black/60 dark:text-white/60">{children}</div>
}

export function SmallLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a className="text-[10px] border border-black/20 dark:border-white/20 px-2 py-1 rounded hover:bg-black/5 dark:hover:bg-white/10" href={href}>
      {children}
    </a>
  )
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={
        'w-full rounded-md border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-950 px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 ' +
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
        'w-full rounded-md border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-950 px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 ' +
        (props.className ?? '')
      }
    />
  )
}

export function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 min-w-max">{children}</div>
    </div>
  )
}

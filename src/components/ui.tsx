import * as React from 'react'

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 px-2.5 py-1 text-xs font-medium bg-black/5 dark:bg-white/10">
      {children}
    </span>
  )
}

export function Button({
  children,
  href,
  onClick,
  variant = 'default',
  type = 'button',
}: {
  children: React.ReactNode
  href?: string
  onClick?: React.MouseEventHandler
  variant?: 'default' | 'ghost'
  type?: 'button' | 'submit'
}) {
  const cls =
    variant === 'ghost'
      ? 'border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'
      : 'border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15'
  const base =
    'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition'

  if (href) {
    return (
      <a href={href} className={`${base} ${cls}`}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${cls}`}>
      {children}
    </button>
  )
}

export function SectionHeader({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? <p className="text-sm md:text-base opacity-80 max-w-2xl">{subtitle}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
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
    <div className={`rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-950/40 ${className}`}>
      {children}
    </div>
  )
}

export function Media({
  alt,
  height = 220,
}: {
  alt: string
  height?: number
}) {
  // placeholder gradient "image"
  return (
    <div
      aria-label={alt}
      role="img"
      className="w-full rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden"
      style={{ height }}
    >
      <div className="h-full w-full bg-gradient-to-br from-black/5 via-black/0 to-black/10 dark:from-white/10 dark:via-white/0 dark:to-white/5" />
    </div>
  )
}

export function HorizontalCarousel({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="-mx-4 px-4 overflow-x-auto">
      <div className="flex gap-4 min-w-max py-1">{children}</div>
    </div>
  )
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={
        'w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-950/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 ' +
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
        'w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-950/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 ' +
        (props.className ?? '')
      }
    />
  )
}

export function FaqItem({
  q,
  a,
}: {
  q: string
  a: string
}) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-4 py-4 flex items-center justify-between gap-4 text-left"
      >
        <div className="text-sm md:text-base font-medium">{q}</div>
        <div className="text-xs opacity-70">{open ? '—' : '+'}</div>
      </button>
      {open ? (
        <div className="px-4 pb-4 text-sm opacity-80">
          {a}
        </div>
      ) : null}
    </div>
  )
}

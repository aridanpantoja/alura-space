import { cn } from '@/lib/utils'

export function WidthWrapper({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'relative mx-auto w-full max-w-screen-2xl px-3 py-24 md:px-6',
        className,
      )}
    >
      {children}
    </div>
  )
}

'use client'

import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type NavLinkProps = {
  children: React.ReactNode
  className?: string
} & LinkProps

export function NavLink({ href, children, className, ...props }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href.toString()

  return (
    <Link
      href={href}
      className={cn(
        '',
        className,
        isActive ? 'text-foreground' : 'text-foreground/80',
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

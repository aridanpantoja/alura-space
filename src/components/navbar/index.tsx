import { NavLink } from '@/components/nav-link'
import { pages } from '@/config'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between">
        <nav className="flex items-center gap-2">
          <Link href="/">
            <span>Spacediary</span>
          </Link>

          <ul className="flex gap-4">
            {pages.map((page, i) => (
              <NavLink href={page.href} key={i}>
                {page.name}
              </NavLink>
            ))}
          </ul>
        </nav>

        <nav></nav>
      </div>
    </header>
  )
}

import { Icons } from '@/components/icons'
import { NavLink } from '@/components/nav-link'
import { Button, buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config'
import { Sun } from 'lucide-react'
import Link from 'next/link'
import { MobileNav } from '@/components/mobile-nav'
import { Logo } from '@/components/logo'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full px-4 backdrop-blur supports-[backdrop-filter]:bg-background/20">
      <div className="flex h-14 items-center justify-between">
        <MobileNav />

        <nav className="hidden items-center md:flex">
          <Logo />

          <ul className="ml-6 flex gap-4 text-sm xl:gap-6">
            {siteConfig.pages.map((page, i) => (
              <NavLink href={page.href} key={i}>
                {page.name}
              </NavLink>
            ))}
          </ul>
        </nav>

        <nav className="space-x-0.5">
          <Link
            href={siteConfig.links.github}
            className={buttonVariants({ size: 'icon', variant: 'ghost' })}
          >
            <Icons.gitHub />
          </Link>

          <Button size="icon" variant="ghost">
            <Sun />
          </Button>
        </nav>
      </div>
    </header>
  )
}

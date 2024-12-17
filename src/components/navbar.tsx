import { Icons } from '@/components/icons'
import { Logo } from '@/components/logo'
import { NavLink } from '@/components/nav-link'
import { buttonVariants } from '@/components/ui/button'
import { WidthWrapper } from '@/components/width-wrapper'
import { siteConfig } from '@/config'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/20">
      <WidthWrapper className="py-0">
        <div className="flex h-14 items-center justify-between">
          <nav className="flex items-center">
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
          </nav>
        </div>
      </WidthWrapper>
    </header>
  )
}

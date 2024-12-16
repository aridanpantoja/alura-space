import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { AlignLeft } from 'lucide-react'
import Link from 'next/link'
import { Icons } from './icons'
import { siteConfig } from '@/config'

export function MobileNav() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild className="block md:hidden">
          <Button size="icon" variant="ghost">
            <AlignLeft />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="pb-40">
          <SheetTitle>Navegação</SheetTitle>
          <nav>
            <ul className="mt-4 grid grid-cols-1 gap-4 md:gap-6">
              {siteConfig.pages.map((page, i) => (
                <li key={i}>
                  <Link
                    href={page.href}
                    className="flex items-center gap-3 rounded-md bg-gradient-to-r from-primary/30 to-primary/5 p-3 md:p-4"
                  >
                    <div className="flex items-center justify-center rounded-sm bg-foreground p-3 text-primary">
                      <page.Icon className="size-5 md:size-6" />
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-bold md:text-base">
                        {page.name}
                      </span>
                      <span className="text-xs text-muted-foreground md:text-sm">
                        {page.description}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>

      <Link
        href="/"
        className="absolute right-1/2 flex translate-x-1/2 items-center gap-2 md:hidden"
      >
        <Icons.logo className="size-6" />
        <span className="font-bold">Space Diary</span>
      </Link>
    </>
  )
}

import { siteConfig } from '@/config'
import { Logo } from './logo'
import { WidthWrapper } from '@/components/width-wrapper'

export function Footer() {
  return (
    <footer className="relative z-50 w-full bg-primary/10 backdrop-blur-sm">
      <WidthWrapper className="max-w-7xl py-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8 md:flex-row md:gap-48">
            <div className="space-y-6">
              <Logo />

              <p className="text-sm text-muted-foreground">
                Every day brings a new picture that tells a captivating story.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:gap-20">
              <div className="space-y-4 text-sm">
                <p className="font-bold">Pages</p>

                <ul className="space-y-3 text-muted-foreground">
                  {siteConfig.pages.map((page) => (
                    <li key={page.name}>{page.name}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-sm">
                <p className="font-bold">Pages</p>

                <ul className="space-y-3 text-muted-foreground">
                  {siteConfig.pages.map((page) => (
                    <li key={page.name}>{page.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-6 text-sm text-muted-foreground">
            <p>
              Built with ❤️ by aridan. The source code is available on GitHub.
            </p>
          </div>
        </div>
      </WidthWrapper>
    </footer>
  )
}

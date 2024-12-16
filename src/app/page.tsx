import { getPictureOfDay } from '@/actions/apod'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default async function Home() {
  const image = await getPictureOfDay()

  return (
    <>
      <section className="relative flex w-full flex-col items-center justify-center py-24">
        <div className="max-w-2xl text-center">
          <h1 className="mb-6">
            Discover the universe
            <br />
            <span className="text-primary">one picture</span> at a time
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Every day brings a new picture that tells a captivating story about
            the wonders of space and the universe beyond.
          </p>
          <Button>Ver foto do dia</Button>
        </div>
      </section>

      <section className="relative mx-auto flex w-full max-w-3xl flex-col justify-center gap-6 px-6">
        <div className="animated-border z-10 flex w-full items-center justify-center overflow-hidden rounded-md bg-muted">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
            <Image
              src={image.hdurl}
              alt="screenshot"
              className="h-full object-cover"
              width={1280}
              height={720}
            />
            <div className="absolute bottom-6 right-1/2 max-w-prose translate-x-1/2 space-y-2 rounded-md border border-gray-50/20 bg-muted/80 p-4 supports-[backdrop-filter]:bg-gray-300/20">
              <div className="space-y-2 overflow-hidden rounded-xl border border-gray-50/20 bg-background/80 p-4 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold">{image.title}</p>
                  {image.copyright && (
                    <p className="text-sm">&copy; {image.copyright}</p>
                  )}
                </div>
                <p className="truncate text-sm text-muted-foreground">
                  {image.explanation}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 mx-auto flex h-[550px] w-10/12 translate-y-5 items-center overflow-hidden rounded-xl border border-border/50 bg-muted"></div>
        <div className="absolute inset-0 -z-10 mx-auto flex h-[550px] w-9/12 translate-y-10 items-center overflow-hidden rounded-xl border border-border/50 bg-muted/70"></div>
      </section>
    </>
  )
}

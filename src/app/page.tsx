import { DayPicture } from '@/components/day-picture'
import { Button } from '@/components/ui/button'
import { WidthWrapper } from '@/components/width-wrapper'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <section>
        <WidthWrapper className="max-w-2xl pb-0 text-center">
          <h1 className="mb-6">
            Discover the universe{' '}
            <span className="text-primary">one picture</span> at a time
          </h1>
          <p className="mb-8 text-muted-foreground md:text-xl">
            Every day brings a new picture that tells a captivating story about
            the wonders of space and the universe beyond.
          </p>
          <div className="space-x-2">
            <Button>Download Picture</Button>
            <Button variant="ghost">See Galery &rarr;</Button>
          </div>
        </WidthWrapper>
      </section>

      <section>
        <WidthWrapper className="max-w-5xl">
          <div>
            <Suspense fallback={<p>Loading...</p>}>
              <DayPicture />
            </Suspense>
          </div>
        </WidthWrapper>
      </section>
    </>
  )
}

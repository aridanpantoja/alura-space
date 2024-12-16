import { DayPicture } from '@/components/day-picture'
import { Button } from '@/components/ui/button'
import { CircleCheck } from 'lucide-react'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <section className="relative flex w-full flex-col items-center justify-center py-24">
        <div className="max-w-2xl text-center">
          <h1 className="mb-6">
            Discover the universe
            <br />
            <span className="text-violet-600">one picture</span> at a time
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Every day brings a new picture that tells a captivating story about
            the wonders of space and the universe beyond.
          </p>
          <div className="space-x-2">
            <Button>Download Picture</Button>
            <Button variant="ghost">See Galery &rarr;</Button>
          </div>
        </div>
      </section>

      <section className="relative mx-auto mb-48 flex w-full max-w-xl flex-col justify-center gap-6 px-6">
        <Suspense fallback={<p>Loading...</p>}>
          <DayPicture />
        </Suspense>
        <div className="absolute inset-0 mx-auto flex w-10/12 translate-y-5 items-center overflow-hidden rounded-xl border border-border/50 bg-muted"></div>
        <div className="absolute inset-0 -z-10 mx-auto flex w-9/12 translate-y-10 items-center overflow-hidden rounded-xl border border-border/50 bg-muted/70"></div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-6 px-6 md:grid md:grid-cols-2 md:gap-12">
        <div className="animated-border flex h-full w-full items-center justify-center rounded-md bg-muted py-12"></div>

        <div className="w-full space-y-4 text-center md:text-start">
          <h2 className="text-3xl font-bold">Save Your Favorite Images</h2>
          <p className="text-pretty text-muted-foreground">
            Create your own constellation of images and carry the cosmos with
            you!
          </p>
          <ul className="mx-auto flex w-fit flex-row flex-wrap justify-center gap-4 md:w-full md:flex-col">
            <li className="flex gap-2">
              <CircleCheck className="text-primary" /> Quick Access
            </li>
            <li className="flex gap-2">
              <CircleCheck className="text-primary" /> Share the Wonder
            </li>
            <li className="flex gap-2">
              <CircleCheck className="text-primary" /> Immersive Viewing
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

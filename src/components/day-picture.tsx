import { getPictureOfDay } from '@/actions/apod'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Search } from 'lucide-react'
import Image from 'next/image'
import { DialogHeader } from './ui/dialog'

export async function DayPicture() {
  const image = await getPictureOfDay()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="animated-border group z-10 flex w-full items-center justify-center overflow-hidden rounded-md bg-muted transition-all hover:cursor-pointer hover:shadow-xl hover:shadow-primary">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
            <Image
              src={image.hdurl}
              alt="screenshot"
              className="h-full object-cover"
              width={1280}
              height={720}
            />
            <div className="absolute opacity-0 transition-all group-hover:block group-hover:translate-y-0 group-hover:opacity-100">
              <Button size="icon">
                <Search />
              </Button>
            </div>
            <div className="absolute inset-x-4 bottom-4 space-y-2 rounded-md border border-gray-50/20 bg-muted/80 p-4 supports-[backdrop-filter]:bg-gray-300/20">
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
      </DialogTrigger>
      <DialogContent className="grid max-w-5xl grid-cols-2 items-center">
        <div>
          <Image
            src={image.hdurl}
            alt="screenshot"
            className="h-full rounded-md border object-cover"
            width={1280}
            height={720}
          />
        </div>
        <DialogHeader>
          <DialogTitle>{image.title}</DialogTitle>
          <DialogDescription>{image.explanation}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { getAPOD } from '@/services/apod'
import { Info } from 'lucide-react'
import Image from 'next/image'

export async function DayPicture() {
  const image = await getAPOD()

  return (
    <div className="animated-border relative flex w-full items-center justify-center overflow-hidden rounded-xl">
      <Image
        priority
        src={image.url}
        alt={image.title}
        width={1280}
        height={720}
      />

      <Dialog>
        <DialogTrigger asChild>
          <Button size="icon" className="absolute right-3 top-3 [&_svg]:size-5">
            <Info />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="gap-2">
            <DialogTitle>{image.title}</DialogTitle>
            <DialogDescription>{image.explanation}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

import Link from 'next/link'
import { Icons } from '@/components/icons'

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <Icons.logo className="size-6" />
      <span className="font-bold">Spacepics</span>
    </Link>
  )
}

import './reset.css'
import './globals.css'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({subsets: ['latin']})

export const metadata = {
  title: 'Alura Space',
  description: 'A galeria mais completa de fotos do espaço!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={openSans.className}>
      <body>{children}</body>
    </html>
  )
}

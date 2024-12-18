import { Camera, Images } from 'lucide-react'

export const siteConfig = {
  name: 'Spacepics',
  url: 'https://spacepics.vercel.app',
  ogImage: 'https://spacepics.vercel.app/og.png',
  description: 'A simple description for Space Diary.',
  links: {
    github: 'https://github.com/aridanpantoja/spacediary',
  },
  pages: [
    {
      href: '/galery',
      name: 'Galery',
      description: 'View NASA’s picture of the day.',
      Icon: Camera,
    },
    {
      href: '/about',
      name: 'About',
      description: 'See Mars rover images.',
      Icon: Images,
    },
  ],
}

import { Camera, Images } from 'lucide-react'

export const siteConfig = {
  name: 'Space Diary',
  url: 'https://spacediary.vercel.app',
  ogImage: 'https://spacediary.vercel.app/og.png',
  description: 'A simple description for Space Diary.',
  links: {
    github: 'https://github.com/aridanpantoja/spacediary',
  },
  pages: [
    {
      href: '/todays-picture',
      name: "Today's Picture",
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

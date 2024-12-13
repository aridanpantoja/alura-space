import { Camera, Eclipse, Images, Orbit } from 'lucide-react'

export const siteConfig = {
  name: 'Space Diary',
  url: 'https://spacediary.vercel.app',
  ogImage: 'https://spacediary.vercel.app/og.png',
  description: 'A simple description for Space Diary.',
  links: {
    github: 'https://github.com/aridanpantoja/spacediary',
  },
}

export const pages = [
  {
    href: '/todays-picture',
    name: "Today's Picture",
    description: 'View NASA’s picture of the day.',
    Icon: Camera,
  },
  {
    href: '/rovers',
    name: 'Rover Photos',
    description: 'See Mars rover images.',
    Icon: Images,
  },
  {
    href: '/asteroids',
    name: 'Asteroids',
    description: 'Track nearby asteroids.',
    Icon: Orbit,
  },
  {
    href: '/solar-system',
    name: 'Solar System',
    description: 'Explore the solar system.',
    Icon: Eclipse,
  },
]

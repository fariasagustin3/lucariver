import { Raleway, Roboto } from 'next/font/google'

export const raleway = Raleway({ subsets: ['latin'] })

export const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"] 
})
import './globals.css'
import { raleway } from './fonts';

export const metadata = {
  title: 'Beratung & Therapie  Andreas Zimmermann | Systemische Paar- & Familientherapie Andreas Zimmermann',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}

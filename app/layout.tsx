import '../styles/globals.scss'
import { Header } from '@/ui/organisms/header/Header'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <div className="container px-4 py-6 mx-auto">{children}</div>
      </body>
    </html>
  )
}

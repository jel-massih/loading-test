import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div><Link href='/' >Home</Link></div>
        <div><Link href='/dashboard' >Dashboard</Link></div>
        <div><Link href='/test' >Test</Link></div>
        <div><Link href='/dynamic/a' >Dynamic A</Link></div>
        <div><Link href='/dynamic/b' >Dynamic B</Link></div>
        <div><Link href='/dynamic/c' >Dynamic C</Link></div>
        {children}
      </body>
    </html >
  )
}

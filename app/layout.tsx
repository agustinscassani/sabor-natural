import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { Inter } from 'next/font/google'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import type { Metadata } from 'next'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sabor Natural',
  description: 'Sabor Natural',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Utils
  const { isAuthenticated } = getKindeServerSession();
  const isAuthed = await isAuthenticated();

  // Render
  return (
    <html lang="en">
      <body className={inter.className}>
        {isAuthed && <LogoutLink>Sign Out</LogoutLink>}
        {children}
      </body>
    </html>
  )
}

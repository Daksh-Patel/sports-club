import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header/header"

export const metadata: Metadata = {
  title: "Shopping Sports Item",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='w-full'>
        <Header />

        {children}
      </body>
    </html>
  )
}
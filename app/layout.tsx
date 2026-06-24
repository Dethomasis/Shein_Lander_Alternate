import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "SHEIN — Claim Your $750 Gift Card",
  description: "Tap continue to claim your $750 SHEIN gift card.",
  authors: [{ name: "Lovable" }],
  openGraph: {
    title: "VaultUp",
    description: "VaultUpNow",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@Lovable",
    title: "VaultUp",
    description: "VaultUpNow",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#212121",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${geist.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

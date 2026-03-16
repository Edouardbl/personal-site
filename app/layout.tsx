import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  metadataBase: new URL("https://edouard-blondeau.com"),
  title: {
    default: "Edouard Blondeau — Product Leader",
    template: "%s | Edouard Blondeau",
  },
  description:
    "Senior product leader based in Paris. Building product organizations that create measurable business impact.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
  title: "Edouard Blondeau — Product Leader",
  description:
    "Building product organizations that create measurable business impact.",
  url: "https://edouard-blondeau.com",
  siteName: "Edouard Blondeau",
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
    },
  ],
  locale: "en_US",
  type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
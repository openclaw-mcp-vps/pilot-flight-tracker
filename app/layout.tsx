import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PilotLog — Professional Flight Logbook',
  description: 'Digital logbook for pilots with flight path visualizations, hour tracking, and certification management.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="16fd0068-06ca-455d-bc21-d7aae98b31ce"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Avant Finance: Smart Loan',
  description: 'Personal loans from $500 to $50,000 with fast approvals and flexible repayment terms. No hidden fees, funds in 1-3 days.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

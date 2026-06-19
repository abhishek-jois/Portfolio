import ThemeProvider from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Abhishek HS — AI Engineer & Researcher',
  description:
    'Portfolio of Abhishek HS — LLM Systems, Efficient Fine-tuning, Agentic AI, Medical AI, Graph Neural Networks.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors duration-300 antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

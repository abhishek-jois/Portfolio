'use client'
import { useState } from 'react'

const EMAIL = 'abhiaklapura@gmail.com'

export default function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#333] rounded-lg">
        <span className="text-sm text-gray-600 dark:text-gray-300 font-mono">{EMAIL}</span>
        <button
          onClick={handleCopy}
          className="text-xs text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ml-1 font-medium"
          aria-label="Copy email"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      <div className="flex justify-center gap-3 flex-wrap">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg bg-white dark:bg-[#0a0a0a] hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:-translate-y-0.5"
        >
          ✉ Open in mail app
        </a>
        <a
          href="https://github.com/abhishek-jois"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg bg-white dark:bg-[#0a0a0a] hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:-translate-y-0.5"
        >
          ⌥ GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-hs-262560288/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg bg-white dark:bg-[#0a0a0a] hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:-translate-y-0.5"
        >
          in LinkedIn
        </a>
        <a
          href="https://scholar.google.com/citations?hl=en&user=cAmVi6gAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg bg-white dark:bg-[#0a0a0a] hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:-translate-y-0.5"
        >
          Scholar
        </a>
      </div>
    </div>
  )
}

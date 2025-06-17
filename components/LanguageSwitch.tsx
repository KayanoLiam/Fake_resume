"use client"

import { IoLanguageOutline } from "react-icons/io5"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

export default function LanguageSwitch() {
  const localActive = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'ja', label: 'JA', name: '日本語' },
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'de', label: 'DE', name: 'Deutsch' }
  ]

  const currentLanguage = languages.find(lang => lang.code === localActive) || languages[0]

  const onChangeLanguage = (newLocale: string) => {
    const newPath = pathname.replace(/^\/(en|ja|fr|de)/, `/${newLocale}`)
    router.replace(newPath, {
      scroll: false,
    })
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[2.5rem] h-[2.5rem] bg-opacity-80 flex items-center justify-center gap-1 transition-all hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
      >
        <span className="sr-only">Change Language</span>
        <span className="text-sm hover:scale-[1.15] active:scale-105 transition-all">
          {currentLanguage.label}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 min-w-[120px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onChangeLanguage(lang.code)}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                lang.code === localActive ? 'bg-gray-100 dark:bg-gray-700 font-medium' : ''
              }`}
            >
              <span className="font-medium">{lang.label}</span>
              <span className="ml-2 text-gray-600 dark:text-gray-400">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

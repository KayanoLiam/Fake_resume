"use client"

import { IoLanguageOutline } from "react-icons/io5"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"

export default function LanguageSwitch() {
  const localActive = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'ja', label: 'JA', name: '日本語' },
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'de', label: 'DE', name: 'Deutsch' },
    { code: 'zh', label: 'ZH', name: '中文' }
  ]

  const currentLanguage = languages.find(lang => lang.code === localActive) || languages[0]

  const onChangeLanguage = (newLocale: string) => {
    const newPath = pathname.replace(/^\/(en|ja|fr|de|zh)/, `/${newLocale}`)
    router.replace(newPath, {
      scroll: false,
    })
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
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
        <>
          {/* Backdrop for mobile */}
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown menu */}
          <div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-xl z-[9999] min-w-[140px] max-w-[200px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onChangeLanguage(lang.code)}
                className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors first:rounded-t-md last:rounded-b-md ${
                  lang.code === localActive ? 'bg-gray-100 dark:bg-gray-700 font-medium' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{lang.label}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400 truncate ml-2">
                    {lang.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

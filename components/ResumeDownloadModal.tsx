"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"
import { HiDownload, HiX } from "react-icons/hi"
import { useTheme } from "@/context/theme-context"
import useSound from "use-sound"
import { useEffect } from "react"

interface ResumeDownloadModalProps {
  isOpen: boolean
  onClose: () => void
  onDownload: () => void
}

export default function ResumeDownloadModal({
  isOpen,
  onClose,
  onDownload,
}: ResumeDownloadModalProps) {
  const activeLocale = useLocale()
  const t = useTranslations("ResumeModal")
  const { theme } = useTheme()
  const [playOpen] = useSound("/bubble.wav", { volume: 0.3 })
  const [playClose] = useSound("/light-off.mp3", { volume: 0.2 })

  useEffect(() => {
    if (isOpen) {
      playOpen()
    }
  }, [isOpen, playOpen])

  const handleClose = () => {
    playClose()
    onClose()
  }

  const handleDownload = () => {
    onDownload()
    handleClose()
  }

  const getLocalizedContent = () => {
    switch (activeLocale) {
      case "ja":
        return {
          title: "言語学習の失敗について 😅",
          message: "申し訳ございませんが、他の言語をちゃんと学べませんでした。日本語、フランス語、ドイツ語は見た目だけで、実際には理解できていません。",
          explanation: "つまり、このサイトの翻訳は全部AIに頼んだもので、私の実際の語学力は英語だけです。恥ずかしい話ですが、これが現実です。",
          downloadText: "英語版履歴書をダウンロード",
          closeText: "閉じる"
        }
      case "fr":
        return {
          title: "À propos de mon échec linguistique 😅",
          message: "Désolé, je n'ai pas réussi à apprendre correctement les autres langues. Le japonais, le français et l'allemand ne sont que pour l'apparence - je ne les comprends pas vraiment.",
          explanation: "En gros, toutes les traductions de ce site ont été faites par l'IA, et ma seule vraie compétence linguistique est l'anglais. C'est embarrassant, mais c'est la réalité.",
          downloadText: "Télécharger le CV en anglais",
          closeText: "Fermer"
        }
      case "de":
        return {
          title: "Über mein sprachliches Versagen 😅",
          message: "Entschuldigung, ich habe die anderen Sprachen nicht richtig gelernt. Japanisch, Französisch und Deutsch sind nur zum Schein - ich verstehe sie nicht wirklich.",
          explanation: "Im Grunde wurden alle Übersetzungen dieser Website von KI gemacht, und meine einzige echte Sprachkompetenz ist Englisch. Es ist peinlich, aber das ist die Realität.",
          downloadText: "Englischen Lebenslauf herunterladen",
          closeText: "Schließen"
        }
      default:
        return {
          title: "About My Language Learning Failure 😅",
          message: "Sorry, I didn't learn other languages properly. Japanese, French, and German are just for show - I don't actually understand them.",
          explanation: "Basically, all translations on this site were done by AI, and my only real language skill is English. It's embarrassing, but that's the reality.",
          downloadText: "Download English Resume",
          closeText: "Close"
        }
    }
  }

  const content = getLocalizedContent()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`
                relative max-w-md w-full mx-auto p-6 rounded-2xl shadow-2xl
                ${theme === "light" 
                  ? "bg-white/95 backdrop-blur-md border border-gray-200" 
                  : "bg-gray-900/95 backdrop-blur-md border border-gray-700"
                }
              `}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className={`
                  absolute top-4 right-4 p-2 rounded-full transition-all duration-200
                  ${theme === "light"
                    ? "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                    : "hover:bg-gray-800 text-gray-400 hover:text-gray-200"
                  }
                `}
              >
                <HiX className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="space-y-4">
                {/* Title */}
                <h3 className={`
                  text-xl font-bold pr-8
                  ${theme === "light" ? "text-gray-900" : "text-gray-100"}
                `}>
                  {content.title}
                </h3>

                {/* Message */}
                <p className={`
                  text-sm leading-relaxed
                  ${theme === "light" ? "text-gray-700" : "text-gray-300"}
                `}>
                  {content.message}
                </p>

                {/* Explanation */}
                <p className={`
                  text-xs italic leading-relaxed
                  ${theme === "light" ? "text-gray-600" : "text-gray-400"}
                `}>
                  {content.explanation}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={handleDownload}
                    className={`
                      flex items-center justify-center gap-2 px-4 py-2 rounded-full
                      text-sm font-medium transition-all duration-200
                      ${theme === "light"
                        ? "bg-gray-900 text-white hover:bg-gray-800 hover:scale-105"
                        : "bg-white text-gray-900 hover:bg-gray-100 hover:scale-105"
                      }
                    `}
                  >
                    <HiDownload className="w-4 h-4" />
                    {content.downloadText}
                  </button>
                  
                  <button
                    onClick={handleClose}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                      ${theme === "light"
                        ? "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105"
                      }
                    `}
                  >
                    {content.closeText}
                  </button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
                🤦‍♂️
              </div>
              <div className="absolute -bottom-1 -left-1 text-lg opacity-50">
                📚❌
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

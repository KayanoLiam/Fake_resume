"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>

      <div className="mb-4 p-4 bg-yellow-100 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
        <p className="text-sm italic text-yellow-800 dark:text-yellow-200">
          ⚠️ {activeLocale === "ja" && "免責事項：以下の内容は誇張されており、実際のスキルレベルを反映していない可能性があります。"}
          {activeLocale === "fr" && "Avertissement : Le contenu suivant est exagéré et peut ne pas refléter le niveau de compétence réel."}
          {activeLocale === "de" && "Warnung: Der folgende Inhalt ist übertrieben und spiegelt möglicherweise nicht das tatsächliche Fähigkeitsniveau wider."}
          {activeLocale === "en" && "Disclaimer: The following content is exaggerated and may not reflect actual skill level."}
        </p>
      </div>

      <p className="mb-3">{t("desc")}</p>

      <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded">
        <p className="text-sm text-red-700 dark:text-red-300 font-medium">
          💡 {activeLocale === "ja" && "実際のところ、私には見せるべき本当のスキルやプロジェクトはありません。でも、このサイトはかっこよく見えませんか？"}
          {activeLocale === "fr" && "En réalité, je n'ai pas de vraies compétences ou projets à montrer. Mais ce site a l'air cool, non ?"}
          {activeLocale === "de" && "Ehrlich gesagt habe ich keine echten Fähigkeiten oder Projekte zu zeigen. Aber diese Website sieht cool aus, oder?"}
          {activeLocale === "en" && "Truth be told, I don't have any real skills or projects to show. But this website looks cool, right?"}
        </p>
      </div>
    </motion.section>
  )
}
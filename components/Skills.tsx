"use client"

import React from "react"
import { skillsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useLocale, useTranslations } from "next-intl"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView("Skills")
  const activeLocale = useLocale()
  const sectionLan = useTranslations("SectionName")
  const skillsT = useTranslations("SkillsSection")

  return (
    <section
      id="skills"
      ref={ref}
      className=" max-w-[53rem] scroll-mt-28 text-center mb-28"
    >
      <SectionHeading>{sectionLan("skills")}</SectionHeading>

      <div className="mb-4 p-3 bg-purple-100 dark:bg-purple-900/20 border border-purple-300 dark:border-purple-700 rounded">
        <p className="text-sm text-purple-700 dark:text-purple-300 italic">
          {skillsT("disclaimer")}
        </p>
      </div>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

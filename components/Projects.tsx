"use client"

import React from "react"
import { projectsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import SectionHeading from "./SectionHeading"
import Project from "./Project"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa6"

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1)
  const activeLocale = useLocale()
  const sectionLan = useTranslations("SectionName")
  const projectsT = useTranslations("ProjectsSection")

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{sectionLan("projects")}</SectionHeading>

      <div className="mb-4 p-3 bg-orange-100 dark:bg-orange-900/20 border border-orange-300 dark:border-orange-700 rounded">
        <p className="text-sm text-orange-700 dark:text-orange-300 italic">
          {projectsT("disclaimer")}
        </p>
      </div>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <Link
        className="group tracing-wide font-semibold hover:underline hover:underline-offset-4 hover:decoration-pink text-slate-800 dark:text-slate-400 w-full flex gap-1 items-center justify-center mt-10"
        target="_blank"
        href="https://github.com/KayanoLiam"
      >
        {projectsT("view_all")}
        <FaAngleRight className="group-hover:translate-x-2 transition" />
      </Link>
    </section>
  )
}

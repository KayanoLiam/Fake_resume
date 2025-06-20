"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { BsArrowRight, BsTwitterX } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import Link from "next/link"
import { Source_Code_Pro } from "next/font/google"
import { useLocale } from "next-intl"
import { useSectionInView } from "@/lib/hooks"
import { TypeAnimation } from "react-type-animation"
import { useActiveSectionContext } from "@/context/action-section-context"
import { useTranslations } from "next-intl"
import useSound from "use-sound"
import { useState } from "react"
import ResumeDownloadModal from "./ResumeDownloadModal"

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "400" })

export default function Intro() {
  const { ref } = useSectionInView("Home")
  const activeLocale = useLocale()
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const t = useTranslations("IntroSection")
  const [playHover] = useSound("/bubble.wav", { volume: 0.5 })
  const [showModal, setShowModal] = useState(false)

  const handleDownloadCV = () => {
    if (activeLocale !== "en") {
      setShowModal(true)
      return
    }

    // Always download English version
    downloadResume()
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/English.pdf'
    link.download = 'KayanoJackal-Resume.pdf'
    link.click()
  }

  return (
    <section
      ref={ref}
      className="mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 pt-[7rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/icon.jpg"
              alt="developer-image"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            onHoverStart={() => {
              console.log("sound")
              playHover()
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.25, rotate: 15 }}
            className="absolute text-4xl bottom-0 right-0 hover:rotate-2"
            transition={{
              type: "spring",
              duration: 0.7,
              delay: 0.1,
              stiffness: 125,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className={`${sourceCodePro.className} text-sm tracking-wider `}>
          {t("hello_im")}
        </span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-center text-4xl font-bold tracking-tight  sm:text-5xl">
            {t("name")}
          </h1>

          <div className="text-center">
            <span
              className={`${sourceCodePro.className} text-sm tracking-wider`}
            >
              I&apos;m a{" "}
            </span>
            <h2
              id="name"
              className=" text-center  text-2xl  sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold"
            >
              <TypeAnimation
                sequence={[
                  "Professional Pretender",
                  1500,
                  "Stack Overflow Copy-Paster",
                  1500,
                  "Bug Creator",
                  1500,
                  "Console.log Debugger",
                  1500,
                  "Impostor Syndrome Sufferer",
                  1500,
                  "Tutorial Follower",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </div>
        </motion.div>
        <p>{t("short_intro")}</p>
        <p>
          {t("specialty")}{" "}
          <span className="italic font-bold">{t("specialty_text")}</span>.
        </p>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center  gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}
          className="group bg-gray-900 px-4 py-2 text-sm sm:text-lg text-white sm:px-7 sm:py-3 flex items-center gap-2  rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link> */}

        <button
          onClick={handleDownloadCV}
          className="bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          {t("download_cv")}
          <HiDownload />
        </button>
        <a
          className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://x.com/KayanoJackal"
          target="_blank"
        >
          <BsTwitterX />
        </a>

        <a
          className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/KayanoLiam"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className=" bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          {t("blog")}

          {/* <FaGithubSquare /> */}
        </a>
      </motion.div>

      {/* Resume Download Modal */}
      <ResumeDownloadModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onDownload={downloadResume}
      />
    </section>
  )
}

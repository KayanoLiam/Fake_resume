import React from "react"
import { useTranslations } from "next-intl"

export default function Footer() {
  const footerT = useTranslations("FooterSection")

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 KayanoJackal. {footerT("copyright")}
      </small>
      <p className="text-xs">
        <span className="font-semibold">{footerT("about_title")}</span> {footerT("about_desc")}
      </p>
      <p className="text-xs mt-2 italic">
        {footerT("disclaimer")}
      </p>
    </footer>
  )
}

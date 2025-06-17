import React from "react"

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 KayanoJackal. All rights reserved (though I'm not sure what rights I actually have).
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this fake resume:</span> Cobbled together with
        React & Next.js, TypeScript (with lots of 'any' types), Tailwind CSS,
        Framer Motion, Stack Overflow answers, and pure desperation. Hosted on Vercel
        because they're kind enough to host my disasters for free.
      </p>
      <p className="text-xs mt-2 italic">
        ⚠️ No actual skills were harmed in the making of this website.
        Any resemblance to real competence is purely coincidental.
      </p>
    </footer>
  )
}

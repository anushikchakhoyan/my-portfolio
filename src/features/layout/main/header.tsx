import * as React from "react"

import Link from "@/features/link";

const Header = () => {
  const samplePageLinks = [
    { text: "Home", url: "#",},
    { text: "About", url: "about" },
    { text: "Contact Us", url: "contact-us" },
    { text: "Blog", url: "blog" }]

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-gray-600 px-10 py-6">
      <h1 className="text-base text-gray-50 font-lighter font-dancingScript m-0">
        Anush Chakhoyan
      </h1>
      <nav className="flex gap-8">
        {samplePageLinks.map(link => (
          <Link to={link.url} key={link.url} text={link.text} />
        ))}
      </nav>
    </header>
  )
};

export default Header

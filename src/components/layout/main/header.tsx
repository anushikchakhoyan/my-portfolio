import * as React from "react"
import { useI18next } from "gatsby-plugin-react-i18next"

import Link from "@/components/link"

const Header = ({ siteTitle }) => {
  const { languages, originalPath } = useI18next()
  const samplePageLinks = [{
    text: "Home",
    url: "page-2",
    badge: false,
    description: "A simple example of linking to another page within a Gatsby site"
  },
    {
      text: "About",
      url: "using-typescript"
    },
    {
      text: "Contact Us",
      url: "using-ssr"
    },
    {
      text: "Blog",
      url: "using-dsg"
    }]

  return (
    <header className="flex items-center justify-between bg-neutral-400 px-10 py-6">
      <h1 className="text-4xl font-lighter m-0">
        Logo
      </h1>
      <nav className="flex gap-2">
        {samplePageLinks.map((link, i) => (<Link to={link.url} key={link.url} text={link.text} />))}
      </nav>
    </header>
  )
}
export default Header

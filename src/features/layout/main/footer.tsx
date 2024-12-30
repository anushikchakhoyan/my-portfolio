import * as React from "react"

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-neutral-400 px-10 py-6">
      <p className="m-0">
        dsd
      </p>

      <p className="m-0">
        © {new Date().getFullYear()} &middot; Built with
        <a href="https://medium.com/@anushchakhoyan" target="_blank">{` `} LOVE</a>
      </p>
    </footer>
  )
}
export default Footer

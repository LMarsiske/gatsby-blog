import React from "react"
const Footer = () => {
  return (
    <footer>
      © MammaCare<sup>&reg;</sup> {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer

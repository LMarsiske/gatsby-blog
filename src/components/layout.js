import * as React from "react"
import { Link } from "gatsby"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  MuiThemeProvider,
  makeStyles,
} from "@material-ui/core"
import { Menu } from "@material-ui/icons"

import theme from "../theme"
import Nav from "../components/nav"
import Footer from "../components/footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  header = <Button color="primary">Test</Button>

  return (
    <MuiThemeProvider theme={theme}>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </MuiThemeProvider>
  )
}

export default Layout

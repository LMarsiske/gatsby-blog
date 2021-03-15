import React from "react"
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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "inherit",
  },
}))

const Nav = props => {
  const classes = useStyles()
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Nav

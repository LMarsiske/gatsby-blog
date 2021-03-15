import { createMuiTheme } from "@material-ui/core"
import { purple } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#680000",
    },
    secondary: {
      main: purple[700],
    },
  },
})

export default theme

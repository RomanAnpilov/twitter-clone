// @ts-nocheck

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe Ui",
      "Roboto",
      "Ubuntu",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
  },
  palette: {
    primary: {
      main: "#1DA1F2",
      dark: "#1A91DA",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#1A91DA",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#FFF",
    },
  },
  shadows: [],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: "none",
          fontSize: 16,
          height: 40,
        },
        textPrimary: {
          paddingLeft: 20,
          paddingRight: 20,
        },
        outlinedPrimary: {
          borderColor: "#1DA1F3",
        },
      },
    },
  },
  MuiFilledInput: {
    underline: {
      "&:after": {
        borderBottomWidth: "2px",
      },
      "&:before": {
        borderColor: "#000",
        borderBottomWidth: "2px",
      },
    },
    input: {
      backgroundColor: "#F5F832",
    },
  },
  MuiDialog: {
    paper: {
      borderRadius: 15,
    },
  },
  MuiDialogActions: {
    root: {
      marginBottom: 8,
    },
  },
  MuiDialogTitle: {
    root: {
      borderBottom: "1px solid #CCD6DD",
      marginBottom: 10,
      padding: "10px 15px",
      "& h2": {
        display: "flex",
        alignItems: "center",
        fontWeight: 800,
      },
      "& button": {
        padding: 8,
        marginRight: 20,
      },
    },
  },
});

export default theme;

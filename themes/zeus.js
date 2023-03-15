import { createTheme, ThemeProvider } from "@mui/material";

export const zeusTheme = createTheme({
    palette: {
        primary: {
            main: '#DA291C',
            
        }
    },
    components: {
        // Name of the component
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              fontSize: '1rem',
            },
          },
        },
        MuiButtonBase: {
          defaultProps: {
            // The default props to change
            disableRipple: true, // No more ripple, on the whole application 💣!
          },
        },
      },
})

export default zeusTheme;
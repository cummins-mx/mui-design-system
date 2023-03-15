import BasicButton from "@/components/atoms/Button";
import zeusTheme from "../themes/zeus.js";
import { Button, createTheme, ThemeProvider, CssBaseline, Accordion } from "@mui/material";



export default function Zeus() {
return(
    <>
    <ThemeProvider theme={zeusTheme}>
    <CssBaseline/>
        <Button variant="contained"> Hello</Button>    
    
    </ThemeProvider>


    </>
)
}
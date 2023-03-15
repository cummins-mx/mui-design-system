import { Button } from "@mui/material";

export default function BasicButton({label, ...args}){
    return(
        <Button  {...args}>{label}</Button>
    )
}
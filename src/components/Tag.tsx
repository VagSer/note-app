import { Button } from "@mui/material";

export default function Tag({children, text, ...props}: any) {
    return (
        <Button
            variant="contained"
            sx={{borderRadius: '20px'}}
        >
            {text}
        </Button>
    )
}
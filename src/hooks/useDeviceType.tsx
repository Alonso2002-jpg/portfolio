import {useMediaQuery} from "@mui/material";

export function useDeviceType(){
    const isMobile = useMediaQuery('(max-width: 600px)');
    return {isMobile};
}
import { useEffect } from "react"
import { useLocation } from "react-router-dom"


const ScrollTop=()=>{
    const path= useLocation()
    useEffect(()=>{
        window.scrollTo({top:0,behavior:"smooth"})

    },[path])
}
export default ScrollTop;
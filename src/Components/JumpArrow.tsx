import { useEffect, useState } from "react";
import { useScroll } from "../lib/useScroll";

const JumpArrow = () => {
    const MyYOffset = 0;
    const [goUpStyle, setGoUpStyle] = useState({display:"none"})
    const { scrollY } = useScroll();
    const handleClick = () => {
        window.scrollTo({top: MyYOffset, behavior: 'smooth'});
    }
    useEffect(()=>{
        if(scrollY>700){
            setGoUpStyle({display:"block"})
        }
        else{
            setGoUpStyle({display:"none"})
            
        }
    },[scrollY])
    return(
        <>
        
            <button onClick={handleClick}><img className="goUp" style={goUpStyle} src={require("../static/up-arrow.png")} alt="" /></button>
        
        </>
    )
}
export default JumpArrow
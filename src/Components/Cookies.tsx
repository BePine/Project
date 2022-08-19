import { useEffect, useState } from "react";

const Cookies = () => {
    const [cookieShow, setCookieShow] = useState({display: "none"})
    useEffect(()=>{
        if(window.localStorage.getItem("veteranCookieStat")===null){
            setCookieShow({display: "block"})
        }
        else{
            setCookieShow({display: "none"})
    
        }
    },[])
    const handleClickAccept = () => {
        window.localStorage.setItem("veteranCookieStat", "true")
        setCookieShow({display: "none"})
    }
    const handleClickDeny = () => {
        setCookieShow({display: "none"})
    }
	return (
		<div className='cookie' style={cookieShow}>
			<div className='contentCookie'>i m cookie</div>
            <button onClick={handleClickAccept}>accept</button><button onClick={handleClickDeny}>deny</button>
		</div>
	);
};
export default Cookies;

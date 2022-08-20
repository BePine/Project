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
    const handleClickConsent = () => {
        window.localStorage.setItem("veteranCookieStat", "true")
        setCookieShow({display: "none"})
    }
    const handleClickDeny = () => {
        setCookieShow({display: "none"})
    }
	return (
		<div className='cookie margins' style={cookieShow}>
            <h2>Notice</h2>
			<div className='contentCookie'>We collect cookies to analyze our website traffic and performance; we never collect any personal data, disclaimer: this website doesn t actual collect any cookies.</div>
            <img className="margins" src={require("../static/cookie.png")} alt="couldn t load image" />
            <button onClick={handleClickConsent}>Consent</button>
            <button onClick={handleClickDeny}>Deny</button>
		</div>
	);
};
export default Cookies;

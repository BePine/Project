
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import NavbarMobileBottom from "./NavbarMobileBottom"
const linksArr = [
    { label: "Home", link: "/" },
    { label: "Forum", link: "/forum" },
    { label: "Contact", link: "/contact" },
    { label: "About", link: "/about" },
]
const NavbarMobile = () => {
	const [navShow, setNavShow] = useState(0)
    const conditioning = () => {
		if(navShow){
			setNavShow(0)
		}
		else{
			setNavShow(1)
		}
	}
	return (
		<>
			<ul className='mobileNavbarUl'>
				<button className='mobileNavButton' onClick={conditioning}>
					<img
						src={require('../../static/hamburgerwhite.png')}
						alt=''
						className='burger'
					/>
				</button>
			</ul>
			<ul className='mobileNavbarBottom' style={navShow? {display:"block"}:{display:"none"}}>
                {linksArr.map(({label, link}) => <li key={label}><Link to={link}>{label}</Link></li>)}
				
			</ul>
		</>
	);
};

export default NavbarMobile;

import { Link } from "react-router-dom"

const linksArr = [
    { label: "Home", link: "/" },
    { label: "Forum", link: "/forum" },
    { label: "Contact", link: "/contact" },
    { label: "About", link: "/about" },
]

const NavbarDesktop = () => {
    return(
        <ul>
            {linksArr.map(({label, link}) => <li key={label}><Link to={link}>{label}</Link></li>)}
        </ul> 
    )
}

export default NavbarDesktop
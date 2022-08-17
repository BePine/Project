import { useWindowSize } from 'usehooks-ts'
import NavbarDesktop from './Navbars/NavbarDesktop';
import NavbarMobile from './Navbars/NavbarMobile';


const Header = () => {


    // https://usehooks-ts.com/react-hook/use-window-size
    // const { width, height } = useWindowSize()
    // const isMobile = width < 600;

    // return (
        // 
    // )
    const { width, height } = useWindowSize()
    const isMobile = width < 900;
    return ( 
        <>{isMobile ? <NavbarMobile/> : <NavbarDesktop/>}</>
    );
   
}
 
export default Header;
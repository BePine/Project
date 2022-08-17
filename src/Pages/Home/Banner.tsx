import { useEffect, useState } from "react"
import { ParallaxBanner } from 'react-scroll-parallax';
const Banner = () => {
    let [pageY, setPageY] = useState(0)
    
    

    return(
      <>
      
        <ParallaxBanner
          layers={[{ 
            image: require('../../static/image1.png'),
            children:(
              <div className="mainMessage">
                <h2>Welcome to the Veteran!</h2>
              </div>
            ), 
            speed: -15 }]}
          className="banner"
        />
        
      </>
      
    )
}

export default Banner
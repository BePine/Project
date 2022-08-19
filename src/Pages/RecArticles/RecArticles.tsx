import { useLocation } from "react-router-dom"

const RecArticles = () => {
    const location = useLocation()
    const data:any = location.state
    
    return(
        
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f05454" fill-opacity="1" d="M0,32L1440,256L1440,320L0,320Z"></path>
            </svg>
            <div className="postSite">
                <div className="postContainer">
                    <div className="postTitle">{data.title}</div>
                    <div className="postContent">{data.content}</div>
                    <div className="postAuthor">{data.author}</div>
                </div>
            </div>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#f05454'
					d='M0,224L1440,96L1440,0L0,0Z'
				></path>
			</svg>
        </>
    )
}

export default RecArticles
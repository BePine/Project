import { useLocation } from "react-router-dom"

const RecArticles = () => {
    const location = useLocation()
    const data:any = location.state
    
    return(
        
        <div className="recArticlesSite">
            <div className="postTitle">{data.title}</div>
            <div className="postContent">{data.content}</div>
            <div className="postAuthor">{data.author}</div>
        </div>
    )
}

export default RecArticles
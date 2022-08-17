import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPosts } from "../../lib/posts";


const Post = (props?:any) => {

    // const [posts, setPosts] = useState<any>(null);
    // useEffect(()=>{
    //     getPosts().then((data)=>{
    //         setPosts(data)
            
    //     })
    // },[])
    // console.log(posts)
    const location = useLocation()
    const data:any = location.state
    
    console.log(data)
    return(
        <div className="postSite">
            <div className="postTitle">{data.title}</div>
            <div className="postContent">{data.content}</div>
            <div className="postAuthor">{data.author}</div>

            

        </div>
    )
}
export default Post
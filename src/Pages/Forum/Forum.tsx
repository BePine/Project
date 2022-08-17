import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getPosts } from "../../lib/posts"
import Post from "./Post";

const Forum = () => {
    const [posts, setPosts] = useState<any>(null);
    useEffect(()=>{
        getPosts().then((data)=>{
            setPosts(data)
        })
    },[])

    return(
        <div className="forum">
            {posts?.map((pos:any)=> <Link to={'/forum/posts/'+pos.id} state={pos}>
                <div className='posts'>{pos.title}</div>
            </Link> )}
        </div>
    )
}
export default Forum
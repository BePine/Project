import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPosts } from "../../lib/posts";
const arr = [
    {class:"postTitle", content:"data.title"},
    {class:"postContent", content:"data.content"},
    {class:"postAuthor", content:"data.author"},


]

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
            {/* {arr.map(({class, content}) => <div className={class?}>{content}</div>)} */}

        </div>
    )
}
export default Post
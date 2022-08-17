import { getArticles } from "../../lib/blog"
import { useState } from 'react'
import { json } from "stream/consumers"
import Newsletter from "./Newsletter"
import { useArticle } from "../../App"
const Main = (props:any) => {
    const {article} = useArticle()
    return(
        <>
            
            <div className="main">
                <div className="articles">
                    {article?.map((element:any)=>
                    
                        <div className="elements">
                            <div className="elementTitle"><h3>{element.title}</h3></div>
                            <div className="elementContent"><p>{element.content}</p></div>
                            <div className="elementAuthor"><h5>author: {element.author}</h5></div>
                        </div>
                    )}
                </div>
                <Newsletter/>
            </div>
        </>
    )
    
}

export default Main
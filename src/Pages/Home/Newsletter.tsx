import { useState } from "react"
import { sendArticles } from "../../lib/newsletterSend"

const Newsletter = () => {
    const [newsName, setNewsName] = useState("")
    const [newsEmail, setNewsEmail] = useState("")

    const handleInputChange = (e:any) => {
        if(e.target.type==="text"){
            console.log(newsName)
            setNewsName(e.target.value)
        }
        else{
            setNewsEmail(e.target.value)

        }
    }
    const handleSubmit = (e:any) => {
        sendArticles(newsName, newsEmail, e)
        setNewsName("")
        setNewsEmail("")
    }
    return(
        <>
            <div className="newsletter margins">
                <h3>Sign up for our newsletter</h3>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <input type="text" onChange={handleInputChange} name={newsName} value={newsName} placeholder="enter name" required/>
                    <input type="email" onChange={handleInputChange} name={newsEmail} value={newsEmail} placeholder="enter email" required/>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </>
    )
}
export default Newsletter
import { addDoc } from "firebase/firestore";
import { useState } from "react";
import { questColRef } from "../../lib/firebase";

const Contact = () => {
    const [contactEmail, setContactEmail] = useState("")
    const [contactName, setContactName] = useState("")
    const [contactContent, setContactContent] = useState("")

    const handleInputChange = (e:any) => {
        if(e.target.name==="textareaH"){
            console.log(contactName)
            setContactContent(e.target.value)
        }
        else if(e.target.name==="textH"){
            console.log(contactName)
            setContactName(e.target.value)
        }
        else if(e.target.name==="emailH"){
            setContactEmail(e.target.value)

        }
    }
    const handleSubmit = (e:any) => {
        e.preventDefault()
        const docRef = addDoc(questColRef, {
            email: contactEmail,
            name: contactName,
            content: contactContent
          });
        setContactName("")
        setContactEmail("")
        setContactContent("")


    }
	return (
		<>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#f05454'
					d='M0,32L1440,256L1440,320L0,320Z'
				></path>
			</svg>
			<div className='contactSite'>
                <h1>Contact info</h1>
				<div className='imgContainer'>
					<img
						className='veteran64'
						src={require('../../static/veteran64.png')}
						alt='couldn t load img'
					/>
				</div>
				<form className='contactContainer' onSubmit={handleSubmit}>
                    <p>To contact us submit form and we will respond as fast as possible</p>
					<input type='email' onChange={handleInputChange} name="emailH" value={contactEmail} placeholder='enter e-mail' required/>
					<input type='text' onChange={handleInputChange} name="textH" value={contactName} placeholder='enter name' required/>
					<textarea onChange={handleInputChange} name="textareaH" value={contactContent} cols={30} rows={10} placeholder="enter text to send" required></textarea>
					<button type="submit">Submit</button>
				</form>
			</div>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path fill='#f05454' d='M0,224L1440,96L1440,0L0,0Z'></path>
			</svg>
		</>
	);
};
export default Contact;

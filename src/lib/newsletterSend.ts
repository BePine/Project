import { addDoc } from "firebase/firestore";
import { newsColRef } from "./firebase";

const sendArticles = (newsName:any, newsEmail:any, e:any) => {
	e.preventDefault()
	console.log(newsEmail)
	const docRef = addDoc(newsColRef, {
		email: newsEmail,
		name: newsName
	  });
	  
};

export { sendArticles };
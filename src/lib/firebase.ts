import {initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCrww8B6JMFOPrjZXZfQaUBA0OR2zfHBiE",
    authDomain: "websitearticlesreactapp.firebaseapp.com",
    projectId: "websitearticlesreactapp",
    storageBucket: "websitearticlesreactapp.appspot.com",
    messagingSenderId: "476961510250",
    appId: "1:476961510250:web:2a0dc0b91c66b309ac8b13",
    measurementId: "G-KW1LMLBZVG"
  };
  
initializeApp(firebaseConfig)

export const db = getFirestore()

export const articlesColRef = collection(db, 'RecommendedArticles')
export const newsColRef =  collection(db, "NewsletterUsers")
export const postsColRef =  collection(db, "Posts")


//   getDocs(colRef)
//     .then((snapshot)=>{
//         let recArticles :any = []
//         snapshot.docs.forEach((doc)=> {
//             recArticles.push({ ...doc.data(), id: doc.id})
//         })
//         console.log(recArticles)
//     })
//     .catch((err)=>{
//         console.log(err.message)
//     })
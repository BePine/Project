import { getDocs } from 'firebase/firestore';
import { articlesColRef } from './firebase';

const getArticles = () => {
	return getDocs(articlesColRef)
		.then((snapshot) => {
			let recArticles: any = [];
			snapshot.docs.forEach((doc) => {
				recArticles.push({ ...doc.data(), id: doc.id });
			});
			return recArticles;
		})
		.catch((err) => {
			console.log(err.message);
		});
};
export { getArticles };



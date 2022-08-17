import { getDocs } from 'firebase/firestore';
import { postsColRef } from './firebase';

const getPosts = () => {
	return getDocs(postsColRef)
		.then((snapshot) => {
			let recPosts: any = [];
			snapshot.docs.forEach((doc) => {
				recPosts.push({ ...doc.data(), id: doc.id });
			});
			return recPosts;
		})
		.catch((err) => {
			console.log(err.message);
		});
};
export { getPosts };
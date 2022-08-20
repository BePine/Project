import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPosts } from '../../lib/posts';

const Post = (props?: any) => {
	// const [posts, setPosts] = useState<any>(null);
	// useEffect(()=>{
	//     getPosts().then((data)=>{
	//         setPosts(data)

	//     })
	// },[])
	// console.log(posts)
	const location = useLocation();
	const data: any = location.state;

	console.log(data);
	return (
		<>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#f05454'
					fill-opacity='1'
					d='M0,32L1440,256L1440,320L0,320Z'
				></path>
			</svg>
			<div className='postSite'>
				<div className='postContainer margins'>
					<div className='postTitle margins'>{data.title}</div>
					<div className='postContent'>{data.content}</div>
					<div className='postAuthor margins'>{data.author}</div>
				</div>
			</div>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path fill='#f05454' d='M0,224L1440,96L1440,0L0,0Z'></path>
			</svg>
		</>
	);
};
export default Post;

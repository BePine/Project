import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../lib/posts';
import Post from './Post';

const Forum = () => {
	const [posts, setPosts] = useState<any>(null);
	useEffect(() => {
		getPosts().then((data) => {
			setPosts(data);
		});
	}, []);

	return (
		<div className='forum'>
			<div className='forumHeader margins'>
				<h2>Forum</h2>
				<Link to="/forum/createPost"><div className='createPost'>new post</div></Link>
			</div>
			{posts?.map((pos: any) => (
				<Link to={'/forum/posts/' + pos.id} state={pos}>
					<div className='posts margins'>
						<div className='posTitle'>{pos.title}</div>
						<div className='posAuthor'>{pos.author}</div>
					</div>
				</Link>
			))}
		</div>
	);
};
export default Forum;

import { addDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postsColRef } from "../../lib/firebase";

const NewPost = () => {
    const [newPostTitle, setNewPostTitle] = useState('');
	const [newPostAuthor, setNewPostAuthor] = useState('');
	const [newPostContent, setNewPostContent] = useState('');
	const navigate = useNavigate()
	const handleInputChange = (e: any) => {
		if (e.target.name === 'textareaH') {
			console.log(newPostAuthor);
			setNewPostContent(e.target.value);
		} else if (e.target.name === 'nameH') {
			console.log(newPostAuthor);
			setNewPostAuthor(e.target.value);
		} else if (e.target.name === 'titleH') {
			setNewPostTitle(e.target.value);
		}
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		const docRef = addDoc(postsColRef, {
			title: newPostTitle,
			author: newPostAuthor,
			content: newPostContent,
		});
		setNewPostAuthor('');
		setNewPostTitle('');
		setNewPostContent('');
		navigate('/forum')
	};
    return(
        <>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path fill='#f05454' d='M0,32L1440,256L1440,320L0,320Z'></path>
			</svg>
			<div className='sideSite'>
				<h1>Create new post</h1>
				<div className='imgContainer margins'>
					<img
						className='veteran64'
						src={require('../../static/veteran64.png')}
						alt='couldn t load img'
					/>
				</div>
				<form className='sideContainer margins' onSubmit={handleSubmit}>
					<p className='margins'>
						Fill fields with correct data to create your post.
					</p>
					<input
						className='margins'
						type='text'
						onChange={handleInputChange}
						name='titleH'
						value={newPostTitle}
						placeholder='enter title'
						required
					/>
					<input
						className='margins'
						type='text'
						onChange={handleInputChange}
						name='nameH'
						value={newPostAuthor}
						placeholder='enter author'
						required
					/>
					<textarea
						className='margins'
						onChange={handleInputChange}
						name='textareaH'
						value={newPostContent}
						cols={30}
						rows={10}
						placeholder='enter text for post to contain'
						required
					></textarea>
					<button className='margins' type='submit'>
						Submit
					</button>
				</form>
			</div>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path fill='#f05454' d='M0,224L1440,96L1440,0L0,0Z'></path>
			</svg>
		</>
    )
}
export default NewPost
import { addDoc } from "firebase/firestore";
import { useState } from "react";
import { postsColRef } from "../../lib/firebase";

const NewPost = () => {
    const [newPostEmail, setNewPostEmail] = useState('');
	const [newPostName, setNewPostName] = useState('');
	const [newPostContent, setNewPostContent] = useState('');

	const handleInputChange = (e: any) => {
		if (e.target.name === 'textareaH') {
			console.log(newPostName);
			setNewPostContent(e.target.value);
		} else if (e.target.name === 'textH') {
			console.log(newPostName);
			setNewPostName(e.target.value);
		} else if (e.target.name === 'emailH') {
			setNewPostEmail(e.target.value);
		}
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		const docRef = addDoc(postsColRef, {
			email: newPostEmail,
			name: newPostName,
			content: newPostContent,
		});
		setNewPostName('');
		setNewPostEmail('');
		setNewPostContent('');
	};
    return(
        <>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path fill='#f05454' d='M0,32L1440,256L1440,320L0,320Z'></path>
			</svg>
			<div className='sideSite'>
				<h1>Contact info</h1>
				<div className='imgContainer margins'>
					<img
						className='veteran64'
						src={require('../../static/veteran64.png')}
						alt='couldn t load img'
					/>
				</div>
				<form className='sideContainer margins' onSubmit={handleSubmit}>
					<p className='margins'>
						To contact us submit form and we will respond as fast as possible
					</p>
					<input
						className='margins'
						type='email'
						onChange={handleInputChange}
						name='emailH'
						value={newPostEmail}
						placeholder='enter e-mail'
						required
					/>
					<input
						className='margins'
						type='text'
						onChange={handleInputChange}
						name='textH'
						value={newPostName}
						placeholder='enter name'
						required
					/>
					<textarea
						className='margins'
						onChange={handleInputChange}
						name='textareaH'
						value={newPostContent}
						cols={30}
						rows={10}
						placeholder='enter text to send'
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
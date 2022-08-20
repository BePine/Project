import { getArticles } from '../../lib/blog';
import { useState } from 'react';
import { json } from 'stream/consumers';
import Newsletter from './Newsletter';
import { useArticle } from '../../App';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
const Main = (props: any) => {
	const { article } = useArticle();
	return (
		<>
			<svg
				className='wave'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'
			>
				<path
					fill='#151515'
					d='M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,192C840,213,960,203,1080,170.7C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
				></path>
			</svg>
			<div className='main'>
				<div className='imgContainer margins'>
					<img
						className='veteran64'
						src={require('../../static/veteran64.png')}
						alt='couldn t load img'
					/>
				</div>
				<h2 className='artMessage'>Our articles:</h2>
				<div className='articles'>
					{article?.map((element: any) => (
						<Link
							className='elementsLink'
							to={'recArticles/' + element.id}
							state={element}
						>
							<div className='elements'>
								<div className='elementTitle'>
									<h3>{element.title}</h3>
								</div>
								<div className='elementContent'>
									<p>{element.content}</p>
								</div>
								<div className='elementAuthor'>
									<h5>author: {element.author}</h5>
								</div>
							</div>
						</Link>
					))}
				</div>
				<Newsletter />
			</div>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path fill='#121212' d='M0,224L1440,96L1440,0L0,0Z'></path>
			</svg>
		</>
	);
};

export default Main;

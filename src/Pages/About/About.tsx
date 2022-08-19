const About = () => {
	return (
		<>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#f05454'
					fill-opacity='1'
					d='M0,32L1440,256L1440,320L0,320Z'
				></path>
			</svg>
			<div className='aboutSite'>
                <h1>About us</h1>
                <div className='imgContainer'>
                    <img
                        className='veteran64'
                        src={require('../../static/veteran64.png')}
                        alt='couldn t load img'
                    />
                </div>
				<div className='aboutContainer'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

			</div>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path fill='#f05454' d='M0,224L1440,96L1440,0L0,0Z'></path>
			</svg>
		</>
	);
};
export default About;

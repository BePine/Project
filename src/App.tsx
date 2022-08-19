import React, { Component, useEffect, useState } from 'react';
import './Assets/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import JumpArrow from './Components/JumpArrow';
import { ParallaxProvider } from 'react-scroll-parallax';
import { getArticles } from './lib/blog';
import ReactDOM from 'react-dom/client';
import { Outlet, useOutletContext, useLocation } from 'react-router-dom';
import Cookies from './Components/Cookies';
function App() {
	const [article, setArticle] = useState<any>(null);
	useEffect(() => {
		getArticles().then((data) => {
			setArticle(data);
		});

		// setArticle(getArticles())
	}, []);
	const location = useLocation()
	console.log(location.pathname)
	return (
		<ParallaxProvider>			
			<div className='App'>
				<Header />
				<Cookies/>	
				<Outlet context={{article}}/>
				<JumpArrow/>
				<Footer />
			</div>
		</ParallaxProvider>
	);
}
export function useArticle() {
	return useOutletContext<any>();
  }
export default App;

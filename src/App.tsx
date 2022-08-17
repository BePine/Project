import React, { Component, useEffect, useState } from 'react';
import './Assets/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Banner from './Pages/Home/Banner';
import { ParallaxProvider } from 'react-scroll-parallax';
import { getArticles } from './lib/blog';
import ReactDOM from 'react-dom/client';
import { Outlet, useOutletContext, useLocation } from 'react-router-dom';
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
				
				<Outlet context={{article}}/>
				<Footer />
			</div>
		</ParallaxProvider>
	);
}
export function useArticle() {
	return useOutletContext<any>();
  }
export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './Pages/Error404';
import Main from './Pages/Home/Main';
import Banner from './Pages/Home/Banner';
import Forum from './Pages/Forum/Forum';
import Post from './Pages/Forum/Post';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
				<Routes>
          <Route path='/' element={<App/>}>
            <Route path='/' element={<><Banner /><Main /></>}></Route>
            <Route path='forum' element={<Forum/>}></Route>
            <Route path='forum/posts/*' element={<Post/>}></Route>
            <Route path='contact' element={<p>contact</p>}></Route>
            <Route path='about' element={<p>about</p>}></Route>
            <Route path='*' element={<Error404/>}></Route>
          </Route>
				</Routes>
			</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

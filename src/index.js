import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import NotFound from './components/static/NotFound/NotFound';
import Shop from './components/Shop/Products';
import Friends from './components/static/Friends/Friends';
import Greeting from './components/static/Greeting/Greeting';
import AboutUs from './components/static/AboutUs/AboutUs';
import Contacts from './components/static/Contacts/Contacts';
import Orders from './components/Shop/Orders/Orders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
		errorElement: <NotFound/>,
		children:[{
			path: "/",
			element: <Greeting/>
		}, {
			path:"shop",
			element: <Shop/>
		}, {
			path: "orders",
			element: <Orders/>,
		}, {
			path:"friends",
			element: <Friends/>
		}, {
			path:"about-us",
			element: <AboutUs/>
		}, {
			path:"contacts",
			element: <Contacts/>
		}]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Container className='bg-white'>
			<RouterProvider router={router} />
		</Container>
  </React.StrictMode>
);

reportWebVitals();

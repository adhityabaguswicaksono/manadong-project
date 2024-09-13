import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/home.jsx';
import OrderNow from './page/OrderNow.jsx';
import Outlet from './page/Outlet.jsx';
import AboutUs from './page/AboutUs.jsx';
import Eatery from './page/Eatery.jsx';
import News from './page/News.jsx';

const colors = {
	'manadong-blue': {
		50: '#e6edf3',
		100: '#b0c6da',
		200: '#8aaac8',
		300: '#5483af',
		400: '#336b9f',
		500: '#004687',
		600: '#00407b',
		700: '#003260',
		800: '#00274a',
		900: '#001d39',
	},
	'manadong-red': {
		50: '#fbeae9',
		100: '#f3bebb',
		200: '#ed9e9a',
		300: '#e4726c',
		400: '#df574f',
		500: '#d72d23',
		600: '#c42920',
		700: '#992019',
		800: '#761913',
		900: '#5a130f',
	},
};

const theme = extendTheme({
	colors,
	fonts: {
		heading: 'Inter',
		body: 'Inter',
	},
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/order-now',
		element: <OrderNow />,
	},
	{
		path: '/order-now/:id',
		element: <Outlet />,
	},
	{
		path: '/about-us',
		element: <AboutUs />,
	},
	{
		path: '/eatery',
		element: <Eatery />,
	},
	{
		path: '/news',
		element: <News />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	</StrictMode>
);

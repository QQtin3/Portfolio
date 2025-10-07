import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageNotFound from "./views/404.tsx";

createRoot(document.getElementById('app')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PageNotFound/>}/>
				<Route path="/about" element={<PageNotFound/>}/>
				<Route path="/contact" element={<PageNotFound/>}/>
				{/* Catch-all route for 404 page */}
				<Route path="*" element={<PageNotFound/>}/>
			</Routes>
		</BrowserRouter>
	</StrictMode>
)

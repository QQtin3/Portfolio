import {type JSX, StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageNotFound from "./views/404.tsx";
import Index from "./views";
import ProjetStreamAlerts from "./views/ProjectStreamAlerts.tsx";

const app : JSX.Element = (
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/project/*" element={<ProjetStreamAlerts />} />
				<Route path="/about" element={<PageNotFound />} />
				<Route path="/contact" element={<PageNotFound />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);

createRoot(document.getElementById('app')!).render(app);

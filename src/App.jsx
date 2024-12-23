import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './app.scss';

import Home from './Home';
import AiMlPage from './projects/pages/AiMlPage';
import AppDevPage from './projects/pages/AppDevPage';
import WebDevPage from './projects/pages/WebDevPage';
// import Projects from "./projects/Projects";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/app" element={<AppDevPage />} />
				<Route path="/web" element={<WebDevPage />} />
				<Route path="/ai" element={<AiMlPage />} />
			</Routes>
		</Router>
	);
};

export default App;

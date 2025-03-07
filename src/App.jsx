import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './app.scss';

import AnimatedCursor from 'react-animated-cursor';
import Home from './Home';
import AiMlPage from './projects/pages/AiMlPage';
import AppDevPage from './projects/pages/AppDevPage';
import WebDevPage from './projects/pages/WebDevPage';
import RecentProjects from './recent-projects/RecentProjects';
// import Projects from "./projects/Projects";

const App = () => {
	return (
		<>
			<AnimatedCursor
				innerSize={8}
				outerSize={8}
				color="193, 11, 101"
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={5}
				clickables={[
					'a',
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					'label[for]',
					'select',
					'textarea',
					'button',
					'.link',
				]}
			/>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/app" element={<AppDevPage />} />
					<Route path="/web" element={<WebDevPage />} />
					<Route path="/ai" element={<AiMlPage />} />
					<Route path="/r" element={<RecentProjects />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;

// import { motion } from 'framer-motion';
// import AiMlDev from '../components/rive/projects/AiMlDev';
// import AppDev from '../components/rive/projects/AppDev';
// import DesignDev from '../components/rive/projects/DesignDev';
// import Frog from '../components/rive/projects/Frog';
// import WebDev from '../components/rive/projects/WebDev';
// import './projectsTiles.scss';
// const Projects = () => {
// 	return (
// 		<div>
// 			<Frog />
// 			<div className="projects">
// 				<h1>
// 					<span>P</span>
// 					<span>r</span>
// 					<span>o</span>
// 					<span>j</span>
// 					<span>e</span>
// 					<span>c</span>
// 					<span>t</span>
// 					<span>s</span>
// 				</h1>

// 				<div className="folders">
// 					<div onClick={() => setTimeout(() => window.open('/app'), 1000)}>
// 						<AppDev />
// 					</div>
// 					<div onClick={() => setTimeout(() => window.open('/web'), 1000)}>
// 						<WebDev />
// 					</div>
// 					<div>
// 						<DesignDev />
// 					</div>
// 					<div onClick={() => setTimeout(() => window.open('/ai'), 1000)}>
// 						<AiMlDev />
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Projects;
import { motion } from 'framer-motion';
import { Links } from 'react-router-dom';
import AiMlDev from '../components/rive/projects/AiMlDev';
import AppDev from '../components/rive/projects/AppDev';
import DesignDev from '../components/rive/projects/DesignDev';
import Frog from '../components/rive/projects/Frog';
import WebDev from '../components/rive/projects/WebDev';
import Sidebar from '../components/sidebar/Sidebar';
import './projectsTiles.scss';

const Projects = () => {
	return (
		<div className="projects-container">
			{/* Background */}
			<div className="background">
				<Frog />
			</div>

			{/* Foreground */}
			<div className="foreground">
				{/* <Sidebar /> */}
				<div className="projects">
					<h1>
						<span>P</span>
						<span>r</span>
						<span>o</span>
						<span>j</span>
						<span>e</span>
						<span>c</span>
						<span>t</span>
						<span>s</span>
					</h1>

					<div className="folders">
						<div onClick={() => setTimeout(() => window.open('/app'), 1000)}>
							<AppDev />
						</div>
						<div onClick={() => setTimeout(() => window.open('/web'), 1000)}>
							<WebDev />
						</div>
						<div>
							<DesignDev />
						</div>
						<div onClick={() => setTimeout(() => window.open('/ai'), 1000)}>
							<AiMlDev />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;

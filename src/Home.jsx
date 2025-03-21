// import { useEffect, useState } from 'react';
// import { About } from './about/About';
// import './app.scss';
// import { CareerPage } from './career/CareerPage';
// import Details from './components/hero/Details';
// import Navbar from './components/navbar/navbar';
// import Contact from './contact/Contact';
// import Footer from './footer/Footer';
// import Projects from './projects/Projects';
// import RecentProjects from './recent-projects/RecentProjects';
// import ResponselessScreen from './ResponselessScreen';
// import Skills from './skills/Skills';

// const Home = () => {
// 	const [isLaptop, setIsLaptop] = useState(true);

// 	useEffect(() => {
// 		const handleResize = () => {
// 			setIsLaptop(window.innerWidth >= 1080); // Adjust breakpoint as needed
// 		};

// 		handleResize(); // Check on initial load
// 		window.addEventListener('resize', handleResize);

// 		return () => window.removeEventListener('resize', handleResize);
// 	}, []);

// 	if (!isLaptop) {
// 		return <ResponselessScreen />;
// 	}

// 	return (
// 		<div>
// 			<section id="Home" style={{ height: '100vh' }}>
// 				<Navbar />
// 				<div id="profile">
// 					<Details />
// 				</div>
// 			</section>
// 			<section id="About" style={{ height: '100vh' }}>
// 				<About />
// 			</section>
// 			{/* <section id="Parallax" style={{ height: '100vh' }}>
// 				<div className="bgimage">
// 					<Parallax />
// 				</div>
// 			</section> */}
// 			<section id="Career" style={{}}>
// 				<CareerPage />
// 			</section>
// 			<section id="recents" style={{ marginBottom: '100px' }}>
// 				<RecentProjects />
// 			</section>
// 			<section id="Projects" style={{}}>
// 				<Projects />
// 			</section>
// 			<section id="Footer" style={{}}>
// 				<Skills />
// 			</section>
// 			<section id="Contact" style={{ height: '100vh' }}>
// 				<Contact />
// 				<Footer />
// 			</section>
// 		</div>
// 	);
// };

// export default Home;

import { About } from './about/About';
import './app.scss';
import { CareerPage } from './career/CareerPage';
import Details from './components/hero/Details';
import Navbar from './components/navbar/navbar';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import MobileView from './MobileView';
import Projects from './projects/Projects';
import RecentProjects from './recent-projects/RecentProjects';
import ResponselessScreen from './ResponselessScreen';
import Skills from './skills/Skills';

const Home = () => {
	return (
		<>
			{/* Mobile version - shown/hidden via CSS */}
			<div className="mobile-only">
				{/* <ResponselessScreen /> */}
				<MobileView />
			</div>

			{/* Desktop version - shown/hidden via CSS */}
			<div className="desktop-only">
				<section id="Home" style={{ height: '100vh' }}>
					<Navbar />
					<div id="profile">
						<Details />
					</div>
				</section>
				<section id="About" style={{ height: '100vh' }}>
					<About />
				</section>
				<section id="Career" style={{}}>
					<CareerPage />
				</section>
				<section id="recents" style={{ marginBottom: '100px' }}>
					<RecentProjects />
				</section>
				<section id="Projects" style={{}}>
					<Projects />
				</section>
				<section id="Footer" style={{}}>
					<Skills />
				</section>
				<section id="Contact" style={{ height: '100vh' }}>
					<Contact />
					<Footer />
				</section>
			</div>
		</>
	);
};

export default Home;

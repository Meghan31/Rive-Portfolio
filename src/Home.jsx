import { About } from './about/About';
import './app.scss';
import { CareerPage } from './career/CareerPage';
import Details from './components/hero/Details';
import Navbar from './components/navbar/navbar';
import HC from './components/rive/parallax/HC';
import Contact from './contact/Contact';
import Parallax from './parallax/Parallax';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
// import Projects from "./projects/Projects";

const Home = () => {
	return (
		<div>
			<section id="Home" style={{ height: '100vh' }}>
				<Navbar />
				<div id="profile">
					<Details />
				</div>
			</section>
			<section id="About" style={{ height: '100vh' }}>
				<About />
			</section>
			<section id="Parallax" style={{ height: '100vh' }}>
				<div className="bgimage">
					<Parallax />
				</div>
			</section>
			<section id="Career" style={{}}>
				<CareerPage />
			</section>
			<section id="Projects" style={{ height: '100vh' }}>
				<Projects />
			</section>
			<section id="Footer" style={{ height: '100vh' }}>
				<Skills />
			</section>
			<section id="Contact" style={{ height: '100vh' }}>
				<Contact />
			</section>
		</div>
	);
};

export default Home;

// // import { useEffect } from 'react';
// // import { About } from './about/About';
// // import './app.scss';
// // import { CareerPage } from './career/CareerPage';
// // import Details from './components/hero/Details';
// // import Navbar from './components/navbar/navbar';
// // import HC from './components/rive/parallax/HC';
// // import Contact from './contact/Contact';
// // import Parallax from './parallax/Parallax';
// // import Projects from './projects/Projects';

// // const Home = () => {
// // 	useEffect(() => {
// // 		const handleScroll = (event) => {
// // 			event.preventDefault();
// // 			const delta = Math.sign(event.deltaY);
// // 			window.scrollBy({
// // 				top: delta * 100, // Adjust speed as needed
// // 				left: 0,
// // 				behavior: 'smooth',
// // 			});
// // 		};

// // 		// Add event listener for wheel
// // 		window.addEventListener('wheel', handleScroll, { passive: false });

// // 		// Cleanup event listener on component unmount
// // 		return () => {
// // 			window.removeEventListener('wheel', handleScroll);
// // 		};
// // 	}, []);

// // 	return (
// // 		<div>
// // 			<section id="Home" style={{ height: '100vh' }}>
// // 				<Navbar />
// // 				<div id="profile">
// // 					<Details />
// // 				</div>
// // 			</section>
// // 			<section id="About" style={{ height: '100vh' }}>
// // 				<About />
// // 			</section>
// // 			<section id="Parallax" style={{ height: '100vh' }}>
// // 				<div className="bgimage">
// // 					<Parallax />
// // 				</div>
// // 			</section>
// // 			<section id="Career" style={{}}>
// // 				<CareerPage />
// // 			</section>
// // 			<section id="Projects" style={{ height: '100vh' }}>
// // 				<Projects />
// // 			</section>
// // 			<section id="Contact" style={{ height: '100vh' }}>
// // 				<Contact />
// // 			</section>
// // 			<section id="Footer" style={{ height: '100vh' }}>
// // 				<Parallax />
// // 			</section>
// // 		</div>
// // 	);
// // };

// // export default Home;

// import { useEffect, useState } from 'react';
// import { About } from './about/About';
// import './app.scss';
// import { CareerPage } from './career/CareerPage';
// import Details from './components/hero/Details';
// import Navbar from './components/navbar/navbar';
// import HC from './components/rive/parallax/HC';
// import Contact from './contact/Contact';
// import Parallax from './parallax/Parallax';
// import Projects from './projects/Projects';

// const Home = () => {
// 	const [disableCustomScroll, setDisableCustomScroll] = useState(false); // State to disable custom scrolling

// 	useEffect(() => {
// 		const handleScroll = (event) => {
// 			if (disableCustomScroll) return; // Skip custom scrolling for Career section

// 			event.preventDefault();
// 			const delta = Math.sign(event.deltaY);
// 			window.scrollBy({
// 				top: delta * 100, // Adjust speed as needed
// 				left: 0,
// 				behavior: 'smooth',
// 			});
// 		};

// 		// Add event listener for wheel
// 		window.addEventListener('wheel', handleScroll, { passive: false });

// 		// Cleanup event listener on component unmount
// 		return () => {
// 			window.removeEventListener('wheel', handleScroll);
// 		};
// 	}, [disableCustomScroll]);

// 	useEffect(() => {
// 		const handleSectionChange = () => {
// 			const careerSection = document.getElementById('Career');
// 			const projectsSection = document.getElementById('Projects');
// 			const careerTop = careerSection?.offsetTop || 0;
// 			const projectsTop = projectsSection?.offsetTop || 0;
// 			const scrollPosition = window.scrollY + window.innerHeight / 2;

// 			// Disable custom scroll in Career section
// 			if (scrollPosition >= careerTop && scrollPosition < projectsTop) {
// 				setDisableCustomScroll(true);
// 			} else {
// 				setDisableCustomScroll(false);
// 			}
// 		};

// 		// Add scroll event listener
// 		window.addEventListener('scroll', handleSectionChange);

// 		// Cleanup event listener
// 		return () => {
// 			window.removeEventListener('scroll', handleSectionChange);
// 		};
// 	}, []);

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
// 			<section id="Parallax" style={{ height: '100vh' }}>
// 				<div className="bgimage">
// 					<Parallax />
// 				</div>
// 			</section>
// 			<section id="Career" style={{}}>
// 				<CareerPage />
// 			</section>
// 			<section id="Projects" style={{ height: '100vh' }}>
// 				<Projects />
// 			</section>
// 			<section id="Contact" style={{ height: '100vh' }}>
// 				<Contact />
// 			</section>
// 			<section id="Footer" style={{ height: '100vh' }}>
// 				<Parallax />
// 			</section>
// 		</div>
// 	);
// };

// export default Home;

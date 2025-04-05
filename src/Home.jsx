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
// import ResponselessScreen from './ResponselessScreen';
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

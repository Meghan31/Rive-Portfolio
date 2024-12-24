import { About } from './about/About';
import './app.scss';
import { CareerPage } from './career/CareerPage';
import Details from './components/hero/Details';
import Navbar from './components/navbar/navbar';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Parallax from './parallax/Parallax';
import Projects from './projects/Projects';
import Skills from './skills/Skills';

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
			<section id="Footer" style={{}}>
				<Skills />
			</section>
			<section id="Contact" style={{ height: '100vh' }}>
				<Contact />
				<Footer />
			</section>
		</div>
	);
};

export default Home;

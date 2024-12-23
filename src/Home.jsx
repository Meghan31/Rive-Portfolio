import { About } from './about/About';
import './app.scss';
import { CareerPage } from './career/CareerPage';
import Details from './components/hero/Details';
import Navbar from './components/navbar/navbar';
import Contact from './contact/Contact';
import Projects from './projects/Projects';
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
				<div className="bgimage"></div>
			</section>
			<section id="Career" style={{}}>
				<CareerPage />
			</section>
			<section id="Projects" style={{ height: '100vh' }}>
				<Projects />
			</section>
			<section id="Contact" style={{ height: '100vh' }}>
				<Contact />
			</section>
		</div>
	);
};

export default Home;

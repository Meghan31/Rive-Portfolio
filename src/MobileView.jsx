import ContactMob from './mobile/contact/ContactMob';
import FooterMob from './mobile/footer/FooterMob';
import Hero from './mobile/hero/Hero';
import Projects from './mobile/projects/Projects';
import SkillsMob from './mobile/skills/SkillsMob';
import './MobileView.css';

function MobileView() {
	return (
		<>
			<Hero />
			<section className="gap" style={{ height: '100px' }}></section>
			<h2
				style={{
					fontFamily: "'Bytesized', monospace",
					fontSize: '2rem',
					letterSpacing: '0.1rem',
					textTransform: 'uppercase',
					textAlign: 'start',
					margin: '2rem 1rem',
				}}
			>
				Recent Projects
			</h2>
			<Projects />
			<section className="gap" style={{ height: '100px' }}></section>
			<h2
				style={{
					fontFamily: "'Bytesized', monospace",
					fontSize: '2rem',
					letterSpacing: '0.1rem',
					textTransform: 'uppercase',
					textAlign: 'start',
					margin: '0 1rem',
				}}
			>
				Skills
			</h2>
			<SkillsMob />
			<section className="gap" style={{ height: '100px' }}></section>
			<ContactMob />
			<section className="gap" style={{ height: '100px' }}></section>
			<FooterMob />
		</>
	);
}

export default MobileView;

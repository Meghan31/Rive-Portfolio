import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';

const Navbar = () => {
	const handleScroll = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<div className="navbar">
			{/* sidebar */}
			<Sidebar />
			<div className="wrapper">
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1, x: 10 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{/* MEGHASRIVARDHAN . P */}
				</motion.span>
				<div className="header">
					<motion.a
						className="header1"
						// href="#Home"
						onClick={() => handleScroll('Home')}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.2, delay: 0.2 }}
					>
						Home
					</motion.a>
					<motion.a
						className="header2"
						// href="#About"
						onClick={() => handleScroll('About')}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2, delay: 0.4 }}
					>
						About
					</motion.a>
					<motion.a
						className="header3"
						// href="#Career"
						onClick={() => handleScroll('Career')}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2, delay: 0.6 }}
					>
						Experience
					</motion.a>
					<motion.a
						className="header4"
						// href="#Projects"
						onClick={() => handleScroll('Projects')}
						initial={{ opacity: 0, scale: 1 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 2, delay: 0.8 }}
					>
						Projects
					</motion.a>
					<motion.a
						className="header5"
						// href="#Contact"
						onClick={() => handleScroll('Contact')}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2, delay: 1 }}
					>
						Contact
					</motion.a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

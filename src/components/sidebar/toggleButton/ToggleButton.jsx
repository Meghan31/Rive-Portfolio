import { motion } from 'framer-motion';
import HangerMan from '../../rive/hangerMan/HangerMan';
import './toggleButton.scss';

const ToggleButton = ({ setOpen }) => {
	return (
		<button onClick={(e) => setOpen((prev) => !prev)}>
			<svg width="23" height="50" viewBox="0 0 23 23">
				<motion.path
					strokeWidth="3"
					stroke="black"
					strokeLinecap="round"
					variants={{
						closed: { d: 'M 2 2.7 L 20 2.7' },
						open: { d: 'M 3 16.5 L 17 2.5' },
					}}
				/>
				<motion.path
					strokeWidth="3"
					stroke="black"
					strokeLinecap="round"
					d="M 2 9.523 L 20 9.523 "
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
				/>
				<motion.path
					strokeWidth="3"
					stroke="black"
					strokeLinecap="round"
					variants={{
						closed: { d: 'M 2 16.646 L 20 16.646' },
						open: { d: 'M 3 2.5 L 17 16.346' },
					}}
				/>
			</svg>
			<div className="hanger">
				<HangerMan />
			</div>
		</button>
	);
};

export default ToggleButton;

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Links from './links/Links';
import LockedLinks from './links/LockedLinks';
import './sidebar.scss';
import ToggleButton from './toggleButton/ToggleButton';

const variants = {
	open: {
		clipPath: 'circle(1200px at 50px 50px)',
		transition: {
			type: 'spring',
			stiffness: 20,
			// damping: 10,
		},
	},
	closed: {
		clipPath: 'circle(30px at 50px 50px)',
		transition: {
			type: 'spring',
			stiffness: 40,
			// damping: 10,
		},
	},
};

const Sidebar = () => {
	const [open, setOpen] = useState(false);

	return (
		<motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
			<motion.div className="bg" variants={variants}>
				<Links />
				{/* <LockedLinks /> */}
			</motion.div>
			<ToggleButton setOpen={setOpen} />
		</motion.div>
	);
};

export default Sidebar;

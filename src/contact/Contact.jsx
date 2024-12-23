import { motion } from 'framer-motion';
import ContactButton from '../components/rive/contact/ContactButton';
import './Contact.scss';

const variants = {
	initial: {
		y: 500,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
			// delay: 0.5
		},
	},
};

const Contact = () => {
	return (
		<motion.div
			className="contact"
			variants={variants}
			initial="initial"
			whileInView="animate"
		>
			<motion.div className="textContainer" variants={variants}>
				<motion.h1>Contact Me :!</motion.h1>
				<motion.div className="item" variants={variants}>
					<h2>Mail</h2>
					<span>meghasrivardhanp@gmail.com</span>
				</motion.div>
				<motion.div className="item" variants={variants}>
					<h2>Address</h2>
					<span>695 Manhattan 80303 Boulder CO</span>
				</motion.div>
				<motion.div className="item" variants={variants}>
					<h2>Phone</h2>
					<span>+1 9706940036</span>
				</motion.div>
			</motion.div>
			<div className="formContainer">
				<motion.form
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1 }}
				>
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					<textarea rows={8} placeholder="Message"></textarea>
					<ContactButton />
				</motion.form>
			</div>
		</motion.div>
	);
};

export default Contact;

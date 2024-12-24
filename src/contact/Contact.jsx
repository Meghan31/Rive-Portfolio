import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
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
		},
	},
};

const Contact = () => {
	const formRef = useRef();
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const [popupMessage, setPopupMessage] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();

		const formData = new FormData(formRef.current);
		if (
			!formData.get('name') ||
			!formData.get('email') ||
			!formData.get('message')
		) {
			setPopupMessage('Please fill in all the fields.');
			setShowPopup(true);
			setTimeout(() => setShowPopup(false), 3000);
			return;
		}

		emailjs
			.sendForm(
				'service_yzzvxt8',
				'template_afzlwkl',
				formRef.current,
				'_nz2V_63IJghT6BSH'
			)
			.then(
				() => {
					setPopupMessage('Message sent successfully!');
					setSuccess(true);
					setShowPopup(true);
					setTimeout(() => setShowPopup(false), 3000);
				},
				(error) => {
					setPopupMessage('Something went wrong...');
					setError(true);
					setShowPopup(true);
					setTimeout(() => setShowPopup(false), 3000);
				}
			);
	};

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
					ref={formRef}
					onSubmit={sendEmail}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1 }}
				>
					<input type="text" placeholder="Name" name="name" />
					<input type="email" placeholder="Email" name="email" />
					<textarea rows={8} placeholder="Message" name="message"></textarea>
					<div type="submit" onClick={sendEmail}>
						<ContactButton />
					</div>
				</motion.form>
			</div>
			{showPopup && (
				<div className={`popupMessage ${success ? 'messageSent' : ''}`}>
					{popupMessage}
				</div>
			)}
		</motion.div>
	);
};

export default Contact;

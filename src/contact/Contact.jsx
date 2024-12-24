// import emailjs from '@emailjs/browser';
// import { motion } from 'framer-motion';
// import { useRef, useState } from 'react';
// import ContactButton from '../components/rive/contact/ContactButton';
// import './Contact.scss';

// const variants = {
// 	initial: {
// 		y: 500,
// 		opacity: 0,
// 	},
// 	animate: {
// 		y: 0,
// 		opacity: 1,
// 		transition: {
// 			duration: 0.5,
// 			staggerChildren: 0.1,
// 		},
// 	},
// };

// const Contact = () => {
// 	const formRef = useRef();
// 	const [formData, setFormData] = useState({
// 		name: '',
// 		email: '',
// 		message: '',
// 	});
// 	const [error, setError] = useState(false);
// 	const [success, setSuccess] = useState(false);
// 	const [popupVisible, setPopupVisible] = useState(false);

// 	const handleInputChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData({ ...formData, [name]: value });
// 	};

// 	const sendEmail = (e) => {
// 		e.preventDefault();

// 		const { name, email, message } = formData;
// 		if (!name || !email || !message) {
// 			setPopupVisible(true);
// 			setTimeout(() => setPopupVisible(false), 3000);
// 			return;
// 		}

// 		emailjs
// 			.sendForm('service_yzzvxt8', 'template_afzlwkl', formRef.current, {
// 				publicKey: '_nz2V_63IJghT6BSH',
// 			})
// 			.then(
// 				() => {
// 					console.log('SUCCESS!');
// 					setSuccess(true);
// 				},
// 				(error) => {
// 					setError(true);
// 					console.log('FAILED...', error.text);
// 				}
// 			);
// 	};

// 	return (
// 		<motion.div
// 			className="contact"
// 			variants={variants}
// 			initial="initial"
// 			whileInView="animate"
// 		>
// 			<motion.div className="textContainer" variants={variants}>
// 				<motion.h1>Contact Me :!</motion.h1>
// 				<motion.div className="item" variants={variants}>
// 					<h2>Mail</h2>
// 					<span>meghasrivardhanp@gmail.com</span>
// 				</motion.div>
// 				<motion.div className="item" variants={variants}>
// 					<h2>Address</h2>
// 					<span>695 Manhattan 80303 Boulder CO</span>
// 				</motion.div>
// 				<motion.div className="item" variants={variants}>
// 					<h2>Phone</h2>
// 					<span>+1 9706940036</span>
// 				</motion.div>
// 			</motion.div>
// 			<div className="formContainer">
// 				<motion.form
// 					ref={formRef}
// 					onSubmit={sendEmail}
// 					initial={{ opacity: 0 }}
// 					whileInView={{ opacity: 1 }}
// 					transition={{ delay: 1, duration: 1 }}
// 				>
// 					<input
// 						type="text"
// 						placeholder="Name"
// 						name="name"
// 						value={formData.name}
// 						onChange={handleInputChange}
// 					/>
// 					<input
// 						type="email"
// 						placeholder="Email"
// 						name="email"
// 						value={formData.email}
// 						onChange={handleInputChange}
// 					/>
// 					<textarea
// 						rows={8}
// 						placeholder="Message"
// 						name="message"
// 						value={formData.message}
// 						onChange={handleInputChange}
// 					></textarea>
// 					<div type="submit" onClick={sendEmail}>
// 						<ContactButton />
// 					</div>
// 					{error && (
// 						<motion.span
// 							initial={{ opacity: 1 }}
// 							animate={{ opacity: 0 }}
// 							transition={{ delay: 3, duration: 1 }}
// 						>
// 							Something went wrong...
// 						</motion.span>
// 					)}
// 					{success && (
// 						<motion.span
// 							initial={{ opacity: 1 }}
// 							animate={{ opacity: 0 }}
// 							transition={{ delay: 3, duration: 1 }}
// 						>
// 							Thanks for your message!
// 						</motion.span>
// 					)}
// 				</motion.form>
// 			</div>
// 			{popupVisible && (
// 				<motion.div
// 					className="popupMessage"
// 					initial={{ opacity: 0, y: -50 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					exit={{ opacity: 0, y: -50 }}
// 					transition={{ duration: 0.5 }}
// 				>
// 					Please fill out all the fields before submitting!
// 				</motion.div>
// 			)}
// 		</motion.div>
// 	);
// };

// export default Contact;

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

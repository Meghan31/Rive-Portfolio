import emailjs from '@emailjs/browser';
// import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import './ContactMob.scss';

// const variants = {
// 	initial: {
// 		y: 100,
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

// const itemVariants = {
// 	initial: {
// 		opacity: 0,
// 		y: 20,
// 	},
// 	animate: {
// 		opacity: 1,
// 		y: 0,
// 		transition: {
// 			duration: 0.4,
// 		},
// 	},
// };

const ContactMob = () => {
	const formRef = useRef();
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const [popupMessage, setPopupMessage] = useState('');
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const sendEmail = (e) => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.message) {
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
					setError(false);
					setShowPopup(true);
					setFormData({ name: '', email: '', message: '' });
					setTimeout(() => setShowPopup(false), 3000);
				},
				() => {
					setPopupMessage('Something went wrong...');
					setError(true);
					setSuccess(false);
					setShowPopup(true);
					setTimeout(() => setShowPopup(false), 3000);
				}
			);
	};

	return (
		<div className="contact-mob-wrapper">
			<div
				className="contact-mob"
				// // // variants={variants}
				// initial="initial"
				// whileInView="animate"
			>
				<div
					className="contact-header"
					// // // variants={variants}
				>
					<h1>Let&apos;s Connect</h1>
					<div
						className="header-underline"
						// initial={{ width: 0 }}
						// animate={{ width: '60px' }}
						// transition={{ delay: 0.5, duration: 0.8 }}
					/>
					<p>
						I&apos;m always open to discussing new projects, opportunities, or
						just having a chat!
					</p>
				</div>

				<div className="contact-content">
					<div
						className="contact-info"
						// // // variants={variants}
					>
						<div
							className="info-item"
							// variants={itemVariants}
						>
							<div className="info-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									onClick={() => {
										window.location.href = 'mailto:meghasrivardhanp@gmail.com';
									}}
								>
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
									<polyline points="22,6 12,13 2,6"></polyline>
								</svg>
							</div>
							<div className="info-content">
								<h2>Mail</h2>
								<span
									onClick={() => {
										window.location.href = 'mailto:meghasrivardhanp@gmail.com';
									}}
									style={{
										textDecoration: 'underline',
									}}
								>
									meghasrivardhanp@gmail.com
								</span>
							</div>
						</div>
						<div
							className="info-item"
							// variants={itemVariants}
						>
							<div className="info-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
									<circle cx="12" cy="10" r="3"></circle>
								</svg>
							</div>
							<div className="info-content">
								<h2>Address</h2>
								<span>695 Manhattan 80303 Boulder CO</span>
							</div>
						</div>
						<div
							className="info-item"
							// variants={itemVariants}
						>
							<div className="info-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
								</svg>
							</div>
							<div className="info-content">
								<h2>Phone</h2>
								<span>+1 970-694-0036</span>
							</div>
						</div>
					</div>

					<div
						className="contact-form-container"
						// initial={{ opacity: 0, y: 50 }}
						// whileInView={{ opacity: 1, y: 0 }}
						// transition={{ delay: 0.3, duration: 0.8 }}
					>
						<div className="form-header">
							<h2>Send a Message</h2>
						</div>
						<div className="contact-form">
							<form ref={formRef} onSubmit={sendEmail}>
								<div className="input-container">
									<input
										type="text"
										placeholder="Name"
										name="name"
										value={formData.name}
										onChange={handleChange}
									/>
									<div className="input-underline"></div>
								</div>

								<div className="input-container">
									<input
										type="email"
										placeholder="Email"
										name="email"
										value={formData.email}
										onChange={handleChange}
									/>
									<div className="input-underline"></div>
								</div>

								<div className="input-container">
									<textarea
										rows={4}
										placeholder="Message"
										name="message"
										value={formData.message}
										onChange={handleChange}
									></textarea>
									<div className="input-underline"></div>
								</div>

								<div
									className="button-container"
									// whileHover={{ scale: 1.05 }}
									// whileTap={{ scale: 0.95 }}
								>
									<button type="submit" onClick={sendEmail}>
										<span style={{ fontFamily: 'Bytesized' }}>
											Send Message
										</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<line x1="22" y1="2" x2="11" y2="13"></line>
											<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
										</svg>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>

				{showPopup && (
					<div
						className={`popup-message ${
							success ? 'success' : error ? 'error' : ''
						}`}
						// initial={{ opacity: 0, y: 20 }}
						// animate={{ opacity: 1, y: 0 }}
						// exit={{ opacity: 0, y: 20 }}
						style={{ fontFamily: 'Bytesized' }}
					>
						<div className="popup-icon">
							{success ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
									<polyline points="22 4 12 14.01 9 11.01"></polyline>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<circle cx="12" cy="12" r="10"></circle>
									<line x1="12" y1="8" x2="12" y2="12"></line>
									<line x1="12" y1="16" x2="12.01" y2="16"></line>
								</svg>
							)}
						</div>
						<div className="popup-text" style={{ fontFamily: 'Bytesized' }}>
							{popupMessage}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ContactMob;

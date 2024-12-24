import { motion } from 'framer-motion';
import React from 'react';
import './projectsPage.scss';

const AiMlPage = () => {
	const projects = [
		{
			title: 'AI-Powered Music Recommendation System',
			description:
				'A personalized music recommendation system using collaborative filtering and machine learning.',
			image: '/assets/images/ai/music.jpg',
			link: 'https://github.com/Meghan31/Music-Recommendation-System.git',
		},
		{
			title: 'Breast Cancer Detection System',
			description:
				'An AI-driven model for early detection of breast cancer using image analysis and classification techniques.',
			image: '/assets/images/ai/cancer.jpg',
			link: 'https://github.com/Meghan31/Breast-Cancer-Prediction.git',
		},
		{
			title: 'Smart Hotel Management System',
			description:
				'An AI-enhanced hotel management solution for optimizing room allocation and customer service.',
			image: '/assets/images/ai/hotel.jpg',
			link: 'https://github.com/Meghan31/Hotel-Management.git',
		},
		{
			title: 'Sign Language Translator',
			description:
				'A machine learning-based application that translates sign language gestures into text or speech in real-time.',
			image: '/assets/images/ai/sign.jpg',
			link: '/projects/sign-language-translator',
		},
		{
			title: 'Drowsiness Detection System',
			description:
				'A real-time system to detect driver drowsiness and prevent road accidents using computer vision.',
			image: '/assets/images/ai/drowsiness.jpg',
			link: '/projects/drowsiness-detection',
		},
	];

	return (
		<div className="projects-page">
			<h1 className="projects-title">AI - ML&nbsp;&nbsp;&nbsp;Projects</h1>
			<div className="projects-grid">
				{projects.map((project, index) => (
					<motion.div
						className="project-card"
						key={index}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<img
							src={project.image}
							alt={project.title}
							className="project-image"
						/>
						<div className="project-details">
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<a href={project.link} className="project-link-3">
								Learn More
							</a>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default AiMlPage;

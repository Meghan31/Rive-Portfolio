import { motion } from 'framer-motion';
import React from 'react';
import './projectsPage.scss';

const WebDevPage = () => {
	const projects = [
		{
			title: 'Interactive Portfolio with Rive',
			description:
				'A dynamic portfolio built using Rive animations, showcasing skills and projects.',
			image: '/assets/images/web/portfolio.jpg',
			link: '/projects/rive-portfolio',
		},
		{
			title: 'Decentralized Voting System',
			description: 'A secure and scalable voting platform hosted on AWS.',
			image: '/assets/images/web/voting.jpg',
			link: '/projects/voting-system-aws',
		},
		{
			title: 'Redis Cache Server',
			description:
				'A high-performance server setup using Redis for caching data efficiently.',
			image: '/assets/images/web/redis.jpg',
			link: '/projects/redis-cache-server',
		},

		{
			title: 'Real-time Markdown Editor',
			description: 'A collaborative markdown editor with live previews.',
			image: 'public/assets/images/web/editor.jpg',
			link: '/projects/markdown-editor',
		},
		{
			title: 'Chrome Extension',
			description: 'A lightweight Chrome extension build with React',
			image: 'public/assets/images/web/extension.jpg',
			link: '/projects/chrome-extension',
		},
		{
			title: 'Educational Quiz App',
			description:
				'A gamified app for learning and testing knowledge in various subjects.',
			image: '/assets/images/web/quiz.jpg',
			link: '/projects/quiz-app',
		},
	];

	return (
		<div className="projects-page">
			<h1 className="projects-title">
				Web&nbsp;&nbsp;&nbsp;Development&nbsp;&nbsp;&nbsp;Projects
			</h1>
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
							<a href={project.link} className="project-link">
								Learn More
							</a>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default WebDevPage;
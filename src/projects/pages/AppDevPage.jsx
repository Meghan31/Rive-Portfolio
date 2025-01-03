import { motion } from 'framer-motion';
import React from 'react';
import './projectsPage.scss';

const AppDevPage = () => {
	const projects = [
		{
			title: 'Crypto App',
			description: 'Track cryptocurrency prices and trends in real-time.',
			image: '/assets/images/app/crypto.jpg',
			link: 'https://github.com/Meghan31/Crypto-App.git',
		},
		{
			title: 'FlutterGPT',
			description:
				'An app infused with ChatGPT model for dynamic interactions.',
			image: '/assets/images/app/gpt.jpg',
			link: 'https://github.com/Meghan31/FlutterGPT.git',
		},
		{
			title: 'Foodie App',
			description: 'Discover and share delicious food recipes.',
			image: '/assets/images/app/food.jpg',
			link: 'https://github.com/Meghan31/Foodie_app.git',
		},
		{
			title: 'Note Store & File Share App',
			description: 'Store notes and files, and share them effortlessly.',
			image: '/assets/images/app/file.jpg',
			link: 'https://github.com/Meghan31/Note-Store-File-Share.git',
		},
		{
			title: 'Personal Expenses App',
			description: 'Track your expenses and manage your budget effectively.',
			image: '/assets/images/app/expense.jpg',
			link: 'https://github.com/Meghan31/personal-expenses-app',
		},
		{
			title: 'Shoppers App',
			description: 'An E-Commerce app for browsing and purchasing products.',
			image: '/assets/images/app/shop.jpg',
			link: 'https://github.com/Meghan31/Shoppers.git',
		},
		{
			title: 'Superman Space Attack Game',
			description: 'A thrilling space attack game featuring Superman.',
			image: '/assets/images/app/superman.jpg',
			link: 'https://github.com/Meghan31/Superman-Space-Attack.git',
		},
		{
			title: 'Taxi Cab App',
			description: 'An app for riders and drivers to connect seamlessly.',
			image: '/assets/images/app/taxi.jpg',
			link: 'https://github.com/Meghan31/Cab-rider-app.git',
		},
		{
			title: 'Telegram Bitcoin Bot',
			description:
				'A bot for tracking Bitcoin trends and notifications on Telegram.',
			image: '/assets/images/app/bitcoin.jpg',
			link: 'https://github.com/Meghan31/Telegram_Bitcoin_Bot_flutter.git',
		},
		{
			title: 'TensorFlow Lite with Flutter',
			description: 'An image recognition app using TensorFlow Lite.',
			image: '/assets/images/app/tensorflow.jpg',
			link: 'https://github.com/Meghan31/TensorFlow-Lite-with-Flutter.git',
		},
		{
			title: 'Vi-Me App',
			description: 'A video meeting app, like Zoom, with modern features.',
			image: '/assets/images/app/vime.jpg',
			link: 'https://github.com/Meghan31/Video-Meet-App.git',
		},
	];

	// Sort the projects alphabetically
	const sortedProjects = projects.sort((a, b) =>
		a.title.localeCompare(b.title)
	);

	return (
		<div className="projects-page">
			<h1 className="projects-title">
				App&nbsp;&nbsp;&nbsp;Development&nbsp;&nbsp;&nbsp;Projects
			</h1>
			<div className="projects-grid">
				{sortedProjects.map((project, index) => (
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
							<a href={project.link} className="project-link-1">
								Learn&nbsp;&nbsp;More
							</a>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default AppDevPage;

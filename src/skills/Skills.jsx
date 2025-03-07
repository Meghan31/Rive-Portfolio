// // import './Skills.scss';

// // const skillsData = [
// // 	{
// // 		category: 'Tools & Libraries',
// // 		skills: [
// // 			{ name: 'AWS RDS', image: '/assets/svg/Skills/tools/rds.svg' },
// // 			{ name: 'AWS S3', image: '/assets/svg/Skills/tools/aws.svg' },
// // 			{ name: 'Docker', image: '/assets/svg/Skills/tools/docker.svg' },
// // 			{
// // 				name: 'Git/GitHub',
// // 				image: '/assets/svg/Skills/tools/github.svg',
// // 			},
// // 			{ name: 'Google Cloud', image: '/assets/svg/Skills/tools/gc.svg' },
// // 			{ name: 'Kubernetes', image: '/assets/svg/Skills/tools/kube.svg' },
// // 			{ name: 'NPM', image: '/assets/svg/Skills/tools/npm.svg' },
// // 			{ name: 'Redis', image: '/assets/svg/Skills/tools/redis.svg' },
// // 			{ name: 'Snowflake', image: '/assets/svg/Skills/tools/sf.svg' },
// // 			{ name: 'TensorFlow', image: '/assets/svg/Skills/tools/tf.svg' },
// // 			{ name: 'Tableau', image: '/assets/svg/Skills/tools/tableau.svg' },
// // 			{ name: 'PowerBI', image: '/assets/svg/Skills/tools/powerbi.svg' },
// // 		],
// // 	},
// // 	{
// // 		category: 'Programming Languages',
// // 		skills: [
// // 			{ name: 'C', image: '/assets/svg/Skills/languages/c.svg' },
// // 			{ name: 'C++', image: '/assets/svg/Skills/languages/cpp.svg' },
// // 			{ name: 'Dart', image: '/assets/svg/Skills/languages/dart.svg' },
// // 			{ name: 'Java', image: '/assets/svg/Skills/languages/java.svg' },
// // 			{
// // 				name: 'JavaScript',
// // 				image: '/assets/svg/Skills/languages/js.svg',
// // 			},
// // 			{
// // 				name: 'Typescript',
// // 				image: '/assets/svg/Skills/languages/ts.svg',
// // 			},
// // 			{ name: 'Python', image: '/assets/svg/Skills/languages/py.svg' },
// // 		],
// // 	},
// // 	{
// // 		category: 'Frameworks',
// // 		skills: [
// // 			{ name: 'Express', image: '/assets/svg/Skills/framework/ex.svg' },
// // 			{ name: 'Firebase', image: '/assets/svg/Skills/framework/fb.svg' },
// // 			{
// // 				name: 'Flutter',
// // 				image: '/assets/svg/Skills/framework/flutter.svg',
// // 			},
// // 			{
// // 				name: 'ReactJS',
// // 				image: '/assets/svg/Skills/framework/react.svg',
// // 			},
// // 			{ name: 'Redux', image: '/assets/svg/Skills/framework/redux.svg' },
// // 			{ name: 'NodeJS', image: '/assets/svg/Skills/framework/node.svg' },
// // 		],
// // 	},
// // 	{
// // 		category: 'Graphic Design',
// // 		skills: [
// // 			{
// // 				name: 'Fresco',
// // 				image: '/assets/svg/Skills/graphic-design/fr.png',
// // 			},
// // 			{
// // 				name: 'Illustrator',
// // 				image: '/assets/svg/Skills/graphic-design/ai.svg',
// // 			},
// // 			{
// // 				name: 'Photoshop',
// // 				image: '/assets/svg/Skills/graphic-design/ps.svg',
// // 			},
// // 			{
// // 				name: 'Procreate',
// // 				image: '/assets/svg/Skills/graphic-design/Pro.png',
// // 			},
// // 			{
// // 				name: 'Rive',
// // 				image: '/assets/svg/Skills/graphic-design/rive.svg',
// // 			},
// // 		],
// // 	},
// // 	{
// // 		category: 'Database',
// // 		skills: [
// // 			{ name: 'Firebase', image: '/assets/svg/Skills/framework/fb.svg' },
// // 			{
// // 				name: 'MongoDB',
// // 				image: '/assets/svg/Skills/database/mongodb.svg',
// // 			},
// // 			{ name: 'MySQL', image: '/assets/svg/Skills/database/mysql.svg' },

// // 			{ name: 'Neo4j', image: '/assets/svg/Skills/database/n4j.svg' },
// // 			{
// // 				name: 'Oracle SQL',
// // 				image: '/assets/svg/Skills/database/oraclesql.svg',
// // 			},
// // 			{
// // 				name: 'PostgreSQL',
// // 				image: '/assets/svg/Skills/database/postgresql.svg',
// // 			},
// // 		],
// // 	},
// // ];

// // const Skills = () => {
// // 	return (
// // 		<div className="skills-container">
// // 			<h1>
// // 				<span>S</span>
// // 				<span>k</span>
// // 				<span>i</span>
// // 				<span>l</span>
// // 				<span>l</span>
// // 				<span>s</span>
// // 			</h1>
// // 			<div className="skills-grid">
// // 				{skillsData.map((skillCategory, index) => (
// // 					<div className="skill-category" key={index}>
// // 						<h2 className="category-title">{skillCategory.category}</h2>
// // 						<ul className="skill-list">
// // 							{skillCategory.skills.map((skill, idx) => (
// // 								<li className="skill-item" key={idx}>
// // 									<img
// // 										src={skill.image}
// // 										alt={skill.name}
// // 										className="skill-icon"
// // 									/>
// // 									<div className="skill-name">{skill.name}</div>
// // 								</li>
// // 							))}
// // 						</ul>
// // 					</div>
// // 				))}
// // 			</div>
// // 		</div>
// // 	);
// // };

// // export default Skills;

// import './Skills.scss';

// const skillsData = [
// 	{
// 		category: 'Tools, Libraries & Productivity',
// 		skills: [
// 			{ name: 'AWS RDS', image: '/assets/svg/Skills/tools/rds.svg' },
// 			{ name: 'AWS S3', image: '/assets/svg/Skills/tools/aws.svg' },
// 			{ name: 'Docker', image: '/assets/svg/Skills/tools/docker.svg' },
// 			{
// 				name: 'Git/GitHub',
// 				image: '/assets/svg/Skills/tools/github.svg',
// 			},
// 			{ name: 'Google Cloud', image: '/assets/svg/Skills/tools/gc.svg' },
// 			{ name: 'Kubernetes', image: '/assets/svg/Skills/tools/kube.svg' },
// 			{ name: 'NPM', image: '/assets/svg/Skills/tools/npm.svg' },
// 			{ name: 'Redis', image: '/assets/svg/Skills/tools/redis.svg' },
// 			{ name: 'Shell/Bash Ubuntu', image: '/assets/svg/Skills/tools/bash.svg' },
// 			{ name: 'Snowflake', image: '/assets/svg/Skills/tools/sf.svg' },
// 			{ name: 'TensorFlow', image: '/assets/svg/Skills/tools/tf.svg' },
// 			{ name: 'Tableau', image: '/assets/svg/Skills/tools/tableau.svg' },
// 			{ name: 'PowerBI', image: '/assets/svg/Skills/tools/powerbi.svg' },
// 			{ name: 'Postman', image: '/assets/svg/Skills/tools/postman.svg' },
// 			{ name: 'Vite', image: '/assets/svg/Skills/tools/vite.svg' },
// 			{ name: 'Jira', image: '/assets/svg/Skills/tools/jira.svg' },
// 			{ name: 'Notion', image: '/assets/svg/Skills/tools/notion.svg' },
// 			{ name: 'Obsidian', image: '/assets/svg/Skills/tools/obsidian.svg' },
// 		],
// 	},
// 	{
// 		category: 'Programming Languages',
// 		skills: [
// 			{ name: 'C', image: '/assets/svg/Skills/languages/c.svg' },
// 			{ name: 'C++', image: '/assets/svg/Skills/languages/cpp.svg' },
// 			{ name: 'Dart', image: '/assets/svg/Skills/languages/dart.svg' },
// 			{ name: 'Go', image: '/assets/svg/Skills/languages/go.svg' },
// 			{ name: 'HTML', image: '/assets/svg/Skills/languages/html.svg' },
// 			{ name: 'Java', image: '/assets/svg/Skills/languages/java.svg' },
// 			{
// 				name: 'JavaScript',
// 				image: '/assets/svg/Skills/languages/js.svg',
// 			},
// 			{
// 				name: 'Typescript',
// 				image: '/assets/svg/Skills/languages/ts.svg',
// 			},
// 			{ name: 'Python', image: '/assets/svg/Skills/languages/py.svg' },
// 			{ name: 'SQL', image: '/assets/svg/Skills/languages/sql.svg' },
// 			{ name: 'NoSQL', image: '/assets/svg/Skills/languages/nosql.svg' },
// 		],
// 	},
// 	{
// 		category: 'Frameworks & Testing',
// 		skills: [
// 			{ name: 'Angular', image: '/assets/svg/Skills/framework/angular.svg' },
// 			{ name: 'CSS', image: '/assets/svg/Skills/framework/css.svg' },
// 			{ name: 'Express', image: '/assets/svg/Skills/framework/ex.svg' },
// 			{ name: 'Firebase', image: '/assets/svg/Skills/framework/fb.svg' },
// 			{
// 				name: 'Flutter',
// 				image: '/assets/svg/Skills/framework/flutter.svg',
// 			},
// 			{
// 				name: 'ReactJS',
// 				image: '/assets/svg/Skills/framework/react.svg',
// 			},
// 			{ name: 'Redux', image: '/assets/svg/Skills/framework/redux.svg' },
// 			{ name: 'NodeJS', image: '/assets/svg/Skills/framework/node.svg' },
// 			{ name: 'GraphQL', image: '/assets/svg/Skills/framework/graphql.svg' },
// 			{ name: 'Next.js', image: '/assets/svg/Skills/framework/nextjs.svg' },
// 			{
// 				name: 'Bootstrap',
// 				image: '/assets/svg/Skills/framework/bootstrap.svg',
// 			},
// 			{ name: 'jQuery', image: '/assets/svg/Skills/framework/jquery.svg' },
// 			{
// 				name: 'React Native',
// 				image: '/assets/svg/Skills/framework/react-native.svg',
// 			},
// 			{
// 				name: 'Tailwind CSS',
// 				image: '/assets/svg/Skills/framework/tailwind.svg',
// 			},
// 			{ name: 'SCSS', image: '/assets/svg/Skills/framework/scss.svg' },
// 			{ name: 'ShadCN/UI', image: '/assets/svg/Skills/framework/shadcn.svg' },
// 			{ name: 'GSAP', image: '/assets/svg/Skills/framework/gsap.svg' },
// 			{ name: 'Jest', image: '/assets/svg/Skills/framework/jest.svg' },
// 			{ name: 'Cypress', image: '/assets/svg/Skills/framework/cypress.svg' },
// 			{
// 				name: 'GitHub Actions',
// 				image: '/assets/svg/Skills/framework/github-actions.svg',
// 			},
// 			{
// 				name: 'GitLab CI/CD',
// 				image: '/assets/svg/Skills/framework/gitlab.svg',
// 			},
// 		],
// 	},
// 	{
// 		category: 'UI/UX & Design',
// 		skills: [
// 			{ name: 'Figma', image: '/assets/svg/Skills/graphic-design/figma.svg' },
// 			{
// 				name: 'Fresco',
// 				image: '/assets/svg/Skills/graphic-design/fr.png',
// 			},
// 			{
// 				name: 'Illustrator',
// 				image: '/assets/svg/Skills/graphic-design/ai.svg',
// 			},
// 			{
// 				name: 'Lottie',
// 				image: '/assets/svg/Skills/graphic-design/lottie.svg',
// 			},
// 			{
// 				name: 'Photoshop',
// 				image: '/assets/svg/Skills/graphic-design/ps.svg',
// 			},
// 			{
// 				name: 'Procreate',
// 				image: '/assets/svg/Skills/graphic-design/Pro.png',
// 			},
// 			{
// 				name: 'Rive',
// 				image: '/assets/svg/Skills/graphic-design/rive.svg',
// 			},
// 		],
// 	},
// 	{
// 		category: 'Databases',
// 		skills: [
// 			{ name: 'Firebase', image: '/assets/svg/Skills/framework/fb.svg' },
// 			{
// 				name: 'MongoDB',
// 				image: '/assets/svg/Skills/database/mongodb.svg',
// 			},
// 			{ name: 'MySQL', image: '/assets/svg/Skills/database/mysql.svg' },
// 			{ name: 'Neo4j', image: '/assets/svg/Skills/database/n4j.svg' },
// 			{
// 				name: 'Oracle SQL',
// 				image: '/assets/svg/Skills/database/oraclesql.svg',
// 			},
// 			{
// 				name: 'PostgreSQL',
// 				image: '/assets/svg/Skills/database/postgresql.svg',
// 			},
// 			{
// 				name: 'SQLite',
// 				image: '/assets/svg/Skills/database/sqlite.svg',
// 			},
// 		],
// 	},
// ];

// const Skills = () => {
// 	return (
// 		<div className="skills-container">
// 			<h1>
// 				<span>S</span>
// 				<span>k</span>
// 				<span>i</span>
// 				<span>l</span>
// 				<span>l</span>
// 				<span>s</span>
// 			</h1>
// 			<div className="skills-grid">
// 				{skillsData.map((skillCategory, index) => (
// 					<div className="skill-category" key={index}>
// 						<h2 className="category-title">{skillCategory.category}</h2>
// 						<ul className="skill-list">
// 							{skillCategory.skills.map((skill, idx) => (
// 								<li className="skill-item" key={idx}>
// 									<img
// 										src={skill.image}
// 										alt={skill.name}
// 										className="skill-icon"
// 									/>
// 									<div className="skill-name">{skill.name}</div>
// 								</li>
// 							))}
// 						</ul>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default Skills;

import { useState } from 'react';
import './Skills.scss';

const skillsData = [
	{
		category: 'Tools, Libraries & Productivity',
		skills: [
			{ name: 'AWS RDS', image: '/assets/svg/Skills/tools/rds.svg' },
			{ name: 'AWS S3', image: '/assets/svg/Skills/tools/aws.svg' },
			{ name: 'Docker', image: '/assets/svg/Skills/tools/docker.svg' },
			{
				name: 'Git/GitHub',
				image: '/assets/svg/Skills/tools/github.svg',
			},
			{ name: 'Google Cloud', image: '/assets/svg/Skills/tools/gc.svg' },
			{ name: 'Kubernetes', image: '/assets/svg/Skills/tools/kube.svg' },
			{ name: 'NPM', image: '/assets/svg/Skills/tools/npm.svg' },
			{ name: 'Redis', image: '/assets/svg/Skills/tools/redis.svg' },
			{ name: 'Shell/Bash', image: '/assets/svg/Skills/tools/bash.svg' },
			{ name: 'Snowflake', image: '/assets/svg/Skills/tools/sf.svg' },
			{ name: 'TensorFlow', image: '/assets/svg/Skills/tools/tf.svg' },
			{ name: 'Tableau', image: '/assets/svg/Skills/tools/tableau.svg' },
			{ name: 'PowerBI', image: '/assets/svg/Skills/tools/powerbi.svg' },
			{ name: 'Postman', image: '/assets/svg/Skills/tools/postman.svg' },
			{ name: 'Vite', image: '/assets/svg/Skills/tools/vite.svg' },
			{ name: 'Jira', image: '/assets/svg/Skills/tools/jira.svg' },
			{ name: 'Notion', image: '/assets/svg/Skills/tools/notion.svg' },
			{ name: 'Obsidian', image: '/assets/svg/Skills/tools/obsidian.svg' },
		],
	},
	{
		category: 'Programming Languages',
		skills: [
			{ name: 'C', image: '/assets/svg/Skills/languages/c.svg' },
			{ name: 'C++', image: '/assets/svg/Skills/languages/cpp.svg' },
			{ name: 'Dart', image: '/assets/svg/Skills/languages/dart.svg' },
			{ name: 'Go', image: '/assets/svg/Skills/languages/go.svg' },
			{ name: 'HTML', image: '/assets/svg/Skills/languages/html.svg' },
			{ name: 'Java', image: '/assets/svg/Skills/languages/java.svg' },
			{
				name: 'JavaScript',
				image: '/assets/svg/Skills/languages/js.svg',
			},
			{
				name: 'Typescript',
				image: '/assets/svg/Skills/languages/ts.svg',
			},
			{ name: 'Python', image: '/assets/svg/Skills/languages/py.svg' },
			// { name: 'SQL', image: '/assets/svg/Skills/languages/sql.svg' },
			// { name: 'NoSQL', image: '/assets/svg/Skills/languages/nosql.svg' },
		],
	},
	{
		category: 'Frameworks & Testing',
		skills: [
			{ name: 'Angular', image: '/assets/svg/Skills/framework/angular.svg' },
			{ name: 'CSS', image: '/assets/svg/Skills/framework/css.svg' },
			{ name: 'Express', image: '/assets/svg/Skills/framework/ex.svg' },
			{ name: 'Firebase', image: '/assets/svg/Skills/framework/fb.svg' },
			{
				name: 'Flutter',
				image: '/assets/svg/Skills/framework/flutter.svg',
			},
			{
				name: 'ReactJS',
				image: '/assets/svg/Skills/framework/react.svg',
			},
			{ name: 'Redux', image: '/assets/svg/Skills/framework/redux.svg' },
			{ name: 'NodeJS', image: '/assets/svg/Skills/framework/node.svg' },
			{ name: 'GraphQL', image: '/assets/svg/Skills/framework/graphql.svg' },
			{ name: 'Next.js', image: '/assets/svg/Skills/framework/nextjs.svg' },
			{
				name: 'Bootstrap',
				image: '/assets/svg/Skills/framework/bootstrap.svg',
			},
			// { name: 'jQuery', image: '/assets/svg/Skills/framework/jquery.svg' },
			{
				name: 'React Native',
				image: '/assets/svg/Skills/framework/react-native.svg',
			},
			{
				name: 'Tailwind CSS',
				image: '/assets/svg/Skills/framework/tailwind.svg',
			},
			{ name: 'SCSS', image: '/assets/svg/Skills/framework/sass.svg' },
			{ name: 'ShadCN/UI', image: '/assets/svg/Skills/framework/shadcn.svg' },
			{ name: 'GSAP', image: '/assets/svg/Skills/framework/gsap.svg' },
			{ name: 'Jest', image: '/assets/svg/Skills/framework/jest.svg' },
			{ name: 'Cypress', image: '/assets/svg/Skills/framework/cypress.svg' },
			{
				name: 'GitHub Actions',
				image: '/assets/svg/Skills/framework/github-actions.svg',
			},
			{
				name: 'GitLab CI/CD',
				image: '/assets/svg/Skills/framework/gitlab.svg',
			},
		],
	},
	{
		category: 'UI/UX & Design',
		skills: [
			{ name: 'Figma', image: '/assets/svg/Skills/graphic-design/figma.svg' },
			{
				name: 'Fresco',
				image: '/assets/svg/Skills/graphic-design/fr.png',
			},
			{
				name: 'Illustrator',
				image: '/assets/svg/Skills/graphic-design/ai.svg',
			},
			// {
			// 	name: 'Lottie',
			// 	image: '/assets/svg/Skills/graphic-design/lottie.svg',
			// },
			{
				name: 'Photoshop',
				image: '/assets/svg/Skills/graphic-design/ps.svg',
			},
			{
				name: 'Procreate',
				image: '/assets/svg/Skills/graphic-design/Pro.png',
			},
			{
				name: 'Rive',
				image: '/assets/svg/Skills/graphic-design/rive.svg',
			},
		],
	},
	{
		category: 'Databases',
		skills: [
			{ name: 'Firebase', image: '/assets/svg/Skills/framework/fb.svg' },
			{
				name: 'MongoDB',
				image: '/assets/svg/Skills/database/mongodb.svg',
			},
			{ name: 'MySQL', image: '/assets/svg/Skills/database/mysql.svg' },
			{ name: 'Neo4j', image: '/assets/svg/Skills/database/n4j.svg' },
			{
				name: 'Oracle SQL',
				image: '/assets/svg/Skills/database/oraclesql.svg',
			},
			{
				name: 'PostgreSQL',
				image: '/assets/svg/Skills/database/postgresql.svg',
			},
			{
				name: 'SQLite',
				image: '/assets/svg/Skills/database/sqlite.svg',
			},
		],
	},
];

const Skills = () => {
	// State to track which sections are expanded
	const [expandedSections, setExpandedSections] = useState({});

	// Function to toggle section expansion
	const toggleSection = (index) => {
		setExpandedSections({
			...expandedSections,
			[index]: !expandedSections[index],
		});
	};

	// Determine if a section should show the expand/collapse button
	// (large sections with many skills)
	const shouldShowToggle = (skills) => skills.length > 10;

	return (
		<div className="skills-container">
			<h1>
				<span>S</span>
				<span>k</span>
				<span>i</span>
				<span>l</span>
				<span>l</span>
				<span>s</span>
			</h1>
			<div className="skills-grid">
				{skillsData.map((skillCategory, index) => (
					<div
						className={`skill-category ${
							expandedSections[index] ? 'expanded' : ''
						}`}
						key={index}
					>
						<div className="category-header">
							<h2 className="category-title">{skillCategory.category}</h2>
							{shouldShowToggle(skillCategory.skills) && (
								<button
									className="toggle-button"
									onClick={() => toggleSection(index)}
									aria-label={
										expandedSections[index]
											? 'Collapse section'
											: 'Expand section'
									}
								>
									<svg
										className={`arrow-icon ${
											expandedSections[index] ? 'up' : 'down'
										}`}
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7 10L12 15L17 10"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							)}
						</div>
						<ul className="skill-list">
							{skillCategory.skills.map((skill, idx) => (
								<li className="skill-item" key={idx}>
									<img
										src={skill.image}
										alt={skill.name}
										className="skill-icon"
									/>
									<div className="skill-name">{skill.name}</div>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;

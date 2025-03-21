import { useEffect, useRef, useState } from 'react';
import './SkillsMob.scss';

const SkillsMob = () => {
	const [activeCategory, setActiveCategory] = useState('languages');
	const skillsRef = useRef(null);

	// Skills data organized by categories
	const skillsData = {
		languages: [
			{ name: 'C', icon: '/assets/svg/Skills/languages/c.svg' },
			{ name: 'C++', icon: '/assets/svg/Skills/languages/cpp.svg' },
			{ name: 'Dart', icon: '/assets/svg/Skills/languages/dart.svg' },
			{ name: 'Go', icon: '/assets/svg/Skills/languages/go.svg' },
			{ name: 'HTML', icon: '/assets/svg/Skills/languages/html.svg' },
			{ name: 'Java', icon: '/assets/svg/Skills/languages/java.svg' },
			{ name: 'JavaScript', icon: '/assets/svg/Skills/languages/js.svg' },
			{ name: 'Typescript', icon: '/assets/svg/Skills/languages/ts.svg' },
			{ name: 'Python', icon: '/assets/svg/Skills/languages/py.svg' },
		],
		tools: [
			{ name: 'AWS RDS', icon: '/assets/svg/Skills/tools/rds.svg' },
			{ name: 'AWS S3', icon: '/assets/svg/Skills/tools/aws.svg' },
			{ name: 'Docker', icon: '/assets/svg/Skills/tools/docker.svg' },
			{ name: 'Git/GitHub', icon: '/assets/svg/Skills/tools/github.svg' },
			{ name: 'Google Cloud', icon: '/assets/svg/Skills/tools/gc.svg' },
			{ name: 'Kubernetes', icon: '/assets/svg/Skills/tools/kube.svg' },
			{ name: 'NPM', icon: '/assets/svg/Skills/tools/npm.svg' },
			{ name: 'Redis', icon: '/assets/svg/Skills/tools/redis.svg' },
			{ name: 'Shell/Bash', icon: '/assets/svg/Skills/tools/bash.svg' },
			{ name: 'Snowflake', icon: '/assets/svg/Skills/tools/snowflake.svg' },
			{ name: 'TensorFlow', icon: '/assets/svg/Skills/tools/tf.svg' },
			{ name: 'Tableau', icon: '/assets/svg/Skills/tools/tableau.svg' },
			{ name: 'PowerBI', icon: '/assets/svg/Skills/tools/powerbi.svg' },
			{ name: 'Postman', icon: '/assets/svg/Skills/tools/postman.svg' },
			{ name: 'Vite', icon: '/assets/svg/Skills/tools/vite.svg' },
			{ name: 'Jira', icon: '/assets/svg/Skills/tools/jira.svg' },
			{ name: 'Notion', icon: '/assets/svg/Skills/tools/notion.svg' },
			{ name: 'Obsidian', icon: '/assets/svg/Skills/tools/obsidian.svg' },
		],
		frameworks: [
			{ name: 'Angular', icon: '/assets/svg/Skills/framework/angular.svg' },
			{ name: 'CSS', icon: '/assets/svg/Skills/framework/css.svg' },
			{ name: 'Express', icon: '/assets/svg/Skills/framework/ex.svg' },
			{ name: 'Flutter', icon: '/assets/svg/Skills/framework/flutter.svg' },
			{ name: 'ReactJS', icon: '/assets/svg/Skills/framework/react.svg' },
			{ name: 'Redux', icon: '/assets/svg/Skills/framework/redux.svg' },
			{ name: 'NodeJS', icon: '/assets/svg/Skills/framework/node.svg' },
			{ name: 'GraphQL', icon: '/assets/svg/Skills/framework/graphql.svg' },
			{ name: 'Next.js', icon: '/assets/svg/Skills/framework/nextjs.svg' },
			{ name: 'Bootstrap', icon: '/assets/svg/Skills/framework/bootstrap.svg' },
			{
				name: 'React Native',
				icon: '/assets/svg/Skills/framework/react-native.svg',
			},
			{
				name: 'Tailwind CSS',
				icon: '/assets/svg/Skills/framework/tailwind.svg',
			},
			{ name: 'SCSS', icon: '/assets/svg/Skills/framework/sass.svg' },
			{ name: 'ShadCN/UI', icon: '/assets/svg/Skills/framework/shadcn.svg' },
			{ name: 'GSAP', icon: '/assets/svg/Skills/framework/gsap.svg' },
		],
		databases: [
			{ name: 'Firebase', icon: '/assets/svg/Skills/framework/fb.svg' },
			{ name: 'MongoDB', icon: '/assets/svg/Skills/database/mongodb.svg' },
			{ name: 'MySQL', icon: '/assets/svg/Skills/database/mysql.svg' },
			{ name: 'Neo4j', icon: '/assets/svg/Skills/database/n4j.svg' },
			{ name: 'Oracle SQL', icon: '/assets/svg/Skills/database/oraclesql.svg' },
			{
				name: 'PostgreSQL',
				icon: '/assets/svg/Skills/database/postgresql.svg',
			},
			{ name: 'SQLite', icon: '/assets/svg/Skills/database/sqlite.svg' },
		],
		testing: [
			{ name: 'Jest', icon: '/assets/svg/Skills/framework/jest.svg' },
			{ name: 'Cypress', icon: '/assets/svg/Skills/framework/cypress.svg' },
			{
				name: 'GitHub Actions',
				icon: '/assets/svg/Skills/framework/github-actions.svg',
			},
			{ name: 'GitLab CI/CD', icon: '/assets/svg/Skills/framework/gitlab.svg' },
		],
		design: [
			{ name: 'Figma', icon: '/assets/svg/Skills/graphic-design/figma.svg' },
			{ name: 'Fresco', icon: '/assets/svg/Skills/graphic-design/fr.png' },
			{ name: 'Illustrator', icon: '/assets/svg/Skills/graphic-design/ai.svg' },
			{ name: 'Photoshop', icon: '/assets/svg/Skills/graphic-design/ps.svg' },
			{ name: 'Procreate', icon: '/assets/svg/Skills/graphic-design/Pro.png' },
			{ name: 'Rive', icon: '/assets/svg/Skills/graphic-design/rive.svg' },
		],
	};

	const categories = [
		{ id: 'languages', name: 'Programming Languages' },
		{ id: 'tools', name: 'Tools & Libraries' },
		{ id: 'frameworks', name: 'Frameworks' },
		{ id: 'testing', name: 'Testing & Deployment' },
		{ id: 'databases', name: 'Databases' },
		{ id: 'design', name: 'UI/UX & Design' },
	];

	// Animate skill items on category change
	useEffect(() => {
		if (skillsRef.current) {
			const skillItems = skillsRef.current.querySelectorAll('.skill-item');

			skillItems.forEach((item, index) => {
				item.style.animation = 'none';
				setTimeout(() => {
					item.style.animation = `fadeIn 0.5s ease forwards ${index * 0.05}s`;
				}, 10);
			});
		}
	}, [activeCategory]);

	return (
		<div className="skills-mob-container">
			<div className="skill-categories">
				{categories.map((category) => (
					<button
						key={category.id}
						className={`category-btn ${
							activeCategory === category.id ? 'active' : ''
						}`}
						onClick={() => setActiveCategory(category.id)}
					>
						{category.name}
					</button>
				))}
			</div>

			<div className="skills-display" ref={skillsRef}>
				<div className="terminal-header">
					<div className="terminal-dots">
						<div className="terminal-dot red"></div>
						<div className="terminal-dot yellow"></div>
						<div className="terminal-dot green"></div>
					</div>
					<div className="terminal-title">skills.sh</div>
				</div>

				<div className="terminal-content">
					<div className="command-line">
						<span
							className="prompt"
							style={{
								fontFamily: 'monospace',
							}}
						>
							meghan31@MacBook-Pro
						</span>
						<span
							className="separator"
							style={{
								fontFamily: 'monospace',
							}}
						>
							:
						</span>
						<span
							className="directory"
							style={{
								fontFamily: 'monospace',
							}}
						>
							~/skills
						</span>
						<span
							className="separator"
							style={{
								fontFamily: 'monospace',
							}}
						>
							$
						</span>
						<span
							className="command"
							style={{
								fontFamily: 'monospace',
							}}
						>
							{' '}
							cat {activeCategory}.json
						</span>
					</div>

					<div className="skills-grid">
						{skillsData[activeCategory].map((skill, index) => (
							<div key={index} className="skill-item">
								<div className="skill-icon">
									<img
										src={skill.icon}
										alt={skill.name}
										onError={(e) => {
											e.target.src = '/assets/svg/Skills/languages/c.svg';
										}}
									/>
								</div>
								<span
									className="skill-name"
									style={{
										color: 'white',
									}}
								>
									{skill.name}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsMob;

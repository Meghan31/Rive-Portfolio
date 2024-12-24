import './Skills.scss';

const skillsData = [
	{
		category: 'Tools & Libraries',
		skills: [
			{ name: 'AWS RDS', image: 'public/assets/svg/Skills/tools/rds.svg' },
			{ name: 'AWS S3', image: 'public/assets/svg/Skills/tools/aws.svg' },
			{ name: 'Docker', image: 'public/assets/svg/Skills/tools/docker.svg' },
			{
				name: 'Git/GitHub',
				image: 'public/assets/svg/Skills/tools/github.svg',
			},
			{ name: 'Google Cloud', image: 'public/assets/svg/Skills/tools/gc.svg' },
			{ name: 'Kubernetes', image: 'public/assets/svg/Skills/tools/kube.svg' },
			{ name: 'NPM', image: 'public/assets/svg/Skills/tools/npm.svg' },
			{ name: 'Redis', image: 'public/assets/svg/Skills/tools/redis.svg' },
			{ name: 'Snowflake', image: 'public/assets/svg/Skills/tools/sf.svg' },
			{ name: 'TensorFlow', image: 'public/assets/svg/Skills/tools/tf.svg' },
			{ name: 'Tableau', image: 'public/assets/svg/Skills/tools/tableau.svg' },
			{ name: 'PowerBI', image: 'public/assets/svg/Skills/tools/powerbi.svg' },
		],
	},
	{
		category: 'Programming Languages',
		skills: [
			{ name: 'C', image: 'public/assets/svg/Skills/languages/c.svg' },
			{ name: 'C++', image: 'public/assets/svg/Skills/languages/cpp.svg' },
			{ name: 'Dart', image: 'public/assets/svg/Skills/languages/dart.svg' },
			{ name: 'Java', image: 'public/assets/svg/Skills/languages/java.svg' },
			{
				name: 'JavaScript',
				image: 'public/assets/svg/Skills/languages/js.svg',
			},
			{
				name: 'Typescript',
				image: 'public/assets/svg/Skills/languages/ts.svg',
			},
			{ name: 'Python', image: 'public/assets/svg/Skills/languages/py.svg' },
		],
	},
	{
		category: 'Frameworks',
		skills: [
			{ name: 'Express', image: 'public/assets/svg/Skills/framework/ex.svg' },
			{ name: 'Firebase', image: 'public/assets/svg/Skills/framework/fb.svg' },
			{
				name: 'Flutter',
				image: 'public/assets/svg/Skills/framework/flutter.svg',
			},
			{
				name: 'ReactJS',
				image: 'public/assets/svg/Skills/framework/react.svg',
			},
			{ name: 'Redux', image: 'public/assets/svg/Skills/framework/redux.svg' },
			{ name: 'NodeJS', image: 'public/assets/svg/Skills/framework/node.svg' },
		],
	},
	{
		category: 'Graphic Design',
		skills: [
			{
				name: 'Fresco',
				image: 'public/assets/svg/Skills/graphic-design/fr.png',
			},
			{
				name: 'Illustrator',
				image: 'public/assets/svg/Skills/graphic-design/ai.svg',
			},
			{
				name: 'Photoshop',
				image: 'public/assets/svg/Skills/graphic-design/ps.svg',
			},
			{
				name: 'Procreate',
				image: 'public/assets/svg/Skills/graphic-design/Pro.png',
			},
			{
				name: 'Rive',
				image: 'public/assets/svg/Skills/graphic-design/rive.svg',
			},
		],
	},
	{
		category: 'Database',
		skills: [
			{ name: 'Firebase', image: 'public/assets/svg/Skills/framework/fb.svg' },
			{
				name: 'MongoDB',
				image: 'public/assets/svg/Skills/database/mongodb.svg',
			},
			{ name: 'MySQL', image: 'public/assets/svg/Skills/database/mysql.svg' },

			{ name: 'Neo4j', image: 'public/assets/svg/Skills/database/n4j.svg' },
			{
				name: 'Oracle SQL',
				image: 'public/assets/svg/Skills/database/oraclesql.svg',
			},
			{
				name: 'PostgreSQL',
				image: 'public/assets/svg/Skills/database/postgresql.svg',
			},
		],
	},
];

const Skills = () => {
	return (
		<div className="skills-container">
			{/* <img
				src="public/assets/images/skills.jpg"
				alt="Skills"
				className="skills-image"
			/> */}
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
					<div className="skill-category" key={index}>
						<h2 className="category-title">{skillCategory.category}</h2>
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

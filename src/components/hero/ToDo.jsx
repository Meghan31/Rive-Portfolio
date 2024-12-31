import { TypeAnimation } from 'react-type-animation';

const ToDo = () => {
	return (
		<TypeAnimation
			sequence={[
				"I'm a Web Developer",
				2000,
				"I'm a Mobile App Developer",
				2000,
				"I'm a Designer",
				2000,
				"I'm a Backend Engineer",
				2000,
				"I'm a Student",
				2000,
			]}
			wrapper="span"
			speed={10}
			style={{
				fontSize: '2em',
				fontWeight: 'bold',
				fontFamily: 'Courier New',
				display: 'inline-block',
				color: 'Black',
			}}
			repeat={Infinity}
		/>
	);
};

export default ToDo;

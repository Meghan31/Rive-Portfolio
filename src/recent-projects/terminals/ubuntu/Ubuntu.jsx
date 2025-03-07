import Draggable from 'react-draggable';
import './ubuntu.scss';
const Ubuntu = () => {
	return (
		<div className="full">
			<Draggable defaultPosition={{ x: 100, y: 50 }}>
				<div className="project-n">
					<div className="headings">
						<div className="dots">
							<div
								style={{
									background: '#FF5E5E',
									width: '12px',
									height: '12px',
									borderRadius: '50%',
								}}
							></div>
							<div
								style={{
									background: '#FFC130',
									width: '12px',
									height: '12px',
									borderRadius: '50%',
								}}
							></div>
							<div
								style={{
									background: '#279568',
									width: '12px',
									height: '12px',
									borderRadius: '50%',
								}}
							></div>
						</div>
						<p className="title">CodeSketch: ~</p>
					</div>
					<div className="description">
						<p style={{ color: '#279568' }}>
							{'Meghan31/Desktop/github/CodeSketch@Ubuntu'}
						</p>
						<p style={{ color: 'white' }}>{':'}</p>
						<p style={{ color: '#124988' }}>{'~'}</p>
						<p style={{ color: 'white' }}>{'$'}</p>

						<span>&nbsp;&nbsp;&nbsp; </span>
						<div className="points">
							<p>
								• Built an innovative real-time, collaborative code editor and
								drawing board, enabling users to seamlessly collaborate on both
								code and visuals in a shared environment, improving workflow and
								creativity.
							</p>
							<br />
							<p>
								• Leveraged WebSockets for efficient, instant updates between
								users, and implemented secure session management protocols to
								ensure data integrity and smooth, uninterrupted collaboration
								across various platforms.
							</p>
						</div>
					</div>
					<div className="tech">
						<p>
							Technologies Used : React, Node.js, Express, WebSockets,
							JavaScript, Collaborative Environment, Git/GitHub, Jest
						</p>
					</div>
				</div>
			</Draggable>
		</div>
	);
};

export default Ubuntu;

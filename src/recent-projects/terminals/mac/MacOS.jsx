import Draggable from 'react-draggable';
import './macos.scss';

const MacOS = () => {
	return (
		<div className="full-mac">
			<Draggable defaultPosition={{ x: 150, y: 20 }}>
				<div className="project-n-mac">
					<div className="headings-mac">
						<div className="dots-mac">
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
						<div
							className="name-mac"
							style={
								{
									// display: 'flex',
									// flexDirection: 'row',
									// alignItems: 'center',
									// justifyContent: 'start',
								}
							}
						>
							<img
								src="assets/svg/mac-file.svg"
								alt="Logo"
								style={{
									height: '20px',
									width: '20px',
									marginRight: '10px',
								}}
							/>
							<p className="title-mac">Nostalgia Manager — -zsh — 150×20</p>
						</div>
					</div>
					<div className="description-mac">
						<p style={{ color: 'white' }}>
							{'Meghan31/Desktop/github/Nostalgia Manager'}
						</p>
						<span>&nbsp;&nbsp;&nbsp; </span>
						<p style={{ color: 'white' }}>{'%'}</p>

						<span>&nbsp;&nbsp;&nbsp; </span>
						<div className="points-mac">
							<p>
								• Developed a browser extension to save and manage copied texts,
								addressing the clipboard limitations on macOS by allowing users
								to store and easily retrieve previously copied content,
								improving workflow efficiency.
							</p>
							<br />
							<p>
								• Integrated a user-friendly interface with a responsive design,
								enabling seamless note management and quick access to saved
								texts, while ensuring data persistence using Chrome’s local
								storage for a smooth, reliable experience.
							</p>
						</div>
					</div>
					<div className="tech-mac">
						<p>
							Technologies Used : React, TypeScript, SCSS, Chrome Storage API,
							Git/GitHub, Fresco, Cypress
						</p>
					</div>
				</div>
			</Draggable>
		</div>
	);
};

export default MacOS;

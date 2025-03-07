import Draggable from 'react-draggable';
import './windows.scss';
const Windows = () => {
	return (
		<div className="full-windows">
			<Draggable defaultPosition={{ x: 200, y: 10 }}>
				<div className="project-n-windows">
					<div className="headings-windows">
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'start',
							}}
						>
							<img
								src="assets/svg/windows-powershell.svg"
								alt="Logo"
								style={{
									height: '40px',
									width: '40px',
									// marginRight: '5px',
								}}
							/>
							<p className="title-windows">
								Voting System For Local Communities
							</p>
						</div>
						<div className="dots-windows">
							<img
								src="assets/svg/-.svg"
								alt="Logo"
								style={{
									height: '25px',
									width: '25px',
									// marginBottom: '30px',
								}}
							/>
							<img
								src="assets/svg/box.svg"
								alt="Logo"
								style={{
									height: '25px',
									width: '25px',
									// marginRight: '5px',
								}}
							/>
							<img
								src="assets/svg/x.svg"
								alt="Logo"
								style={{
									height: '25px',
									width: '25px',
									// marginRight: '5px',
								}}
							/>
						</div>
					</div>
					<div className="description-windows">
						<p>
							Windows PowerShell Copyright (C) Microsoft Corporation. All rights
							reserved. Install the latest PowerShell for new features and
							improvements! https://aka.ms/PSWindows PS
						</p>
					</div>
					<div className="description-windows">
						<p style={{ color: 'white' }}>
							{'C:\\Users\\Meghan31\\Desktop\\Voting System'}
						</p>
						<span>&nbsp;&nbsp;&nbsp; </span>
						<p>{'>'}</p>
						{/* <p style={{ color: 'white' }}>{':'}</p>
					<p style={{ color: '#124988' }}>{'~'}</p>
					<p style={{ color: 'white' }}>{'$'}</p> */}

						<span>&nbsp;&nbsp;&nbsp; </span>
						<div className="points-windows">
							<p>
								• Engineered a secure and scalable digital voting platform for
								local communities using the MERN stack, integrating AWS for
								cloud storage and Redis for real-time processing, ensuring high
								performance, data integrity, and seamless user participation.
							</p>
							<br />
							<p>
								• Designed and implemented a robust, user-friendly interface
								with a focus on security and accessibility, leveraging Agile
								methodologies and tools like Jest and Postman to optimize system
								reliability and testing.
							</p>
						</div>
					</div>
					<div className="tech-windows">
						<p>
							Technologies Used : MongoDb, Express, React, Node.js, AWS, Redis,
							Full-stack, Agile, Jest, Postman
						</p>
					</div>
				</div>
			</Draggable>
		</div>
	);
};

export default Windows;

import Draggable from 'react-draggable';
import './windows.scss';

const Windows = () => {
	return (
		<div className="full-windows">
			<Draggable defaultPosition={{ x: 150, y: 20 }}>
				<div className="project-n-windows">
					<div className="headings-windows">
						<div className="title-container">
							<img
								src="assets/svg/windows-powershell.svg"
								alt="PowerShell Logo"
								className="powershell-icon"
							/>
							<p className="title-windows">
								Windows PowerShell - Voting System
							</p>
						</div>
						<div className="window-controls">
							<div className="control-button minimize">
								<img
									src="assets/svg/-.svg"
									alt="Minimize"
									className="control-icon"
								/>
							</div>
							<div className="control-button maximize">
								<img
									src="assets/svg/box.svg"
									alt="Maximize"
									className="control-icon"
								/>
							</div>
							<div className="control-button close">
								<img
									src="assets/svg/x.svg"
									alt="Close"
									className="control-icon"
								/>
							</div>
						</div>
					</div>
					<div className="terminal-content">
						<div className="copyright-section">
							<p className="powershell-copyright">
								Windows PowerShell
								<br />
								Copyright (C) Microsoft Corporation. All rights reserved.
								<br />
								Install the latest PowerShell for new features and improvements!
								<br />
								https://aka.ms/PSWindows
							</p>
						</div>

						<div
							className="command-prompt"
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<p className="ps-path">
								PS C:\Users\Meghan31\Desktop\Voting System&gt;
							</p>
							<span>&nbsp;&nbsp;&nbsp; </span>
							<p
								className="ps-command"
								style={{
									paddingBottom: '5px',
								}}
							>
								get-project -info
							</p>
						</div>

						<div className="output-section">
							<p className="project-point">
								• Engineered a secure and scalable digital voting platform for
								local communities using the MERN stack, integrating AWS for
								cloud storage and Redis for real-time processing, ensuring high
								performance, data integrity, and seamless user participation.
							</p>
							<p className="project-point">
								• Designed and implemented a robust, user-friendly interface
								with a focus on security and accessibility, leveraging Agile
								methodologies and tools like Jest and Postman to optimize system
								reliability and testing.
							</p>
						</div>

						<div
							className="command-prompt"
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<p className="ps-path">
								PS C:\Users\Meghan31\Desktop\Voting System&gt;
							</p>
							<span>&nbsp;&nbsp;&nbsp; </span>
							<p
								className="ps-command"
								style={{
									paddingBottom: '5px',
								}}
							>
								get-tech -list
							</p>
						</div>

						<div className="tech-section">
							<p>
								<span
									className="ps-output-tag"
									style={{
										fontFamily: 'Courier New',
									}}
								>
									[TECHNOLOGIES]
								</span>{' '}
								MongoDB, Express, React, Node.js, AWS, Redis, Full-stack, Agile,
								Jest, Postman
							</p>
						</div>
					</div>
				</div>
			</Draggable>
		</div>
	);
};

export default Windows;

import Draggable from 'react-draggable';
import './macos.scss';

const MacOS = () => {
	return (
		<div className="full-mac">
			<Draggable defaultPosition={{ x: 150, y: 20 }}>
				<div className="project-n-mac">
					<div className="headings-mac">
						<div className="dots-mac">
							<div className="mac-dot red-mac"></div>
							<div className="mac-dot yellow-mac"></div>
							<div className="mac-dot green-mac"></div>
						</div>
						<div className="title-container-mac">
							<img
								src="assets/svg/mac-file.svg"
								alt="Logo"
								className="mac-icon"
							/>
							<p className="title-mac">Nostalgia Manager — -zsh — 150×20</p>
						</div>
						<div className="icons-mac">
							<img
								src="assets/svg/mac-link.svg"
								alt="GitHub Link"
								className="github-icon"
								onClick={() =>
									window.open(
										'https://github.com/Meghan31/nostalgia-copy-paste-extension/blob/main/README.md'
									)
								}
							/>
						</div>
					</div>
					<p className="last-login">
						Last login:{' '}
						{(() => {
							const now = new Date();
							const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
							const months = [
								'Jan',
								'Feb',
								'Mar',
								'Apr',
								'May',
								'Jun',
								'Jul',
								'Aug',
								'Sep',
								'Oct',
								'Nov',
								'Dec',
							];

							const day = days[now.getDay()];
							const month = months[now.getMonth()];
							const date = now.getDate();
							const hours = String(now.getHours()).padStart(2, '0');
							const minutes = String(now.getMinutes()).padStart(2, '0');
							const seconds = String(now.getSeconds()).padStart(2, '0');

							return `${day} ${month} ${date} ${hours}:${minutes}:${seconds}`;
						})()}{' '}
						on ttys004
					</p>
					<div className="terminal-content">
						<div className="terminal-command">
							<div className="description-mac">
								<p
									className="user-mac"
									style={{
										fontFamily: 'monospace',
									}}
								>
									meghan31@MacBook-Pro
								</p>
								<p
									className="symbol-mac"
									style={{
										fontFamily: 'monospace',
									}}
								>
									:
								</p>
								<p
									className="path-mac"
									style={{
										fontFamily: 'monospace',
									}}
								>
									~/projects/nostalgia-manager
								</p>
								<p
									className="symbol-mac"
									style={{
										fontFamily: 'monospace',
									}}
								>
									$
								</p>
							</div>
							<span>&nbsp;&nbsp;&nbsp; </span>
							<div className="command-mac">
								<p
									className="command-text"
									style={{
										fontFamily: 'monospace',
										paddingTop: '3px',
									}}
								>
									cat project-description.md
								</p>
							</div>
						</div>
						<div className="points-mac">
							<p>
								• Developed a browser extension to save and manage copied texts,
								addressing the clipboard limitations on macOS by allowing users
								to store and easily retrieve previously copied content,
								improving workflow efficiency.
							</p>
							<br />
							<p>
								• Implemented a user-friendly interface with a responsive
								design, enabling seamless note management and quick access to
								saved texts, while ensuring data persistence using Chrome&apos;s
								local storage for a smooth, reliable experience.
							</p>
						</div>
						<div className="terminal-command">
							<div className="description-mac">
								<p
									className="user-mac"
									style={{
										fontFamily: 'monospace',
									}}
								>
									meghan31@MacBook-Pro
								</p>
								<p
									className="symbol-mac"
									style={{
										fontFamily: 'monospace',
									}}
								>
									:
								</p>
								<p
									className="path-mac"
									style={{
										fontFamily: 'monospace',
									}}
								>
									~/projects/nostalgia-manager
								</p>
								<p
									className="symbol-mac"
									style={{
										fontFamily: 'monospace',
									}}
								>
									$
								</p>
							</div>
							<span>&nbsp;&nbsp;&nbsp; </span>
							<div className="command-mac">
								<p
									className="command-text"
									style={{
										fontFamily: 'monospace',
										paddingTop: '3px',
									}}
								>
									cat tech-stack.txt
								</p>
							</div>
						</div>
					</div>
					<div className="tech-mac">
						<p>
							Technologies: React, TypeScript, SCSS, Chrome Storage API,
							Git/GitHub, Fresco, Cypress
						</p>
					</div>
				</div>
			</Draggable>
		</div>
	);
};

export default MacOS;

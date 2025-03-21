import { useEffect, useState } from 'react';
import './FooterMob.scss';

const FooterMob = () => {
	const [currentYear] = useState(new Date().getFullYear());
	const [showAnimation, setShowAnimation] = useState(false);

	useEffect(() => {
		// Set up intersection observer to trigger animation when footer is in view
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setShowAnimation(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);

		const footerElement = document.querySelector('.footer-mob');
		if (footerElement) {
			observer.observe(footerElement);
		}

		return () => {
			if (footerElement) {
				observer.unobserve(footerElement);
			}
		};
	}, []);

	return (
		<footer className={`footer-mob ${showAnimation ? 'animate' : ''}`}>
			<div className="footer-terminal">
				<div className="terminal-header">
					<div className="terminal-dots">
						<div className="dot red"></div>
						<div className="dot yellow"></div>
						<div className="dot green"></div>
					</div>
					<div className="terminal-title">connect.sh</div>
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
							~/connect
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
							./social-links.sh
						</span>
					</div>

					<div className="socials-container">
						<div
							className="social-item"
							onClick={() =>
								setTimeout(() => {
									window.open('https://github.com/Meghan31', '_blank'), 2000;
								})
							}
						>
							<img src="/assets/svg/gh.svg" alt="GitHub" />
							<span className="social-label">github.com/Meghan31</span>
						</div>

						<div
							className="social-item"
							onClick={() =>
								setTimeout(() => {
									window.open(
										'https://www.linkedin.com/in/meghan31/',
										'_blank'
									),
										2000;
								})
							}
						>
							<img src="/assets/svg/linkedin.svg" alt="LinkedIn" />
							<span className="social-label">linkedin.com/in/meghan31</span>
						</div>

						<div
							className="social-item"
							onClick={() =>
								setTimeout(() => {
									window.open('https://leetcode.com/u/Meghan31/', '_blank'),
										2000;
								})
							}
						>
							<img src="/assets/svg/Skills/leetcode.svg" alt="LeetCode" />
							<span className="social-label">leetcode.com/u/Meghan31</span>
						</div>
					</div>

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
							~/connect
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
							echo $COPYRIGHT
						</span>
					</div>

					<div className="copyright-text">
						<p
							style={{
								fontFamily: 'monospace',
							}}
						>
							Copyright © {currentYear} Meghasrivardhan Pulakhandam.
						</p>
						<p
							style={{
								fontFamily: 'monospace',
							}}
						>
							All Rights Reserved.
						</p>
					</div>
				</div>
			</div>

			{/* <div className="footer-signature">
				<div className="signature-line">
					<span className="signature-text">Designed & Built with</span>
					<span className="heart-icon">♥</span>
				</div>
			</div> */}
		</footer>
	);
};

export default FooterMob;

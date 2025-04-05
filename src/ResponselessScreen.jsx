import { useEffect, useState } from 'react';
import Page404 from './components/rive/responseless/404Page';

const ResponselessScreen = () => {
	const [deviceType, setDeviceType] = useState('mobile');

	useEffect(() => {
		// Detect if device is tablet/iPad
		const isTablet = window.innerWidth >= 768 && window.innerWidth < 1080;
		setDeviceType(isTablet ? 'tablet' : 'mobile');
	}, []);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
				height: '100%',
				width: '100%',
				textAlign: 'center',
				padding: '2rem',
				gap: '2rem',
				backgroundColor: '#121212', // Slightly softer than pure black
				position: 'relative',
				overflow: 'hidden',
				fontFamily: 'Poppins, sans-serif',
			}}
		>
			{/* Background gradient */}
			<div
				style={{
					position: 'absolute',
					top: '-50%',
					left: '-50%',
					width: '200%',
					height: '200%',
					background:
						'radial-gradient(circle at center, rgba(70, 70, 70, 0.2) 0%, rgba(0, 0, 0, 0) 50%)',
					zIndex: 0,
					fontFamily: 'Poppins, sans-serif',
				}}
			/>

			<div
				style={{
					position: 'relative',
					zIndex: 1,
					maxWidth: deviceType === 'tablet' ? '500px' : '90%',
					fontFamily: 'Poppins, sans-serif',
				}}
			>
				<h2
					style={{
						color: 'white',
						fontSize: deviceType === 'tablet' ? '2.2rem' : '1.5rem',
						marginBottom: '1rem',
						fontWeight: '600',
						fontFamily: 'Poppins, sans-serif',
					}}
				>
					Portfolio Experience
				</h2>

				<p
					style={{
						color: '#e0e0e0',
						fontSize: deviceType === 'tablet' ? '1.2rem' : '1rem',
						lineHeight: '1.6',
						marginBottom: '1.5rem',
						maxWidth: '600px',
						fontFamily: 'Poppins, sans-serif',
					}}
				>
					This portfolio is crafted for laptop and desktop viewing to showcase
					interactive elements and detailed visuals at their best.
				</p>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '12px',
						backgroundColor: 'rgba(255, 255, 255, 0.05)',
						padding: '1.5rem',
						borderRadius: '12px',
						boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
						backdropFilter: 'blur(8px)',
						border: '1px solid rgba(255, 255, 255, 0.08)',
						marginBottom: '2rem',
						fontFamily: 'Poppins, sans-serif',
					}}
				>
					<p
						style={{
							color: '#e0e0e0',
							fontSize: deviceType === 'tablet' ? '1.1rem' : '0.95rem',
							fontFamily: 'Poppins, sans-serif',
						}}
					>
						For the complete experience with all interactive elements and
						animations:
					</p>
					<p
						style={{
							color: '#FF9800',
							fontSize: deviceType === 'tablet' ? '1.2rem' : '1rem',
							fontWeight: 'bold',
							fontFamily: 'Poppins, sans-serif',
						}}
					>
						Please visit on a laptop or desktop device
					</p>
				</div>
			</div>

			{/* Animation container with better sizing */}
			<div
				style={{
					width: deviceType === 'tablet' ? '70%' : '90%',
					maxWidth: '500px',
					// marginTop: '1rem',
					position: 'relative',
					zIndex: 1,
					fontFamily: 'Poppins, sans-serif',
				}}
			>
				<Page404 />
			</div>

			{/* Contact info for mobile users */}
			<div
				style={{
					marginTop: '2rem',
					position: 'relative',
					zIndex: 1,
					fontFamily: 'Poppins, sans-serif',
				}}
			>
				<p
					style={{
						color: '#bdbdbd',
						marginBottom: '1rem',
						fontFamily: 'Poppins, sans-serif',
					}}
				>
					Questions or want to connect?
				</p>
				<button
					style={{
						backgroundColor: '#3d5afe',
						color: 'white',
						border: 'none',
						padding: '0.8rem 1.5rem',
						borderRadius: '30px',
						fontSize: '1rem',
						fontWeight: 'bold',
						cursor: 'pointer',
						boxShadow: '0 4px 12px rgba(61, 90, 254, 0.3)',
						transition: 'transform 0.2s, box-shadow 0.2s',
						fontFamily: 'Poppins, sans-serif',
					}}
					onClick={() =>
						(window.location.href = 'mailto:meghasrivardhanp@gmail.com')
					}
				>
					Contact Me
				</button>
			</div>
		</div>
	);
};

export default ResponselessScreen;

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

// import { useEffect, useState } from 'react';
// import Page404 from './components/rive/responseless/404Page';

// const ResponselessScreen = () => {
// 	const [deviceType, setDeviceType] = useState('mobile');

// 	useEffect(() => {
// 		// Detect device type
// 		const handleResize = () => {
// 			const width = window.innerWidth;
// 			if (width >= 768 && width < 1080) {
// 				setDeviceType('tablet');
// 			} else {
// 				setDeviceType('mobile');
// 			}
// 		};

// 		handleResize();
// 		window.addEventListener('resize', handleResize);
// 		return () => window.removeEventListener('resize', handleResize);
// 	}, []);

// 	return (
// 		<div
// 			style={{
// 				display: 'flex',
// 				flexDirection: 'column',
// 				justifyContent: 'center',
// 				alignItems: 'center',
// 				minHeight: '100vh',
// 				width: '100%',
// 				textAlign: 'center',
// 				padding: deviceType === 'tablet' ? '3rem 2rem' : '2rem 1rem',
// 				gap: '1.5rem',
// 				backgroundColor: '#111111',
// 				position: 'relative',
// 				overflow: 'hidden',
// 			}}
// 		>
// 			{/* Background elements */}
// 			<div
// 				style={{
// 					position: 'absolute',
// 					top: 0,
// 					left: 0,
// 					width: '100%',
// 					height: '100%',
// 					background:
// 						'radial-gradient(circle at center, rgba(60, 60, 80, 0.15) 0%, rgba(0, 0, 0, 0) 60%)',
// 					zIndex: 0,
// 				}}
// 			/>

// 			<div
// 				style={{
// 					position: 'absolute',
// 					top: 0,
// 					left: 0,
// 					width: '100%',
// 					height: '100%',
// 					backgroundImage:
// 						'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(20,20,30,0.8) 100%)',
// 					zIndex: 0,
// 				}}
// 			/>

// 			{/* Main content container */}
// 			<div
// 				style={{
// 					position: 'relative',
// 					zIndex: 1,
// 					maxWidth: deviceType === 'tablet' ? '600px' : '100%',
// 					width: '100%',
// 					display: 'flex',
// 					flexDirection: 'column',
// 					alignItems: 'center',
// 					gap: '2rem',
// 				}}
// 			>
// 				{/* Header section */}
// 				<div>
// 					<h1
// 						style={{
// 							color: 'white',
// 							fontSize: deviceType === 'tablet' ? '2.8rem' : '2rem',
// 							marginBottom: '1rem',
// 							fontWeight: '500',
// 							letterSpacing: '0.5px',
// 						}}
// 					>
// 						Desktop Experience
// 					</h1>

// 					<p
// 						style={{
// 							color: '#bdbdbd',
// 							fontSize: deviceType === 'tablet' ? '1.3rem' : '1.1rem',
// 							lineHeight: '1.6',
// 							fontWeight: '300',
// 							maxWidth: deviceType === 'tablet' ? '80%' : '95%',
// 							margin: '0 auto',
// 						}}
// 					>
// 						This portfolio contains interactive experiences best viewed on a
// 						larger screen.
// 					</p>
// 				</div>

// 				{/* Animation container */}
// 				<div
// 					style={{
// 						width: '100%',
// 						maxWidth: deviceType === 'tablet' ? '450px' : '320px',
// 					}}
// 				>
// 					<Page404 />
// 				</div>

// 				{/* Info card */}
// 				<div
// 					style={{
// 						backgroundColor: 'rgba(255, 255, 255, 0.03)',
// 						backdropFilter: 'blur(10px)',
// 						border: '1px solid rgba(255, 255, 255, 0.05)',
// 						borderRadius: '16px',
// 						padding: deviceType === 'tablet' ? '2rem' : '1.5rem',
// 						width: deviceType === 'tablet' ? 'auto' : '90%',
// 						maxWidth: '500px',
// 						boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
// 					}}
// 				>
// 					<p
// 						style={{
// 							color: '#f0f0f0',
// 							fontSize: deviceType === 'tablet' ? '1.2rem' : '1rem',
// 							marginBottom: '1rem',
// 							fontWeight: '400',
// 						}}
// 					>
// 						For the full interactive experience with all animations and
// 						features:
// 					</p>

// 					<p
// 						style={{
// 							color: '#64B5F6',
// 							fontSize: deviceType === 'tablet' ? '1.3rem' : '1.1rem',
// 							fontWeight: '500',
// 							marginBottom: '1.5rem',
// 						}}
// 					>
// 						Please visit on a laptop or desktop
// 					</p>

// 					{/* Contact options */}
// 					<div style={{ marginTop: '1rem' }}>
// 						<p
// 							style={{
// 								color: '#9e9e9e',
// 								fontSize: deviceType === 'tablet' ? '1.1rem' : '0.9rem',
// 								marginBottom: '1rem',
// 							}}
// 						>
// 							Want to get in touch?
// 						</p>

// 						<div
// 							style={{
// 								display: 'flex',
// 								justifyContent: 'center',
// 								gap: '1rem',
// 								flexWrap: 'wrap',
// 							}}
// 						>
// 							<button
// 								style={{
// 									backgroundColor: '#2962FF',
// 									color: 'white',
// 									border: 'none',
// 									padding: '0.8rem 1.5rem',
// 									borderRadius: '8px',
// 									fontSize: '0.9rem',
// 									fontWeight: '500',
// 									cursor: 'pointer',
// 									display: 'flex',
// 									alignItems: 'center',
// 									gap: '0.5rem',
// 									boxShadow: '0 4px 12px rgba(41, 98, 255, 0.3)',
// 								}}
// 								onClick={() =>
// 									(window.location.href = 'mailto:your-email@example.com')
// 								}
// 							>
// 								<span>✉️</span> Email Me
// 							</button>

// 							<button
// 								style={{
// 									backgroundColor: '#333333',
// 									color: 'white',
// 									border: '1px solid rgba(255,255,255,0.1)',
// 									padding: '0.8rem 1.5rem',
// 									borderRadius: '8px',
// 									fontSize: '0.9rem',
// 									fontWeight: '500',
// 									cursor: 'pointer',
// 									display: 'flex',
// 									alignItems: 'center',
// 									gap: '0.5rem',
// 								}}
// 								onClick={() =>
// 									window.open('https://github.com/yourusername', '_blank')
// 								}
// 							>
// 								<span>👨‍💻</span> GitHub
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default ResponselessScreen;

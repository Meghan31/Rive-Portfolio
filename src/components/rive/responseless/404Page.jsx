// import { useRive } from '@rive-app/react-canvas';
// import '../rive-details.scss';

// export default function Page404() {
// 	const { RiveComponent } = useRive(
// 		{
// 			src: '/assets/rive/404/404_page.riv',
// 			stateMachines: 'State Machine 1',

// 			autoplay: true,
// 		},

// 		{
// 			shouldResizeCanvasToContainer: true,
// 		}
// 	);

// 	return (
// 		<div className="error-404">
// 			<RiveComponent />
// 		</div>
// 	);
// }

import { useRive } from '@rive-app/react-canvas';
import { useEffect, useState } from 'react';
import '../rive-details.scss';

export default function Page404() {
	const [containerSize, setContainerSize] = useState({
		width: 'auto',
		height: 'auto',
	});

	// Determine optimal size based on device
	useEffect(() => {
		const updateSize = () => {
			const width = window.innerWidth;

			if (width >= 768) {
				// Tablet and larger
				setContainerSize({
					width: '500px',
					height: '500px',
				});
			} else if (width >= 480) {
				// Larger phones
				setContainerSize({
					width: '400px',
					height: '400px',
				});
			} else {
				// Small phones
				setContainerSize({
					width: '300px',
					height: '300px',
				});
			}
		};

		updateSize();
		window.addEventListener('resize', updateSize);

		return () => window.removeEventListener('resize', updateSize);
	}, []);

	const { RiveComponent } = useRive(
		{
			src: '/assets/rive/404/404_page.riv',
			stateMachines: 'State Machine 1',
			autoplay: true,
		},
		{
			shouldResizeCanvasToContainer: true,
		}
	);

	return (
		<div
			className="error-404"
			style={{
				width: containerSize.width,
				height: containerSize.height,
				margin: '0 auto',
				borderRadius: '12px',
				overflow: 'hidden',
				boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
			}}
		>
			<RiveComponent />
		</div>
	);
}

import { useRive } from '@rive-app/react-canvas';
import React from 'react';
import '../rive-details.scss';

export default function Resume() {
	const { RiveComponent } = useRive(
		{
			src: '/assets/rive/socials/newbuttonrive.riv',
			stateMachines: 'DownloadButton',

			autoplay: true,
		},

		{
			shouldResizeCanvasToContainer: true,
		}
	);

	return (
		<div
			className="rive-resume"
			onClick={() => {
				const link = document.createElement('a');
				link.href = '/assets/Meghasrivardhan-Resume.pdf';
				link.download = 'Meghasrivardhan_CV.pdf';
				link.click();
			}}
		>
			<RiveComponent />
		</div>
	);
}

import { useRive } from '@rive-app/react-canvas';
import '../rive-details.scss';

export default function Resume() {
	const { RiveComponent } = useRive(
		{
			src: '/assets/rive/socials/buttonnocv.riv',
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
				link.href = '/assets/resume.pdf';
				link.download = 'Portfolio-Guy-Meghasrivardhan_CV.pdf';
				link.click();
			}}
		>
			<RiveComponent />
		</div>
	);
}

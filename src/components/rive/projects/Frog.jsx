import { useRive } from '@rive-app/react-canvas';
import './Projects.scss';
export default function Frog() {
	const { RiveComponent } = useRive(
		{
			src: '/assets/rive/projects/frog.riv',
			stateMachines: 'frog',
			autoplay: true,
		},

		{
			shouldResizeCanvasToContainer: true,
		}
	);

	return (
		<div className="project-bg">
			<RiveComponent />
		</div>
	);
}

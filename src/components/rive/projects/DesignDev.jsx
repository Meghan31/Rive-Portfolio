import { useRive } from '@rive-app/react-canvas';
import './Projects.scss';
export default function DesignDev() {
	const { rive, RiveComponent } = useRive(
		{
			src: '/assets/rive/projects/designsdev.riv',
			stateMachines: 'State Machine 1',
			autoplay: true,
		}

		// {
		// 	shouldResizeCanvasToContainer: true,
		// }
	);

	return (
		<div className="project-tile">
			<RiveComponent />
		</div>
	);
}

import { useRive } from '@rive-app/react-canvas';
import './Projects.scss';
export default function AppDev() {
	const { RiveComponent } = useRive(
		{
			src: '/assets/rive/projects/appdev.riv',
			stateMachines: 'State Machine 1',
			autoplay: true,
		},

		{
			shouldResizeCanvasToContainer: true,
		}
	);

	return (
		<div className="project-tile">
			<RiveComponent />
		</div>
	);
}

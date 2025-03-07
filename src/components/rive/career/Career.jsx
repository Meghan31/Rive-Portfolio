import { useRive } from '@rive-app/react-canvas';
import './Career.scss';
export default function Career() {
	const { RiveComponent } = useRive(
		{
			src: '/assets/rive/career/no-bg-career.riv',
			stateMachines: 'State Machine 1',
			autoplay: true,
		},

		{
			shouldResizeCanvasToContainer: true,
		}
	);

	return (
		<div className="career-path">
			<RiveComponent />
		</div>
	);
}

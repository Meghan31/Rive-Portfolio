import { useRive } from '@rive-app/react-canvas';
import '../rive-details.scss';
export default function HC() {
	const { RiveComponent } = useRive(
		{
			src: '/assets/rive/parallax/hc.riv',
			stateMachines: 'State Machine 1',
			autoplay: true,
		},

		{
			shouldResizeCanvasToContainer: true,
		}
	);

	return (
		<div className="hc">
			<RiveComponent />
		</div>
	);
}

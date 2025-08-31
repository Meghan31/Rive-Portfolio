import { useRive } from '@rive-app/react-canvas';
import '../rive-details.scss';

export default function HangerMan() {
	const { RiveComponent } = useRive(
		{
			src: '/assets/rive/hangerMan/hangingman.riv',
			stateMachines: 'State Machine 1',

			autoplay: true,
		},

		{
			shouldResizeCanvasToContainer: true,
		}
	);

	return (
		<div className="rive-hangerman">
			<RiveComponent />
		</div>
	);
}

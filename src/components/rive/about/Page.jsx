import { useRive } from '@rive-app/react-canvas';
import '../rive-details.scss';

export default function Page() {
	const { RiveComponent } = useRive(
		{
			src: '/assets/rive/about/withpen.riv',
			stateMachines: 'State Machine 1',
			autoplay: true,
		},

		{
			shouldResizeCanvasToContainer: true,
		}
	);

	return (
		<div className="page">
			<RiveComponent />
		</div>
	);
}

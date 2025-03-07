import { useRive } from '@rive-app/react-canvas';
import '../rive-details.scss';

export default function Page404() {
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
		<div className="error-404">
			<RiveComponent />
		</div>
	);
}

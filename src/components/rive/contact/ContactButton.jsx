import { useRive } from '@rive-app/react-canvas';
import '../rive-details.scss';
export default function ContactButton() {
	const { RiveComponent } = useRive(
		{
			src: '/assets/rive/contact/contact_button.riv',
			stateMachines: 'Button Anim',
			autoplay: true,
		},

		{
			shouldResizeCanvasToContainer: true,
		}
	);

	return (
		<div className="contact-button">
			<RiveComponent />
		</div>
	);
}

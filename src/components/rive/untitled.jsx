import { useRive } from "@rive-app/react-canvas";
import "./rive-details.scss";

export default function Untitled() {
  const { RiveComponent } = useRive(
    {
      src: "/assets/rive/education/untitled.riv",
      stateMachines: "State Machine 1",

      autoplay: true,
    },

    {
      shouldResizeCanvasToContainer: true,
    }
  );

  return (
    <div className="untitled">
      <RiveComponent />
    </div>
  );
}

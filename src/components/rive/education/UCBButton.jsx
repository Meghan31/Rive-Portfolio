import { useRive } from "@rive-app/react-canvas";

export default function UCB() {
  const { rive, RiveComponent } = useRive(
    {
      src: "/assets/rive/education/ucb.riv",
      stateMachines: "State Machine 1",
      autoplay: true,
    },

    {
      shouldResizeCanvasToContainer: true,
    }
  );

  return (
    <div className="edu-button">
      <RiveComponent />
    </div>
  );
}

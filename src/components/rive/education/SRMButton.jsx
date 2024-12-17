import { useRive } from "@rive-app/react-canvas";

export default function EducationButton() {
  const { rive, RiveComponent } = useRive(
    {
      src: "/assets/rive/education/srm.riv",
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

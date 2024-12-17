import React from "react";
import { useRive } from "@rive-app/react-canvas";
import "../rive-details.scss";

export default function GitHub() {
  const { RiveComponent } = useRive(
    {
      src: "/assets/rive/socials/github.riv",
      stateMachines: "github_ani",

      autoplay: true,
    },

    {
      shouldResizeCanvasToContainer: true,
    }
  );

  return (
    <div
      className="rive-github"
      onClick={() => window.open("https://github.com/Meghan31", "_blank")}
    >
      <RiveComponent />
    </div>
  );
}

import { FC } from "react";

interface StageLightsProps {
  mode?: "inside" | "outside";
}

const StageLights: FC<StageLightsProps> = ({ mode = "inside" }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Amber light */}
      <div
        className="stage-light stage-light-amber"
        style={{
          width: "500px",
          height: "500px",
          top: "10%",
          left: "5%",
          opacity: mode === "inside" ? 0.5 : 0.2,
          transition: "opacity 1s ease",
        }}
      />
      {/* Blue light */}
      <div
        className="stage-light stage-light-blue"
        style={{
          width: "600px",
          height: "600px",
          top: "30%",
          right: "-5%",
          opacity: mode === "outside" ? 0.5 : 0.25,
          transition: "opacity 1s ease",
        }}
      />
      {/* Magenta light */}
      <div
        className="stage-light stage-light-magenta"
        style={{
          width: "450px",
          height: "450px",
          bottom: "10%",
          left: "30%",
          transition: "opacity 1s ease",
        }}
      />
      {/* Violet light */}
      <div
        className="stage-light stage-light-violet"
        style={{
          width: "550px",
          height: "550px",
          top: "60%",
          right: "20%",
          opacity: mode === "outside" ? 0.45 : 0.25,
          transition: "opacity 1s ease",
        }}
      />
      {/* Extra amber for warmth */}
      <div
        className="stage-light stage-light-amber"
        style={{
          width: "400px",
          height: "400px",
          bottom: "30%",
          right: "40%",
          animationDelay: "-8s",
          opacity: mode === "inside" ? 0.4 : 0.15,
          transition: "opacity 1s ease",
        }}
      />
      {/* Extra blue for cool */}
      <div
        className="stage-light stage-light-blue"
        style={{
          width: "350px",
          height: "350px",
          top: "5%",
          left: "50%",
          animationDelay: "-12s",
          opacity: mode === "outside" ? 0.4 : 0.15,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
};

export default StageLights;

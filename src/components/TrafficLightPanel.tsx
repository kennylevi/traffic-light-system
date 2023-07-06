import React, { useState, useEffect } from "react";
import { ActionButton, TrafficLightPanelContainer } from "./styles/styles";
import TrafficLightSign from "./TrafficLightSign";

let timer: any = null;

const TrafficLightPanel: React.FC = () => {
  const [trafficState, setTrafficState] = useState<string>("A_GREEN_B_RED");

  const [phase1, setPhase1] = useState<string>("green");
  const [phase2, setPhase2] = useState<string>("red");

  const switchPhase = (): void => {
    switch (trafficState) {
      case "A_GREEN_B_RED":
        setTrafficState("A_YELLOW_B_RED");
        break;

      case "A_YELLOW_B_RED":
        setTrafficState("A_RED_B_GREEN");
        break;

      case "A_RED_B_GREEN":
        setTrafficState("A_RED_B_YELLOW");
        break;

      case "A_RED_B_YELLOW":
        setTrafficState("A_GREEN_B_RED");
        break;
    }

    updateTrafficLights();
  };

  const getPhaseDuration = (phase: string) => {
    return phase === "A_YELLOW_B_RED" || phase === "A_RED_B_YELLOW"
      ? 5000
      : 10000;
  };

  const reset = (): void => {
    clearInterval(timer);
    timer = null;
    setTrafficState("A_GREEN_B_RED");
    updateTrafficLights();
    getPhaseDuration(trafficState);
  };

  useEffect(() => {
    timer = setInterval(() => {
      switchPhase();
    }, getPhaseDuration(trafficState));

    return () => clearInterval(timer);
  }, [trafficState]);

  const updateTrafficLights = () => {
    switch (trafficState) {
      case "A_GREEN_B_RED":
        setPhase1("green");
        setPhase2("red");
        break;

      case "A_YELLOW_B_RED":
        setPhase1("yellow");
        setPhase2("red");
        break;

      case "A_RED_B_GREEN":
        setPhase1("red");
        setPhase2("green");
        break;

      case "A_RED_B_YELLOW":
        setPhase1("red");
        setPhase2("yellow");
        break;
    }
  };

  return (
    <TrafficLightPanelContainer>
      <TrafficLightSign styles={{ top: "0.5%", right: "46%" }} color={phase1} />
      <TrafficLightSign styles={{ top: "40%", right: "15%" }} color={phase2} />
      <TrafficLightSign styles={{ top: "40%", left: "15%" }} color={phase2} />
      <TrafficLightSign
        styles={{ bottom: "-3%", left: "45%" }}
        color={phase1}
      />
      <div className="action__container">
        {/* <ActionButton>Submit</ActionButton> */}
        <ActionButton onClick={reset}>Reset</ActionButton>
      </div>
      <div className="vertical1 vertical"></div>
      <div className="horizontal"></div>
      <div className="vertical2 vertical"></div>
    </TrafficLightPanelContainer>
  );
};

export default TrafficLightPanel;

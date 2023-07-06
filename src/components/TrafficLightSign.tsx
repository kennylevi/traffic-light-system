import React from "react";
import {
  TrafficSign,
  TrafficSignStyledContainer
} from "./styles/traffic-signs.style";

export interface PropI {
  styles: { top?: string; bottom?: string; right?: string; left?: string };
  color: string;
}

const TrafficLightSign: React.FC<PropI> = ({ styles, color }) => {
  return (
    <TrafficSignStyledContainer style={styles}>
      <TrafficSign color={color === "green" ? color : ""} />
      <TrafficSign color={color === "yellow" ? color : ""} />
      <TrafficSign color={color === "red" ? color : ""} />
    </TrafficSignStyledContainer>
  );
};

export default TrafficLightSign;

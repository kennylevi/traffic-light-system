import styled from "styled-components";
import { PropI } from "../TrafficLightSign";

export const TrafficSignStyledContainer = styled.div<PropI>`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  width: 40px;
  background-color: #ffc157;
  padding: 5px;
  border-radius: 10px;
  justify-items: center;
  align-items: center;
  right: ${(props: PropI) => props.styles?.right};
  top: ${(props: PropI) => props.styles?.top};

  .panel1 {
    right: 20px;
  }
`;

export const TrafficSign = styled.div<{ color: string }>`
  width: 20px;
  margin-bottom: 5px;
  background-color: ${(props: any) => props?.color || "#d2a848"};
  padding: 15px 5px;
  border-radius: 50px;
`;

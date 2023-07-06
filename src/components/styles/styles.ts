import styled from "styled-components";

export const TrafficLightPanelContainer = styled.div`
  height: 500px;
  width: 600px;
  margin: 10% auto;
  position: relative;

  .vertical1 {
    position: absolute;
    width: 20%;
    height: 40%;
    top: -1%;
    z-index: 99;
    right: 40%;
    border: 4px solid gold;
    border-bottom: 0 solid transparent;
  }

  .vertical2 {
    position: absolute;
    width: 20%;
    height: 40%;
    bottom: -4.5%;
    z-index: 99;
    right: 40%;
    border: 4px solid gold;
    border-top: 0 solid transparent;
  }

  .horizontal {
    position: absolute;
    width: 100%;
    height: 120px;
    border: 4px solid gold;
    transform: translateY(152%);
  }
`;

export const ActionButton = styled.button`
  padding: 4px;
  margin-bottom: 20px;
  background-color: green;
  border: 1px solid transparent;
  padding: 0.3rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
`;

import * as React from "react";
import styled from "styled-components";

const PortDefaultOuter = styled.div`
  width: 24px;
  height: 24px;
  background: ${props =>
    props.port.type === "output"
      ? props.port.properties && props.port.properties.value === "yes"
        ? "yellow"
        : "red"
      : "black"};
  cursor: pointer;
  display: flex;
  /* background: ${props => (props.active ? "cornflowerblue" : "grey")}; */
  justify-content: center;
  align-items: center;
`;

const CustomPort = ({ isLinkSelected, isLinkHovered, config, port }) => {
  console.log(port);
  return (
    <PortDefaultOuter
      port={port}
      active={!config.readonly && (isLinkSelected || isLinkHovered)}
    >
      {port && port.properties && port.properties.value === "yes" && (
        <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
          <path
            fill="black"
            d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
          />
        </svg>
      )}
      {port && port.properties && port.properties.value === "no" && (
        <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
          <path
            fill="white"
            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
          />
        </svg>
      )}
      {!port ||
        (!port.properties && (
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path
              fill="white"
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            />
          </svg>
        ))}
    </PortDefaultOuter>
  );
};
export default CustomPort;

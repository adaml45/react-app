import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: ${props => (props.topNavOverlay ? "0px" : "50px")};
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--Overlay);
  z-index: 9;
`;

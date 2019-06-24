import styled from "styled-components";

export const ButtonWrap = styled.button`
  text-transform: capitalize;
  font-size: 15px;
  background: ${props => (props.save ? "var(--DarkBlue)" : "transparent")};
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  margin: 2px;
  color: ${props => (props.save ? "var(--White)" : "var(--LightBlue)")};
  transition: all 0.5s ease;
  &:hover {
    background: var(--LightBlue);
    color: var(--White);
    border: 1px solid var(--LightBlue);
  }
  &:focus {
    outline: none;
  }
`;

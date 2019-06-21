import styled from "styled-components";

export const ButtonWrap = styled.button`
  text-transform: capitalize;
  font-size: 15px;
  background: ${props => (props.save ? "var(--DarkBlue)" : "var(--lightBlue)")};
  border: 1px solid var(--lightBlue);
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  margin: 2px;
  color: var(--White);
  transition: all 0.5s ease;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;

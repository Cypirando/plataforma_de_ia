import { styled } from "styled-components";

const Container = styled.div`
  padding: 10px;
  border-radius: 16px;
  border: 1px solid black;
  background-color: rgb(1 0 8 / 50%);
  width: 90%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr auto;
`;

export { Container};

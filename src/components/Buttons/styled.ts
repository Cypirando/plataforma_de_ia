import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: rgb(1 0 8 / 50%);
  justify-content: space-between;
  padding: 15px;
  border-radius: 16px;
  border: 1px solid black;
  align-items: center;
`;

const CardButton = styled.div`
  padding: 10px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const BorderIcons = styled.div`
  padding: 10px;
  border-radius: 16px;
  border: 1px solid black;
`;

export { Container, BorderIcons, CardButton };

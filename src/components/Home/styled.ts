import styled from "styled-components";

const Container = styled.span`
  width: 1216px;
  height: 866px;
  display: flex;
  opacity: 0.5;
  background-color: #711f6d;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

const CardBox = styled.div`
  
  width: 682px;
  height: 682px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Card = styled.div`
  width: 530px;
  height: 432px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Divider = styled.hr`
  height: 0.3px;
  background-color: gray;
  margin: 20px 0;
  width: 80%;
`;
export { Container, CardBox, Texts, Card, Divider };

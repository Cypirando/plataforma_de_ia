import styled from "styled-components";

const Conatiner = styled.span`
  width: 1216px;
  height: 866px;
  display: flex;
  opacity: 0.5;
  background-color: #020617;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CardBox = styled.div`
  width: 682px;
  height: 682px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Card = styled.div`
  width: 608px;
  height: 432px;
`;

export { Conatiner, CardBox, Texts, Card };

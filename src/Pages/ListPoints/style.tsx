import styled from "styled-components";
import { Container } from "../../commonStyles";

export const GridPoints = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 0 auto;
  width: 90%;
  margin: 2rem 0;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  @media(min-width: 768px) and (max-width: 1023px){
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: auto;
  }
`;
export const BigContainer = styled(Container)`
  width: 85%;

  @media (max-width: 767px) {
    width: 85%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 90%;
  }
`;

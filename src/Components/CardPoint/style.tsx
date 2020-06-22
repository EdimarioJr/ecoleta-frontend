import styled from "styled-components";

export const CardContainer = styled.section`
  border-radius: 7px;
  background-color: white;
  width: 400px;
  font-size: 1rem;

  @media(max-width: 399px){
    width: 310px;
  }

  @media(min-width: 400px) and (max-width: 800px){
    width: 340px;
  }

  @media(min-width: 1280px) and (max-width: 1400px){
    width: 350px;
  }
`;

export const CardInfo = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 1rem;

  h2,
  h3 {
    margin: 1rem 0;
  }

  h4:nth-child(3){
    margin-bottom: 1rem;
  }
`;

export const FlexItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow-x: scroll;
  grid-gap: 1rem;
`;

export const DivImage = styled.div<{ image: string }>`
  width: 100%;
  border-radius: 7px 7px 0 0;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-size: 100% 200px;
  background-repeat: no-repeat;
`;
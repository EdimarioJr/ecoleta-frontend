import styled from "styled-components";

export const DivUpload = styled.section`
  width: 100%;
  height: 20rem;
  border-radius: 7px;
  background-color: #e1faec;
  margin: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  @media(max-width: 767px){
    height: 13rem;
    margin: 2rem 0;
  }
`;

export const DragArea = styled.div`
  width: 90%;
  height: 85%;
  border: 2px dashed #74dca4;
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 10px;
  }
`;

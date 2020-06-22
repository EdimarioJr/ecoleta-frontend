import styled from "styled-components";
import { OverlayBox } from "../../commonStyles";

export const FormContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 3rem;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 5rem;

  h2 {
    margin-bottom: 3rem;
  }

  p {
    color: #6c6c80;
    font-size: 0.8rem;
  }

  @media(max-width: 767px){
    width: 100%;
    padding: 1.1rem;
  }

  @media(min-width: 768px) and (max-width: 1023px){
    width: 80%;
    padding: 2rem;
  }

  @media(min-width: 1024px) and (max-width: 1280px){
    width: 70%;
  }
`;

export const DataGrid = styled.form`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  p {
    margin-bottom: 0.3rem;
  }

  #wpp {
    width: 50%;
  }

  @media(max-width: 767px){
    margin-top: 1rem;
  }
`;

export const DivMap = styled.div`
  width: 100%;
  height: 20rem;
  max-width: none;
  min-width: none;
  background-color: #f0f0f5;
  border-radius: 7px;
  margin: 3rem 0;

  @media(max-width: 767px){
    margin: 2rem 0;
  }
`;

export const AddressGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "a b";
  grid-gap: 1rem;
  margin-bottom: 3rem;

  p {
    margin-bottom: 0.3rem;
  }

  div:nth-child(1) {
    grid-area: a;
  }

  div:nth-child(2) {
    grid-area: b;
  }
`;

export const ConfirmSubmitBox = styled(OverlayBox)`
  position: sticky;
`
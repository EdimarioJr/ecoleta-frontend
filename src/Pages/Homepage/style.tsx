import styled from "styled-components";
import { Button } from "../../commonStyles";

export const BackgroundContainer = styled.div<{ back: string }>`
  width: 100%;
  height: 80vh;
  background-image: url(${(props) => props.back});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 820px;

  @media (max-width: 767px) {
    background-size: 0px;

    h1 {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 100vh;
    background-size: 700px;
    background-position: right bottom;
  }
`;

export const Main = styled.main`
  width: 50%;
  white-space: pre;

  h1 {
    padding: 7rem 0 2rem 0;
    font-weight: 800;
    font-size: max(4vw, 40px);
  }

  h3 {
    color: #6c6c80;
    font-weight: 300;
    margin-bottom: 2.5rem;
    line-height: 2.5rem;
  }

  @media (max-width: 767px) {
    white-space: normal;
    width: 100%;

    h1 {
      padding: 1rem 0 1rem 0;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    h1 {
      font-size: 7vw;
      line-height: 5rem;
    }

    h3 {
      font-size: 4vw;
    }
  }
`;

export const ButtonNew = styled(Button)`
  border-radius: 0 7px 7px 0;
  width: 100%;

  @media (max-width: 767px) {
    height: 4rem;
    width: 100%;
    padding: 1rem 0;
  }
`;

export const SearchButton = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #2fb86e;
  align-items: center;
  width: 20rem;
  border-radius: 7px;
  padding-left: 1.4rem;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 15rem;
    height: 4rem;
    padding-left: 1rem;
  }
`;

export const SearchForm = styled.form`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;

  h2 {
    margin-bottom: 2rem;
  }

  @media (max-width: 767px) {
    width: 300px;
    height: 300px;
  }
`;

export const InputSearch = styled.input.attrs((props) => ({
  type: "text",
  placeholder: props.placeholder,
}))`
  ::placeholder {
    color: #a0a0b2;
  }

  border: none;
  width: 100%;
  padding: 1rem 0 1rem 1.5rem;
  margin-bottom: 0.5rem;
  border-radius: 7px;
  font-size: 0.9rem;
`;

export const ButtonForm = styled(Button)`
  width: 100%;
  padding: 1rem;
`;

export const AddressGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  p {
    margin-bottom: 0.5rem;
  }
`;

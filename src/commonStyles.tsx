import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  @media(max-width: 767px){
    width: 85%;
  }

  @media(min-width: 768px) and (max-width: 1023px){
    width: 90%;
  }
`;

export const Button = styled.button`
  color: white;
  background-color: #34cb79;
  text-align: center;
  vertical-align: center;
  padding: 1.4rem 2.5rem;
  border-radius: 7px;
  border: none;
  cursor: pointer;
`;

export const OverlayBox = styled.div<{ show: boolean }>`
  height: 100vh;
  width: 100%;
  background-color: rgba(25,22,31,0.95);
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  color: white;
  font-weight: 800;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  bottom: 0;
  overflow: hidden;

  h1{
    margin-top: 30px;
  }
`;

export const FlexRowBetween = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 767px){
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder || "",
  type: "text",
  name: props.name
}))`
  width: 100%;
  padding: 1rem;
  background-color: #f0f0f5;
  border-radius: 7px;
  border: none;
`;

export const GridItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  margin: 2rem 0;

  @media(max-width: 767px){
    grid-template-columns: repeat(2,1fr);
    grid-gap: 0.5rem;
    align-self: center;
  }
`;
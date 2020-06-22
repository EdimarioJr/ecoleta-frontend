import styled from "styled-components";

export const ItemCard = styled.div<{ selected?: boolean }>`
display: flex;
cursor: pointer;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 7px;
width: 170px;
height: 170px;
background-color: ${(props) => (props.selected ? "#e1faec" : "#f0f0f5")};
border: ${(props) => (props.selected ? "2px solid #34cb79" : "none")};

p {
  font-size: 0.8rem;
  margin-top: 2rem;
  color: #322153 !important;
  font-weight: 600;
  text-align: center;
}

@media(max-width: 767px){
  width: 100px;
  height: 100px;
  padding: 1rem;

  img{
    width: 40px;
  }

  p{
    margin-top: 0.5rem;
  }
}

@media(min-width: 768px) and (max-width: 1023px){
  width: 150px;
  height: 150px;
  padding: 1rem;

  img{
    width: 70px;
  }

  p{
    margin-top: 1rem;
  }
}

`;
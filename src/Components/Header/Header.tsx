import React from "react";
import styled from "styled-components";
import { Container } from "../../commonStyles";
import logo from "../../assets/logo.svg";

const HeaderGrid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;


  @media(max-width:767px){
    flex-direction: column;
    justify-content: center;

    img{
      margin-bottom: 1rem;
    }
  }
`;

interface props{
  children?: any;
}

const Header:React.FC<props> = (props) => {
  return (
    <>
      <Container>
        <HeaderGrid>
          <img src={logo} alt="logo" />
          {props.children}
        </HeaderGrid>
      </Container>
    </>
  );
};

export default Header;

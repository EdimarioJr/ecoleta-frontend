import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, OverlayBox } from "../../commonStyles";
import Header from "../../Components/Header/Header";
import HeaderButton from "../../Components/HeaderButton/HeaderButton";
import background from "../../assets/home-background.svg";
import AdressForm from "../../Components/AddressForm/AddressForm";
import {
  BackgroundContainer,
  Main,
  SearchButton,
  ButtonNew,
  SearchForm,
  AddressGrid,
  ButtonForm,
} from "./style";
import { FiSearch } from "react-icons/fi";

function Homepage() {
  const [searchOn, setSearchOn] = useState(false);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  function handleClickOverlay(event: any) {
    if (event.target.id === "box") setSearchOn(false);
  }

  return (
    <>
      <Header>
        <Link style={{ textDecoration: "none" }} to="/register-point">
          <HeaderButton
            buttonTxt="Cadastre seu ponto de coleta"
            buttonIcon="home"
          />
        </Link>
      </Header>
      <BackgroundContainer back={background}>
        <Container>
          <Main>
            <h1>
              Seu marketplace <br />
              de coleta de resíduos.
            </h1>
            <h3>
              Ajudamos as pessoas a encontrarem pontos <br />
              de coleta de forma eficiente.
            </h3>
            <SearchButton onClick={() => setSearchOn(true)}>
              <FiSearch size="30px" color="white" />
              <ButtonNew>
                <h4>Pesquisar pontos de coleta</h4>
              </ButtonNew>
            </SearchButton>
          </Main>
        </Container>
      </BackgroundContainer>
      <OverlayBox id="box" show={searchOn} onClick={handleClickOverlay}>
        <SearchForm id="search" onClick={handleClickOverlay}>
          <h2>Pontos de coleta</h2>
          <AddressGrid>
            <AdressForm selectedCity={setCity} selectedUf={setState} />
          </AddressGrid>

          <Link
            style={{ width: "100%" }}
            to={{
              pathname: "/list-points",
              state: {
                city,
                state,
              },
            }}
          >
            <ButtonForm>
              <h4>Buscar</h4>
            </ButtonForm>
          </Link>
        </SearchForm>
      </OverlayBox>
    </>
  );
}

export default Homepage;

import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import HeaderButton from "../../Components/HeaderButton/HeaderButton";
import api from "../../services/api";
import CardPoint from "../../Components/CardPoint/CardPoint";
import { Item } from "../RegisterPoint/RegisterPoint";
import { GridPoints, BigContainer } from "./style";

interface props {
  location: any;
}

export interface Point {
  name: string;
  latitude: number;
  longitude: number;
  url_image: string;
  email: string;
  whatsapp: string;
  items: Item[];
  id: number;
  image: string;
}

const ListPoints: React.FC<props> = (props) => {
  const { city, state } = props.location.state;
  const [points, setPoints] = useState([] as Point[]);

  useEffect(() => {
    async function fetchPoints() {
      await api
        .get(`/points/?city=${city}&uf=${state}`)
        .then((response) => setPoints(response.data.points));
    }

    fetchPoints();
  }, [city, state]);

  return (
    <>
      <Header>
        <Link style={{ textDecoration: "none" }} to="/">
          <HeaderButton buttonTxt="Voltar para home" buttonIcon="back" />
        </Link>
      </Header>
      <BigContainer>
        {console.log(points)}
        <h2>
          Pontos de coleta em {city}, {state}
        </h2>
        <GridPoints>
          {points
            ? points.map((point) => {
                return <CardPoint pointData={point} key={point.id} />;
              })
            : ""}
        </GridPoints>
      </BigContainer>
    </>
  );
};

export default ListPoints;

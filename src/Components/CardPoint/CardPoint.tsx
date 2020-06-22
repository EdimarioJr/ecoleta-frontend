import React from "react";
import { Point } from "../../Pages/ListPoints/ListPoints";
import { Map, TileLayer, Marker } from "react-leaflet";
import CardItem from "../CardItem/CardItem";
import { CardContainer, DivImage, CardInfo, FlexItems } from "./style";

const CardPoint: React.FC<{ pointData: Point }> = (props) => {
  const {
    name,
    latitude,
    longitude,
    url_image,
    email,
    whatsapp,
    items,
  } = props.pointData;

  return (
    <>
      <CardContainer>
        <DivImage image={url_image} />
        <CardInfo>
          <h2>{name.toUpperCase()}</h2>
          <h4>Telefone: {whatsapp}</h4>
          <h4>Email: {email}</h4>
          <Map
            style={{ height: "15rem", width: "100%" }}
            center={[latitude, longitude]}
            zoom={15}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]} />
          </Map>
          <h3>Items</h3>
          <FlexItems>
            {items.map((item) => (
              <CardItem key={item.id} url={item.url_image} title={item.title} />
            ))}
          </FlexItems>
        </CardInfo>
      </CardContainer>
    </>
  );
};

export default CardPoint;

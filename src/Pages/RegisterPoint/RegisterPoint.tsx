import React, { useEffect, useState, ChangeEvent } from "react";
import { useHistory, Link } from "react-router-dom";
import Dropzone from "../../Components/Dropzone/Dropzone";
import { Map, TileLayer, Marker } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import {
  Container,
  FlexRowBetween,
  Button,
  Input,
  GridItems,
} from "../../commonStyles";
import {
  FormContainer,
  DataGrid,
  DivMap,
  AddressGrid,
  ConfirmSubmitBox,
} from "./style";
import api from "../../services/api";
import Header from "../../Components/Header/Header";
import HeaderButton from "../../Components/HeaderButton/HeaderButton";
import CardItem from "../../Components/CardItem/CardItem";
import AdressForm from "../../Components/AddressForm/AddressForm";
import { FiCheckCircle } from "react-icons/fi";


export interface Item {
  id: number;
  title: string;
  url_image: string;
}

interface Contact {
  email: string;
  whatsapp: string;
  name: string;
}

function RegisterPoint() {
  const [dbItems, setDbItems] = useState([] as Item[]);
  const [items, setItems] = useState([] as string[]);
  const [initialPosition, setInitialPosition] = useState([0, 0] as [
    number,
    number
  ]);

  const [contact, setContact] = useState<Contact>({
    email: "",
    whatsapp: "",
    name: "",
  });
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [position, setPosition] = useState([0, 0] as [number, number]);
  const [image, setImage] = useState<File>();

  const history = useHistory();
  const [buttonFlag, setPostButtonFlag] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
      await api.get("/items").then((response) => setDbItems(response.data));
    }

    fetchData();
  }, []);

  function handleInputContact(event: ChangeEvent<HTMLInputElement>) {
    let newContact = {
      ...contact,
      [event.target.name]: event.target.value,
    };
    setContact(newContact);
  }

  function handleClickItem(id: string) {
    let itemsNew = items;
    if (itemsNew.find((element) => element === id)) {
      itemsNew.splice(itemsNew.indexOf(id), 1);
      setItems(itemsNew);
    } else {
      itemsNew.push(id);
      setItems(itemsNew);
    }
  }

  function handleClickMap(event: LeafletMouseEvent) {
    setPosition([event.latlng.lat, event.latlng.lng]);
  }

  async function handleSubmit() {
    const [latitude, longitude] = position;
    const data = new FormData();

    data.append("name", contact.name);
    data.append("city", city);
    data.append("uf", uf);
    data.append("email", contact.email);
    data.append("whatsapp", contact.whatsapp);
    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));
    data.append("items", items.join(","));
    if (image) data.append("image", image);

    const arrayForm = Object.values(data);
    for (let i = 0; i < arrayForm.length; i++) {
      let current = arrayForm[i];
      if (!current) {
        alert("Preencha todos os campos!");
        return;
      }
      if (Array.isArray(current)) {
        if (current.length === 0) {
          alert("Preencha os items!");
          return;
        }
      }
    }
    console.log({
      ...contact,
      ...position,
      city,
      uf,
      image,
    });
    await api.post("/points", data);
    setPostButtonFlag(true);
    setTimeout(() => history.push("/"), 2000);
  }

  return (
    <>
      <Header>
        <Link style={{ textDecoration: "none" }} to="/">
          <HeaderButton buttonTxt="Voltar para home" buttonIcon="back" />
        </Link>
      </Header>
      <Container>
        <FormContainer>
          <h2>
            Cadastro do <br /> ponto de coleta
          </h2>
          <Dropzone onImageUpload={setImage} />
          <h3>Dados</h3>
          <DataGrid>
            <div>
              <p>Nome da entidade</p>
              <Input name="name" onChange={handleInputContact} />
            </div>
            <div>
              <p>E-mail</p>
              <Input name="email" onChange={handleInputContact} />
            </div>
            <div>
              <p>Whatsapp</p>
              <Input
                name="whatsapp"
                placeholder="(   )"
                id="wpp"
                onChange={handleInputContact}
              />
            </div>
          </DataGrid>
          <FlexRowBetween>
            <h3>Endereço</h3>
            <p>Selecione o endereço no mapa</p>
          </FlexRowBetween>

          <DivMap>
            <Map
              style={{ height: "20rem", width: "100%" }}
              center={initialPosition}
              zoom={15}
              onClick={handleClickMap}
            >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} />
            </Map>
          </DivMap>
          <AddressGrid>
            <AdressForm selectedCity={setCity} selectedUf={setUf} />
          </AddressGrid>

          <FlexRowBetween>
            <h3>Itens de coleta</h3>
            <p>Selecione um ou mais items abaixo</p>
          </FlexRowBetween>
          <GridItems>
            {dbItems.map((item) => {
              return (
                <div
                  key={String(item.id)}
                  onClick={() => handleClickItem(String(item.id))}
                >
                  <CardItem url={item.url_image} title={item.title} />
                </div>
              );
            })}
          </GridItems>
          <Button onClick={handleSubmit}>Cadastrar ponto de coleta</Button>
        </FormContainer>
      </Container>
      <ConfirmSubmitBox show={buttonFlag}>
        <FiCheckCircle color="green" size="70" />
        <h1>Cadastro Confirmado!</h1>
      </ConfirmSubmitBox>
    </>
  );
}

export default RegisterPoint;

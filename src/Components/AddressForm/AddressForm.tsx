import React, { useEffect, useState } from "react";
import ibge from "../../services/ibge";
import { Select } from "./style";

interface AddressProps {
  selectedCity: (a: string) => void;
  selectedUf: (a: string) => void;
}

interface IBGEstates {
  id: number;
  nome: string;
  sigla: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  };
}

const AddressForm: React.FC<AddressProps> = (props) => {
  const [ufs, setUfs] = useState([] as string[]);
  const [cities, setCities] = useState([] as string[]);

  const [selectedUf, setSelectedUf] = useState("");

  useEffect(() => {
    async function fetchStates() {
      await ibge.get("/estados?orderBy=nome").then((response) => {
        let ufs = response.data.map((current: IBGEstates) => {
          return current.sigla;
        });
        setUfs(ufs);
      });
    }

    fetchStates();
  }, []);

  useEffect(() => {
    async function fetchCities() {
      await ibge
        .get(`/estados/${selectedUf}/municipios`)
        .then((response) => {
          setCities(response.data)
          alert(selectedUf)
        });
    }

    fetchCities();
  }, [selectedUf]);

  return (
    <>
      <div>
        <p>Estado</p>
        <Select
          onChange={(event: any) => {
            props.selectedUf(event.target.value);
            setSelectedUf(event.target.value)
            
          }}
          defaultValue="UF"
        >
          {ufs.map((uf: string, index: number) => {
            return (
              <option
                key={index}
                value={uf}
              >
                {uf}
              </option>
            );
          })}
        </Select>
      </div>
      <div>
        <p>Cidade</p>
        <Select
          onChange={(event: any) => {
            props.selectedCity(event.target.value);
            console.log(event.target.value);
          }}
        >
          {selectedUf ? (
            cities.map((city: any, index: number) => {
              return (
                <option key={index} value={city.nome}>
                  {city.nome}
                </option>
              );
            })
          ) : (
            <option>Selecione um Estado</option>
          )}
        </Select>
      </div>
    </>
  );
};

export default AddressForm;

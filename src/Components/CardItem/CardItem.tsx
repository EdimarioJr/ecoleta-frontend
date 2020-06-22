import React, { useState } from "react";
import {ItemCard} from "./style"


interface props {
  url: string;
  title: string;
}

const CardItem: React.FC<props> = (props) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <ItemCard
      onClick={() => {
        setSelected(!selected);
      }}
      selected={selected}
    >
      <img src={props.url} alt="item" />
      <p>{props.title}</p>
    </ItemCard>
  );
};

export default CardItem;

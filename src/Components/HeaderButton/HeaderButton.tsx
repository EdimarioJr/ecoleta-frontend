import React from "react";
import { Button } from "./style";

import { FiLogIn } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

interface props {
  buttonTxt: string;
  buttonIcon: string;
}

const HeaderButton: React.FC<props> = (props) => {
  return (
    <>
      <Button>
        {props.buttonIcon === "back" ? (
          <FiArrowLeft color="green" size="20px" />
        ) : (
          <FiLogIn color="green" size="20px" />
        )}

        <h4>{props.buttonTxt}</h4>
      </Button>
    </>
  );
};

export default HeaderButton;

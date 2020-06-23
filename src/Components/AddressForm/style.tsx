import styled from "styled-components";

export const Select = styled.select`
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
width: 100%;
padding: 1rem;
background-color: #f0f0f5;
border-radius: 7px;
border: none;
cursor: pointer;

option{
  cursor: pointer;
}

&::-ms-expand {
  display: none;
}
`;

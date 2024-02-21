import React from "react";
import { ButtonContainer, Container, ImageContainer } from "./styled-component";
import img1 from '../../assets/img1.png'
import { CartImage } from "../table/styled-component";

export default function Testing() {
  return (
    <>
      <Container>
        <CartImage component='img' src={img1} alt="Snow" />
        <ButtonContainer class="btn">Button</ButtonContainer>
      </Container>
    </>
  );
}

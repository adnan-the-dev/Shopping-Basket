import React, { useState } from "react";
import { arrayOfImages } from "../array";
import Table from "../table/Table";
import {
  AnimationBox,
  AnimationContainer,
  ButtonContainer,
  Image,
} from "./styled-component";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState([]);
  const handleImageClick = (image) => {
    setSelectedImage([...selectedImage, image]);
  };
  return (
    <>
      <AnimationContainer>
        {arrayOfImages.map((item, i) => {
          return (
            <>
              <AnimationBox key={i}>
                <Image
                  component="img"
                  src={item.url}
                  alt="Image 1"
                />
                {/* <ButtonContainer>Hello</ButtonContainer> */}
                <ButtonContainer onClick={() => handleImageClick(item)} component="button">
                  <span>{item.title}</span>
                </ButtonContainer>
              </AnimationBox>
            </>
          );
        })}
      </AnimationContainer>
      <Table
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </>
  );
}

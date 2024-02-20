import React, { useState } from "react";
import { arrayOfImages } from "../array";
import Table from "../table/Table";
import { AnimationBox, AnimationContainer, Image } from "./styled-component";
import { Button } from "@mui/material";

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
            <AnimationBox>
              <Image
                component="img"
                onClick={() => handleImageClick(item)}
                src={item.url}
                alt="Image 1"
              />
            </AnimationBox>
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

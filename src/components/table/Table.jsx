import React from "react";
import {
  CartImage,
  CartItem,
  CartTextBox,
  ChildCartitem,
  MainDeleteBox,
  SecondCartItem,
  TagBox,
  Text,
} from "./styled-component";
import { Avatar, Box } from "@mui/material";
import { MdDelete } from "react-icons/md";

export default function Table({ selectedImage, setSelectedImage }) {

  
  const total = selectedImage.reduce(
    (current, prev) => (current += prev.price),
    0
  );

  const removeItem = (i) => {
    let item = [...selectedImage];
    item.splice(i, 1);
    setSelectedImage(item);
  };

  // let total = 0
  // for (let i = 0; i < selectedImage.length; i++) {
  //   // const element = array[i];

  //   total += selectedImage[i].price
  // }

  return (
    <>
      <CartItem color="true">Shopping Basket</CartItem>
      <CartItem>You have {selectedImage.length} items in your basket</CartItem>
      <ChildCartitem>
        {selectedImage.map((item, i) => {
          return (
            <SecondCartItem key={i}>
              <Avatar
                sx={{ width: "56", height: "56", border: "1px solid" }}
                src={item.url}
              />
              <CartTextBox>
                <TagBox>
                  <Text tita="true">{item.title}</Text>
                </TagBox>
                <MainDeleteBox>
                  <Box>
                    <Text active="true">{item.description}</Text>
                  </Box>
                  <Box onClick={() => removeItem(i)}>
                    <MdDelete
                      size={25}
                      style={{ marginTop: "1rem", cursor: "pointer" }}
                    />
                  </Box>
                </MainDeleteBox>
              </CartTextBox>
            </SecondCartItem>
          );
        })}
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "0.1rem",
            fontSize: "1.8rem",
            fontWeight: "600",
            marginRight: "-38rem",
          }}
        >
          £{total.toFixed(2)}
        </Box>
      </ChildCartitem>
    </>
  );
}

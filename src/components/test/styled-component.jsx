import styled from "styled-components";
import { Box, Button } from "@mui/material";

/* Container needed to position the button. Adjust the width as needed */
// .container {
//     position: relative;
//     width: 50%;
//   }

//   /* Make the image responsive */
//   .container img {
//     width: 100%;
//     height: auto;
//   }

//   /* Style the button and place it in the middle of the container/image */
//   .container .btn {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     -ms-transform: translate(-50%, -50%);
//     background-color: #555;
//     color: white;
//     font-size: 16px;
//     padding: 12px 24px;
//     border: none;
//     cursor: pointer;
//     border-radius: 5px;
//   }

//   .container .btn:hover {
//     background-color: black;
//   }

export const Container = styled(Box)({
  position: "relative",
  width: "50%",
});
export const ImageContainer = styled(Box)({
  width: "100%",
  height: "auto",
});

export const ButtonContainer = styled(Button)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  msTransform: "translate(-50%, -50%)",
  backgroundColor: "#555",
  color: "white",
  fontSize: "16px",
  padding: "12px 24px",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
});

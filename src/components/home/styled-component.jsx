import { Box } from "@mui/material";
import styled from "styled-components";

export const AnimationContainer = styled(Box)({
  display: "flex",
  padding: "20px",
  justifyContent:'center'
});

export const AnimationBox = styled(Box)({
  width: "200px",
  height: "150px",
  overflow: "hidden",
  border: "1px solid #ccc",
  borderRadius: "5px",
});

export const Image = styled(Box)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

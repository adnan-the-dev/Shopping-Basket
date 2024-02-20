import { Box, Button, Typography, styled } from "@mui/material";

export const MainShoppingCartBox = styled(Box)({
  marginBottom: "5rem",
});

export const CartHeadingBox = styled(Box)({
  width: "100%",
  marginTop: "3rem",
  textAlign: "center",
});

export const Heading = styled(Typography)({
  fontWeight: "600",
  fontSize: "1.875rem",
  lineHeight: "2.25rem",
  textAlign: "center",
  color: "#202428",
});

export const MainCartItemBox = styled(Box)({
  paddingRight: "10rem",
  paddingLeft: "10rem",
  display: "flex",
  width: "100%",
});

export const ChildCartitem = styled(Box)({
  width: "66%",
  marginBottom: "0",
});

export const CartItem = styled(Typography)(({ color }) => ({
  fontWeight: color ? "600" : "",
  color: color ? "#6262d1" : "#202428",
}));

export const SecondCartItem = styled(Box)({
  borderBottom: "1.5px solid gray",
  display: "flex",
  alignItems:'center',
  marginBottom: "0.25rem!important",
});

export const CartImage = styled(Box)({
  width: "10%",
  maxWidth: "100%",
  height: "auto",
  display: "block",
  verticalAlign: "middle",
});

export const CartTextBox = styled(Box)({
  width: "100%",
  marginLeft: "0.5rem",
  marginTop: "0.5rem!important",
});

export const TagBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const Text = styled(Typography)(({ active, left,tita }) => ({
  fontWeight: active ? "" : "600",
  fontSize: active ? ".900rem" : tita ? 'rem' : "1.25rem",
  lineHeight: active ? "1.25rem" : "1.75rem",
  marginBottom: "0.25rem!important",
  color: active ? "#939590" : "#42463b",
  marginLeft: left ? "5rem" : "",
  display: left ? "flex" : "",
  gap: left ? "1rem" : "",
}));

export const MainDeleteBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const SecondBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});



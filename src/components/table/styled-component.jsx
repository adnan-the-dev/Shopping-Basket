import { Box, Typography, styled } from "@mui/material";

export const ChildCartitem = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const CartItem = styled(Typography)(({ color }) => ({
  display: color ? "flex" : "flex",
  justifyContent: "flex-start",
  marginLeft: "22rem",
  fontWeight: color ? "600" : "",
  color: color ? "#6262d1" : "#202428",
}));

export const SecondCartItem = styled(Box)({
  borderBottom: "1.5px solid gray",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "0.25rem!important",
  width: "50%",
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

export const Text = styled(Typography)(({ active, left, tita }) => ({
  fontWeight: active ? "" : "600",
  fontSize: active ? ".900rem" : tita ? "1rem" : "1.25rem",
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

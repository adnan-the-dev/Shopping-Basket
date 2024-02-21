import { Box, Button } from "@mui/material";
import styled from "styled-components";

export const AnimationContainer = styled(Box)({
  display: "flex",
  padding: "20px",
  justifyContent: "center",
});

export const AnimationBox = styled(Box)({
  width: "200px",
  height: "150px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  position: "relative",
  // display: 'inline-block',
});

export const Image = styled(Box)({
  width: "100%",
  height: "100%",
  objectFit: "cover",

  // display: 'block',
  // width: '100%',
  // height: 'auto',
  // cursor: 'pointer',
  // transition: 'transform 0.2s',
  // '&:hover': {
  //   transform: 'scale(1.05)',
  // },
});

// export const ButtonContainer = styled(Box)({
//   border: "1px solid red",
//   appearance: "none",
//   backgroundColor: "#FFFFFF",
//   borderWidth: 0,
//   boxSizing: "border-box",
//   color: "#000000",
//   cursor: "pointer",
//   display: "inline-block",
//   fontFamily: "Clarkson,Helvetica,sans-serif",
//   fontSize: 14,
//   fontWeight: 500,
//   letterSpacing: 0,
//   lineHeight: "1em",
//   margin: 0,
//   opacity: 1,
//   outline: 0,
//   padding: "1.5em 2.2em",
//   position: "relative",
//   textAlign: "center",
//   textDecoration: "none",
//   textRendering: "geometricprecision",
//   textTransform: "uppercase",
//   transition:
//     "opacity 300ms cubic-bezier(.694, 0, 0.335, 1), background-color 100ms cubic-bezier(.694, 0, 0.335, 1), color 100ms cubic-bezier(.694, 0, 0.335, 1)",
//   userSelect: "none",
//   WebkitUserSelect: "none",
//   touchAction: "manipulation",
//   verticalAlign: "baseline",
//   whiteSpace: "nowrap",
//   "&:before": {
//     animation: "opacityFallbackOut .5s step-end forwards",
//     backfaceVisibility: "hidden",
//     backgroundColor: "#EBEBEB",
//     clipPath: "polygon(-1% 0, 0 0, -25% 100%, -1% 100%)",
//     content: '""',
//     height: "100%",
//     left: 0,
//     position: "absolute",
//     top: 0,
//     transform: "translateZ(0)",
//     transition:
//       "clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1), -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1)",
//     width: "100%",
//   },
//   "&:hover:before": {
//     animation: "opacityFallbackIn 0s step-start forwards",
//     clipPath: "polygon(0 0, 101% 0, 101% 101%, 0 101%)",
//   },
//   "&:after": {
//     backgroundColor: "#FFFFFF",
//   },
//   "& span": {
//     zIndex: 1,
//     position: "relative",
//   },
// });

export const ButtonContainer = styled(Box)({
  position: "absolute",
  top: "23%",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#373B44",
  color: "#fff",
  padding: "19px 10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  zIndex: 1,
  "--b": "3px",
  "--s": ".45em",
  "--color": "#373B44",
  // padding: "calc(.5em + var(--s)) calc(.9em + var(--s))",
  color: "var(--color)",
  "--_p": "var(--s)",
  background: `conic-gradient(from 90deg at var(--b) var(--b), #0000 90deg, var(--color) 0) var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p))`,
  transition: ".3s linear, color 0s, background-color 0s",
  outline: "var(--b) solid #0000",
  outlineOffset: ".6em",
  fontSize: 16,
  border: 0,
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",
  "&:hover, &:focus-visible": {
    "--_p": "0px",
    outlineColor: "var(--color)",
    outlineOffset: ".05em",
  },
  "&:active": {
    background: "var(--color)",
    color: "#fff",
  },
});

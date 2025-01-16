"use client";
import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";

export default function DeveloperContent() {
  const showText = () => {
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#developerTitle { color:rgb(255,255,255,1) }";
  };

  const removeTransition = () => {
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML =
      "#developerTitle:after { transform: scaleX(0);transform-origin: right; }";

    setTimeout(() => {
      showText();
    }, 250);
  };

  const addTransition = () => {
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML =
      "#developerTitle:after { transform: scaleX(1);transform-origin: left;}";
    setTimeout(() => {
      removeTransition();
    }, 1000);
  };

  useEffect(() => {
    addTransition();
  }, []);

  return (
    <Box
      px="2"
      id="developerTitle"
      position={"relative"}
      transformOrigin="right"
      color="rgb(255,255,255,0)"
      _after={{
        content: '""',
        position: "absolute",
        left: "0",
        top: "0",
        height: "full",
        width: "full",
        background: "secondary",
        transform: "scaleX(0)",
        transformOrigin: "right",
        boxSizing: "border-box",
        transition: "transform 400ms cubic-bezier(0.4, 0.0, 0.2, 1) 0.2s",
        zIndex: 0,
      }}
    >
      <Text fontSize={"100px"} fontWeight={"bold"}>
        Developer
      </Text>
    </Box>
  );
}

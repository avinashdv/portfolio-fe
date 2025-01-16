"use client";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function AnimationContent() {
  const [developerAbout, setDeveloperAbout] = useState<string>("Full-Stack");

  const changeContentHandler = (content: string) => {
    switch (content) {
      case "Full-Stack":
        setDeveloperAbout("Frontend");
        break;
      case "Frontend":
        setDeveloperAbout("API integration");
        break;
      case "API integration":
        setDeveloperAbout("Animator");
        break;
      case "Animator":
        setDeveloperAbout("Full-Stack");
        break;
      default:
        setDeveloperAbout("Full-Stack");
        break;
    }
  };

  function removeDeveloperAboutAfterStyle() {
    const styleElem = document.head.appendChild(
      document.createElement("style")
    );

    styleElem.innerHTML =
      "#developerAbout:after { transform: scaleX(1);transform-origin:left;}";
  }

  function addDeveloperAboutAfterStyle() {
    const styleElem = document.head.appendChild(
      document.createElement("style")
    );
    styleElem.innerHTML =
      "#developerAbout:after { transform: scaleX(0);transform-origin: right;}";
    setTimeout(() => {
      removeDeveloperAboutAfterStyle();
    }, 1500);
  }

  function removeText() {
    const styleElem = document.head.appendChild(
      document.createElement("style")
    );
    styleElem.innerHTML =
      "#developerAbout {color:rgba(255,255,255,0);  transition: color 1s ease}";

    setTimeout(() => {
      changeContentHandler(developerAbout);
    }, 1000);
  }

  function addText() {
    const styleElem = document.head.appendChild(
      document.createElement("style")
    );
    styleElem.innerHTML =
      "#developerAbout {  color: rgba(255,255,255,1);  transition:color 1s linear;}";

    setTimeout(() => {
      removeText();
    }, 1500);

    setTimeout(() => {
      addDeveloperAboutAfterStyle();
    }, 1000);
  }

  useEffect(() => {
    setTimeout(() => {
      addText();
    }, 1000);
  }, [developerAbout]);

  return (
    <Text
      px="2"
      id="developerAbout"
      position={"relative"}
      _after={{
        display: "inline-block",
        content: '""',
        position: "absolute",
        top: "-6",
        left: "0",
        height: "100px",
        width: "100%",
        overflow: "auto",
        background: "secondary",
        transition: "transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)",
      }}
      fontSize={"100px"}
      fontWeight={"bold"}
      lineHeight={"40px"}
      display={"inline-block"}
      color="rgba(255,255,255,0)"
    >
      <Text as="span" opacity={0.6}>
        +
      </Text>{" "}
      {developerAbout}
    </Text>
  );
}

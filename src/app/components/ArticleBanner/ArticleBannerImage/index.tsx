"use client";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function ArticleBannerImage() {
  const showImage = () => {
    const styleElem = document.head.appendChild(
      document.createElement("style")
    );
    styleElem.innerHTML = "#articleBannerImage > div { opacity: 1 }";
  };

  const removeTransition = () => {
    const styleElem = document.head.appendChild(
      document.createElement("style")
    );
    styleElem.innerHTML =
      "#articleBannerImage:after { transform: scaleX(0);transform-origin: right; }";

    setTimeout(() => {
      showImage();
    }, 250);
  };

  const addTransition = () => {
    const styleElem = document.head.appendChild(
      document.createElement("style")
    );
    styleElem.innerHTML =
      "#articleBannerImage:after { transform: scaleX(1);transform-origin: left;}";
    setTimeout(() => {
      removeTransition();
    }, 1000);
  };

  useEffect(() => {
    addTransition();
  });

  return (
    <Box
      id="articleBannerImage"
      position="relative"
      w="full"
      h="90vh"
      inset="0"
      display="flex"
      clipPath={
        "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)"
      }
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
        zIndex: 1,
      }}
    >
      <Box
        position={"relative"}
        w="full"
        h="90vh"
        transform="scale(1)"
        transition="transform 400ms"
        _groupHover={{
          cursor: "pointer",
          transform: "scale(1.1)",
          transition: "transform 400ms",
        }}
        _after={{
          content: '""',
          position: "absolute",
          inset: "0",
          backgroundImage:
            "linear-gradient(-135deg, rgb(26, 26, 26, .5) 0, rgb(26, 26, 26,.86) 60%, rgb(26, 26, 26, .9) 100%)",
        }}
        opacity="0"
      >
        <Image
          fill
          style={{ objectFit: "cover" }}
          src="/images/article-banner.jpg"
          alt="progress detail"
          sizes="300px"
        />
      </Box>
    </Box>
  );
}

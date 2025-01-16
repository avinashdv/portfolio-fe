"use client";
import { Box, Flex } from "@chakra-ui/react";
import ArticleHeading from "./ArticleHeading";
import ArticleAbout from "./ArticleAbout";
import ArticleButton from "./ArticleButton";
import ArticleBanner from "../ArticleBanner";
import ArticleDate from "./ArticleDate";

export default function ArticleContent() {
  return (
    <Flex w="full">
      <Box
        w="50%"
        pr="8"
        borderBottom={"1px solid rgba(255, 255, 255, .2);"}
        borderBottomWidth={"thin"}
        borderBottomStyle={"solid"}
      >
        <ArticleHeading />
        <Box
          borderTop={"1px solid rgba(255, 255, 255, .2);"}
          borderTopWidth={"thin"}
          borderTopStyle={"solid"}
          px="8"
          position={"relative"}
          _before={{
            marginTop: "20px",
            marginBottom: "20px",
            content: '""',
            position: "absolute",
            top: "0%",
            left: "0%",
            display: "block",
            height: "auto",
            width: "650px",
            background: "rgb(26 26 26)",
            opacity: 0.6,
            transform: "scaleX(0)",
            transformOrigin: "right",
            boxSizing: "border-box",
            transition: "transform 400ms cubic-bezier(0.4, 0.0, 0.2, 1)",
            inset: "0",
          }}
          _hover={{
            cursor: "pointer",
            _before: {
              transform: "scaleX(1)",
              transformOrigin: "left",
            },
          }}
        >
          <ArticleDate />
          <ArticleAbout />
          <ArticleButton />
        </Box>
      </Box>
      <Box w="50%">
        <ArticleBanner />
      </Box>
    </Flex>
  );
}

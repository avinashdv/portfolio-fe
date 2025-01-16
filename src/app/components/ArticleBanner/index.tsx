"use client";
import { Flex } from "@chakra-ui/react";
import ArticleBannerImage from "./ArticleBannerImage";
import ArticleBannerText from "./ArticleBannerText";
import ArticleBannerFeatures from "./ArticleBannerFeatures";

export default function ArticleBanner() {
  return (
    <Flex
      position={"fixed"}
      w="80%"
      h="full"
      mx="auto"
      pl="12"
      direction={"column"}
    >
      <Flex
        flexDirection={"column"}
        position={"relative"}
        justifyContent={"end"}
        w="50%"
        data-group
      >
        <ArticleBannerImage />
        <ArticleBannerFeatures />
        <ArticleBannerText />
      </Flex>
    </Flex>
  );
}

"use client";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { articleTitleArr } from "@/constants/content";

export default function ArticleHeading() {
  const getLetter = (
    start: number,
    end: number,
    htmlElement: HTMLElement,
    val: number
  ) => {
    for (let i = start; i < end; i++) {
      setTimeout(() => {
        if (htmlElement as HTMLElement) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore

          htmlElement.children[val]!.innerText = articleTitleArr[i];
        }
      }, i * 25);
    }
  };

  const modifyTitle = () => {
    const titleData = document.getElementById("titleData") as HTMLElement;
    let cnt = 0;
    if (titleData) {
      for (let i = 0; i < titleData.children.length; i++) {
        getLetter(cnt, (cnt += 4), titleData, i);
      }
    }
  };

  useEffect(() => {
    modifyTitle();
  });

  return (
    <Flex justifyContent={"space-between"} pb="12" alignItems={"center"}>
      <Text
        as="span"
        id="titleData"
        color="white"
        fontWeight={"semibold"}
        fontSize={"2xl"}
      >
        <Text as="span">%</Text>
        <Text as="span">F</Text>
        <Text as="span">&</Text>
        <Text as="span">B</Text>
        <Text as="span">1</Text>
        <Text as="span">^</Text>
        <Text as="span"> </Text>
        <Text as="span">#</Text>
        <Text as="span">%</Text>
        <Text as="span">R</Text>
        <Text as="span">W</Text>
        <Text as="span">o</Text>
        <Text as="span">q</Text>
        <Text as="span">@</Text>
        <Text as="span">&</Text>
      </Text>
      <svg width="153" height="20" fill="currentColor" viewBox="0 0 153 20">
        <path
          fill-opacity="0.6"
          d="M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z"
        ></path>
      </svg>
    </Flex>
  );
}

"use client";
import { Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { contactTitleArr } from "@/constants/content";

export function TitleAnimation() {
  const getLetter = (
    start: number,
    end: number,
    htmlElement: HTMLElement,
    val: number
  ) => {
    for (let i = start; i < end; i++) {
      setTimeout(() => {
        if (htmlElement as HTMLElement) {
          // @ts-ignore
          htmlElement.children[val]!.innerText = contactTitleArr[i];
        }
      }, i * 25);
    }
  };

  const modifyTitle = () => {
    let titleData = document.getElementById("titleData") as HTMLElement;
    let cnt = 0;
    if (titleData) {
      for (let i = 0; i < titleData.children.length; i++) {
        getLetter(cnt, (cnt += 4), titleData, i);
      }
    }
  };

  useEffect(() => {
    modifyTitle();
  }, []);

  return (
    <Text fontSize={"4xl"} fontWeight={"semibold"} color="white" id="titleData">
      <Text as="span">%</Text>
      <Text as="span">e</Text>
      <Text as="span">F</Text>
      <Text as="span">3</Text>
      <Text as="span">9</Text>
      <Text as="span">X</Text>
      <Text as="span">q</Text>
      <Text as="span">!</Text>
    </Text>
  );
}

"use client";
import { Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { userNameArr } from "@/constants/content";

export default function UserNameAnimation() {
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

          htmlElement.children[val]!.innerText = userNameArr[i];
        }
      }, i * 25);
    }
  };

  const modifyTitle = () => {
    const userNameData = document.getElementById("userNameData") as HTMLElement;
    let cnt = 0;
    if (userNameData) {
      for (let i = 0; i < userNameData.children.length; i++) {
        getLetter(cnt, (cnt += 4), userNameData, i);
      }
    }
  };

  useEffect(() => {
    modifyTitle();
  });

  return (
    <Text
      as="span"
      letterSpacing={"8px"}
      fontSize={"xl"}
      fontWeight={"bold"}
      opacity={0.6}
      id="userNameData"
      color="white"
    >
      <Text as="span">A</Text>
      <Text as="span">E</Text>
      <Text as="span">N</Text>
      <Text as="span">P</Text>
      <Text as="span">G</Text>
      <Text as="span">X</Text>
      <Text as="span">D</Text>
      <Text as="span">H</Text>
      <Text as="span">W</Text>
      <Text as="span">N</Text>
      <Text as="span">G</Text>
    </Text>
  );
}

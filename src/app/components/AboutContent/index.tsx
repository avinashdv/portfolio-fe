"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import AnimationContent from "./AnimationContent";
import UserNameAnimation from "./UserNameAnimation";
import { useEffect } from "react";
import DeveloperContent from "./DeveloperContent";

const fadeOut = keyframes`  
  from {
    top: 0px;
    opacity:1;
    }
    
    to {
      top: 10px;
      opacity:0;
  } 
`;

const fadeInTopLine = keyframes`
  from {
    width: 0px;
    opacity:0;
    }
    
    to {
      width: 80%;
      opacity:0.3;
  } 
`;

export default function AboutContent() {
  const fadeOutAnimation = `${fadeOut} infinite 2s ease`;
  const fadeInTopLineAnimation = `
  ${fadeInTopLine} 
  2s
  ease-out
  2s
  normal
  1
  forwards`;

  return (
    <Flex
      position={"relative"}
      w="70%"
      mx="auto"
      justifyContent={"center"}
      direction={"column"}
      h="100vh"
    >
      <Box ml="150px">
        <UserNameAnimation />
        <Flex alignItems={"center"}>
          <DeveloperContent />
          <Text
            as="span"
            animation={fadeInTopLineAnimation}
            ml="10"
            w="0%"
            height={"3px"}
            display={"flex"}
            bgColor="white"
            opacity={0.3}
          ></Text>
        </Flex>
        <AnimationContent />
      </Box>
      <Box
        position={"absolute"}
        bottom="20"
        left={"42%"}
        width={7}
        h={10}
        opacity={0.4}
        borderRadius={"full"}
        border="2px solid white"
        display={"flex"}
        justifyContent={"center"}
        _after={{
          position: "relative",
          content: '""',
          marginTop: "6px",
          height: "8px",
          width: "3px",
          background: "white",
          animation: fadeOutAnimation,
          borderRadius: "full",
        }}
      ></Box>
    </Flex>
  );
}

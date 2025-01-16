"use client";
import { Text, Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const fadeInTop = keyframes`
  from {
    top:-20px;
  }
    
  to {
    top:-15px;
  } 
`;

const fadeInLeft = keyframes`
  from {
    right:-50px;
  }
    
  to {
    right:-25px;
  } 
  `;

export default function ArticleBannerFeatures() {
  const fadeInTopAnimation = `
  ${fadeInTop} 
  0.5s
  ease-out
  3s
  normal
  1
  forwards`;

  const fadeInLeftAnimation = `
  ${fadeInLeft} 
  0.5s
  ease-out
  3s
  normal
  1
  forwards`;

  return (
    <>
      <Box
        bgColor="rgb(17 17 17)"
        position={"absolute"}
        left="10"
        top="-120px"
        animation={fadeInTopAnimation}
      >
        <Text
          letterSpacing={1}
          p="2"
          py="1"
          color="white"
          fontSize={"lg"}
          w="fit-content"
          opacity={0.6}
        >
          Featured
        </Text>
      </Box>

      <Box
        animation={fadeInLeftAnimation}
        zIndex={1}
        bgColor="rgb(17 17 17)"
        position={"absolute"}
        top="30%"
        right="-150px"
        transform={"rotate(-90deg)"}
      >
        <Text
          letterSpacing={1}
          p="2"
          py="1"
          color="white"
          fontSize={"lg"}
          w="fit-content"
          opacity={0.6}
        >
          477
        </Text>
      </Box>
    </>
  );
}

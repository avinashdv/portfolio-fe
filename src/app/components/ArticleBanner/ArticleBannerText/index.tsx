"use client";
import { Icon, Button, Text, Box, Flex } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity:0;
    bottom:-50px;
  }
    
  to {
    opacity:1;
    bottom:10px;
  } 
`;

export default function ArticleBannerText() {
  const fadeInAnimation = `
  ${fadeIn} 
  0.5s
  ease-out
  3s
  normal
  1
  forwards`;

  return (
    <Box p="14" position={"absolute"} opacity={0} animation={fadeInAnimation}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"end"}
        alignItems={"end"}
        clip-path="polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%);"
      >
        <Text
          color="white"
          fontSize={"5xl"}
          lineHeight={"50px"}
          fontWeight={"semibold"}
          position={"relative"}
        >
          A modern approach to styling in React
        </Text>
        <Text
          mt="4"
          color="white"
          fontSize={"xl"}
          opacity={0.6}
          position={"relative"}
        >
          A couple nifty techniques for dynamically styling React components
          with CSS custom properties
        </Text>
      </Box>
      <Flex
        mt="4"
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"relative"}
        h="fit-content"
      >
        <Button
          px="0"
          fontSize={"lg"}
          fontWeight={"normal"}
          leftIcon={<Icon color="secondary" boxSize={4} as={FaChevronRight} />}
          border="0"
          bgColor={"transparent"}
          color="secondary"
          _after={{
            content: '""',
            position: "absolute",
            right: "8px",
            left: "-5px",
            height: "40px",
            width: "140px",
            background: "#154348",
            opacity: 0.6,
            transform: "scaleX(0)",
            transformOrigin: "right",
            boxSizing: "border-box",
            transition: "transform 400ms cubic-bezier(0.4, 0.0, 0.2, 1)",
            zIndex: 0,
          }}
          _hover={{
            _after: {
              transform: "scaleX(1)",
              transformOrigin: "left",
            },
          }}
        >
          Read article
        </Button>
        <Flex alignItems={"center"}>
          <Text
            as="span"
            w="50px"
            height={"2px"}
            display={"flex"}
            bgColor="white"
            opacity={0.3}
            mr="6"
          ></Text>
          <Text color="white" opacity={0.6} fontSize={"lg"}>
            00:08:42:60
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

"use client";
import {
  Icon,
  Box,
  Flex,
  Text,
  Button,
  SlideFade,
  useDisclosure,
} from "@chakra-ui/react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IProjects } from "@/interfaces/projects";
import { keyframes } from "@emotion/react";
import { useEffect } from "react";

const fadeInTopLine = keyframes`
  from {
    width: 0px;
    opacity:0;
    }
    
    to {
      width: 85px;
      opacity:1;
  } 
`;

const fadeInBottomLine = keyframes`
  from {
    width: 0px;
    opacity:0;
    }
    
    to {
      width: 60px;
      opacity:1;
  } 
`;

const fadeInNumber = keyframes`
from {
  left: 0px;
  opacity:0;
  }
  
  to {
    left: 95px;
    opacity:1;
} 
`;

const WebsiteProjects: React.FC<IProjects> = ({
  id,
  title,
  description,
  buttonText,
}) => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    onToggle();
  });

  const fadeInTopLineAnimation = `
  ${fadeInTopLine} 
  0.5s
  ease-out
  1s
  normal
  1
  forwards`;

  const fadeInBottomLineAnimation = `
  ${fadeInBottomLine} 
  0.5s
  ease-out
  1.4s
  normal
  1
  forwards`;

  const fadeInNumberAnimation = `
  ${fadeInNumber} 
  0.5s
  ease-out
  1s
  normal
  1
  forwards`;

  return (
    <Flex
      position={"relative"}
      w="60%"
      mx="auto"
      justifyContent={"center"}
      direction={"column"}
      h="100vh"
    >
      <Box w="45%">
        <Flex alignItems={"center"} gap={2}>
          <Box>
            <Box
              animation={fadeInTopLineAnimation}
              bgColor={"secondary"}
              height="2.5px"
              width="auto"
            ></Box>
            <Box
              animation={fadeInBottomLineAnimation}
              bgColor={"secondary"}
              height="10px"
              width="0"
              clipPath={"polygon(0% -2%, 100% -2%, 80% 80%, 20% 80%)"}
            ></Box>
          </Box>
          <Text
            position={"absolute"}
            animation={fadeInNumberAnimation}
            color="secondary"
            opacity="0"
            left={0}
            mt="-2"
          >
            {id}
          </Text>
        </Flex>

        <SlideFade in={isOpen} offsetY="20px">
          <Text fontSize={"4xl"} fontWeight={"semibold"} mt="4" color="white">
            {title}
          </Text>
          <Text opacity={0.7} fontSize={"xl"} mt="2" color="white">
            {description}
          </Text>
          <Button
            mt="6"
            p="6"
            fontSize={"xl"}
            bgColor={"secondary"}
            borderRadius={0}
            clipPath={
              "polygon(0 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%)"
            }
          >
            {buttonText}
            <Icon
              w={{ base: 6, xl: 8 }}
              h={{ base: 6, xl: 8 }}
              as={HiOutlineArrowRight}
            />
          </Button>
        </SlideFade>
      </Box>
    </Flex>
  );
};
export default WebsiteProjects;

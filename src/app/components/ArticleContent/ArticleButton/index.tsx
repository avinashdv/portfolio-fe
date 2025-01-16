"use client";
import { Icon, Box, Flex, Text, Button } from "@chakra-ui/react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IProjects } from "@/interfaces/projects";
import { FaChevronRight } from "react-icons/fa";

export default function ArticleButton() {
  return (
    <Flex mt="6" pb="10" justifyContent={"space-between"}>
      <Button
        px="0"
        fontSize={"lg"}
        leftIcon={<Icon boxSize={4} as={FaChevronRight} color="cyan" />}
        colorScheme="cyan"
        variant="outline"
        border="0"
        zIndex={1}
        position={"relative"}
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
          height={"1.5px"}
          display={"flex"}
          bgColor="white"
          opacity={0.3}
          mr="6"
        ></Text>
        <Text color="white" opacity={0.6} fontSize={"lg"}>
          00:04:36:30
        </Text>
      </Flex>
    </Flex>
  );
}

"use client";
import { Icon, Box, Flex, Text, Button } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

export default function ArticleSkeleton() {
  return (
    <Flex position={"relative"} w="50%" p="12" direction={"column"}>
      <Box w={"80%"} bgColor={"rgba(255, 255, 255, 0.2)"} h="6"></Box>

      <Box mt="4" w={"full"} bgColor={"rgba(255, 255, 255, 0.2)"} h="24"></Box>
      <Flex
        mt="12"
        pb="16"
        justifyContent={"space-between"}
        borderBottom={"1px solid rgba(255, 255, 255, .2);"}
        borderBottomWidth={"thin"}
        borderBottomStyle={"solid"}
      >
        <Button
          px="0"
          fontSize={"lg"}
          leftIcon={<Icon color="white" boxSize={4} as={FaChevronRight} />}
          color="white"
          opacity={0.3}
          variant="outline"
          border="0"
          _hover={{
            bgColor: "transparent",
          }}
        >
          Read more
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
            00:00:00:00
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

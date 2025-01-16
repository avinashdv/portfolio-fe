"use client";
import { Icon, Box, Flex, Text, Button } from "@chakra-ui/react";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { TitleAnimation } from "./TitleAnimation";

export function Contact() {
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
        <TitleAnimation />
        <Box mt="6">
          <Text color="brand" fontSize={"xl"} opacity={0.7}>
            Expert Full-stack(Front-end Heavy) developer. My projects include
            React, Next.js, Vue, Flutter, React Native, Swift, UI/UX Design.
            Being comfortable with code allows me to rapidly prototype and
            validate experiences. If you’re interested in the tools and software
            I use check out my{" "}
          </Text>
          <Text
            as="span"
            fontSize={"xl"}
            color="secondary"
            borderBottom={"2px"}
            borderStyle={"solid"}
            borderBottomColor={"rgba(0, 229, 255, 0.4)"}
          >
            uses page.
          </Text>
        </Box>
        <Box mt="8">
          <Text as="span" color="brand" fontSize={"xl"} opacity={0.7}>
            In my spare time I like to practice Brazilian Jiu Jitsu, play video
            games, and{" "}
          </Text>
          <Text
            as="span"
            color="secondary"
            borderBottom={"2px"}
            borderStyle={"solid"}
            borderBottomColor={"rgba(0, 229, 255, 0.4)"}
            opacity={1}
            fontSize={"xl"}
          >
            make mods.
          </Text>{" "}
          <Text color="brand" fontSize={"xl"} opacity={0.7}>
            I’m always down for hearing about new projects, so feel free to drop
            me a line.
          </Text>
        </Box>
        <Button
          mt="6"
          px="0"
          fontSize={"lg"}
          leftIcon={
            <Icon boxSize={6} as={PiPaperPlaneRightFill} color="secondary" />
          }
          color="secondary"
          variant="outline"
          border="0"
          _hover={{
            bgColor: "transparent",
          }}
        >
          Send me a message
        </Button>
      </Box>
    </Flex>
  );
}

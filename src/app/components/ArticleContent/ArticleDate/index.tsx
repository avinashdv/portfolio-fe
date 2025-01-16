"use client";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ArticleDate() {
  const { isOpen, onOpen } = useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);

  useEffect(() => {
    onOpen();
  });
  return (
    <AnimatePresence>
      <motion.div
        hidden={hidden}
        initial={false}
        onAnimationStart={() => setHidden(false)}
        onAnimationComplete={() => setHidden(!isOpen)}
        animate={{ width: isOpen ? "auto" : 0 }}
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute",
          left: "0",
          top: "0",
        }}
      >
        <Flex
          px="8"
          py="12"
          alignItems={"center"}
          gap={2}
          position={"relative"}
        >
          <Box>
            <Box bgColor={"secondary"} height="2.5px" width="80px"></Box>
            <Box
              bgColor={"secondary"}
              height="10px"
              width="60px"
              clipPath={"polygon(0% -2%, 100% -2%, 80% 80%, 20% 80%)"}
            ></Box>
          </Box>
          <Text color="secondary">April 21,2022</Text>
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
}

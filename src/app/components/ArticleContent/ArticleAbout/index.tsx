"use client";
import { Box, Text } from "@chakra-ui/react";

export default function ArticleAbout() {
  return (
    <Box mt="24">
      <Text fontSize={"3xl"} fontWeight={"semibold"} color="white">
        Hello world: how I built this site
      </Text>
      <Text mt="4" opacity={0.7} fontSize={"lg"} lineHeight={"8"} color="white">
        I originally built this portfolio site back in 2018, and since then it's
        evolved quite a bit. Recently I migrated from Create React App to
        Next.js and made some major upgrades in the process.
      </Text>
    </Box>
  );
}

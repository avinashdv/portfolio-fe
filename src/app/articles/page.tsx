"use client";

import { Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { webProjectsContent } from "@/constants/content";
import ArticleContent from "../components/ArticleContent";
import ArticleSkeleton from "../components/ArticleSkeleton";

export default function Articles() {
  return (
    <Box w="full" position={"relative"}>
      <Sidebar />
      <Box ml="40" my="10">
        <ArticleContent />
        <ArticleSkeleton />
        <ArticleSkeleton />
      </Box>
    </Box>
  );
}

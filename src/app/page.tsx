"use client";

import { Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import AboutContent from "./components/AboutContent";
import { webProjectsContent } from "@/constants/content";
import { mobileProjectsContent } from "@/constants/content";
import { educationProjectsContent } from "@/constants/content";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <Box w="full" position={"relative"}>
      <Sidebar />
      <AboutContent />
      <Projects
        id={webProjectsContent.id}
        title={webProjectsContent.title}
        description={webProjectsContent.description}
        buttonText={webProjectsContent.buttonText}
      />
      <Projects
        id={mobileProjectsContent.id}
        title={mobileProjectsContent.title}
        description={mobileProjectsContent.description}
        buttonText={mobileProjectsContent.buttonText}
      />
      <Projects
        id={educationProjectsContent.id}
        title={educationProjectsContent.title}
        description={educationProjectsContent.description}
        buttonText={educationProjectsContent.buttonText}
      />
      <Contact />
    </Box>
  );
}

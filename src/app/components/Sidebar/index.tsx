import Image from "next/image";
import { Link, Flex } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Flex
      position={"fixed"}
      w="10%"
      h="100vh"
      bgColor="rgb(17 17 17)"
      direction={"column"}
      pt="20"
      gap="16"
      alignItems={"center"}
    >
      <Image
        width="50"
        height="50"
        style={{ objectFit: "cover", borderRadius: "4px" }}
        src="/images/logo.png"
        alt="progress detail"
      />

      <Link
        href={"#projects"}
        target="_blank"
        fontSize={"lg"}
        fontWeight={"semibold"}
        color="brand"
        transform={"rotate(-90deg)"}
        _after={{
          content: '""',
          position: "absolute",
          top: "42%",
          right: "8px",
          left: "-5px",
          height: "4px",
          width: "80px",
          background: "secondary",
          transform: "scaleX(0)",
          transformOrigin: "right",
          boxSizing: "border-box",
          transition: "transform 400ms cubic-bezier(0.4, 0.0, 0.2, 1)",
        }}
        _hover={{
          _after: {
            transform: "scaleX(1)",
            transformOrigin: "left",
          },
        }}
      >
        Projects
      </Link>
      <Link
        href={"#projects"}
        target="_blank"
        fontSize={"lg"}
        fontWeight={"semibold"}
        color="brand"
        transform={"rotate(-90deg)"}
        _after={{
          content: '""',
          position: "absolute",
          top: "42%",
          right: "8px",
          left: "-5px",
          height: "4px",
          width: "80px",
          background: "secondary",
          transform: "scaleX(0)",
          transformOrigin: "right",
          boxSizing: "border-box",
          transition: "transform 400ms cubic-bezier(0.4, 0.0, 0.2, 1)",
        }}
        _hover={{
          _after: {
            transform: "scaleX(1)",
            transformOrigin: "left",
          },
        }}
      >
        Details
      </Link>
      <Link
        href={"#projects"}
        target="_blank"
        fontSize={"lg"}
        fontWeight={"semibold"}
        color="brand"
        transform={"rotate(-90deg)"}
        _after={{
          content: '""',
          position: "absolute",
          top: "42%",
          right: "8px",
          left: "-5px",
          height: "4px",
          width: "80px",
          background: "secondary",
          transform: "scaleX(0)",
          transformOrigin: "right",
          boxSizing: "border-box",
          transition: "transform 400ms cubic-bezier(0.4, 0.0, 0.2, 1)",
        }}
        _hover={{
          _after: {
            transform: "scaleX(1)",
            transformOrigin: "left",
          },
        }}
      >
        Articles
      </Link>
      <Link
        href={"#projects"}
        target="_blank"
        fontSize={"lg"}
        fontWeight={"semibold"}
        color="brand"
        transform={"rotate(-90deg)"}
        _after={{
          content: '""',
          position: "absolute",
          top: "42%",
          right: "8px",
          left: "-5px",
          height: "4px",
          width: "80px",
          background: "secondary",
          transform: "scaleX(0)",
          transformOrigin: "right",
          boxSizing: "border-box",
          transition: "transform 400ms cubic-bezier(0.4, 0.0, 0.2, 1)",
        }}
        _hover={{
          _after: {
            transform: "scaleX(1)",
            transformOrigin: "left",
          },
        }}
      >
        Contact
      </Link>
    </Flex>
  );
};

export default Sidebar;

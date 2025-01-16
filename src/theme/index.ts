import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import Fonts from "@/utils/fonts";

const theme = extendTheme({
  fonts: {
    heading: `'gotham-title', sans-serif`,
    body: `'gotham-body', sans-serif`,
  },
  colors: {
    brand: "rgba(255, 255, 255, 0.8)",
    secondary: "#00E5FF",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: "",
      },
    }),
  },
});

export default theme;

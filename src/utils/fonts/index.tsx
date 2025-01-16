import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'gotham-title';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/gotham-font/Gotham-Bold.otf') format('otf'), url('./fonts/gotham-font/GothamBold.ttf') format('ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin */
      @font-face {
        font-family: 'gotham-body';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/gotham-font/Gotham-Black.otf') format('otf'), url('./fonts/gotham-font/GothamBook.ttf') format('ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
);

export default Fonts;

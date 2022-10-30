import { createGlobalStyle } from 'styled-components';
import { responsive } from './design/mixins';

export const GlobalStyle = createGlobalStyle`
/* latin */
@font-face {
  font-family: 'Lobster Two';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/lobstertwo/v18/BngOUXZGTXPUvIoyV6yN5-fI1qeh5A.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin */
@font-face {
  font-family: 'Lobster Two';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/lobstertwo/v18/BngMUXZGTXPUvIoyV6yN5-fN5qU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body {
  margin: 0;
  padding: 20px 40px;
  font-family: 'Lobster Two', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

    ${responsive.forPhone`
        padding: 10px;
    `};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;
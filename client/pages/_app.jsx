import { ThemeProvider } from "@emotion/react";
import GlobalResetStyles from "@spf-components/common/GlobalStyles/GlobalResetStyles";
import theme from "@theme/index";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalResetStyles/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;

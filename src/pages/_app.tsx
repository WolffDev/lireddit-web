import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Provider, createClient } from "urql";

const client = createClient({ url: "http://localhost:4000/graphql" });

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ThemeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;

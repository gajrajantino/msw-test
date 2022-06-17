import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";
import App from "./App";

const client = new ApolloClient({
  link: new HttpLink({
      uri: "http://localhost:4001/graphql",
      fetch: (...args) => fetch(...args),
  }),
  cache: new InMemoryCache(),
});


if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
   <ApolloProvider client={client}>
        <App />
  </ApolloProvider>
  </StrictMode>
);

import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

import UserSessionManager from "../session/session.manager";
import { decodeToken } from "../../helpers";

const authLink = setContext((_, { headers }) => {
  const loggedInUser = JSON.parse(UserSessionManager.getItem("ssn_user"));
  const token = loggedInUser ? loggedInUser.token : null;
  return {
    headers: {
      ...headers,
      authorization: decodeToken(token) ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createUploadLink({
  uri: process.env.REACT_APP_GRAPHQL_URI,
});

const additiveLink = from([authLink, httpLink]);

export const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  cache: new InMemoryCache(),
  link: additiveLink,
});

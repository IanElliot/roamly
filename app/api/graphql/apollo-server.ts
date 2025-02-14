import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { headers } from "next/headers";

export function getClient() {
  const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: 'http://localhost:3000/api/graphql', // Add full URL, // Update to your local Next.js API route
        headers: Object.fromEntries(headers())
      }),
    })
  })

  return getClient()
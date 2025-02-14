import { getClient } from "@/api/graphql/apollo-server";
import { gql } from "@apollo/client";

const HELLO_QUERY = gql`
  query Hello {
    hello
  }
`;

interface Hello {
  hello: string;
}

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Welcome to TravelHub
      </h1>
      <p className="text-lg text-gray-600">
        Plan your perfect trip with weather insights, accommodations, and local
        recommendations - all in one place.
      </p>
    </div>
  );
}

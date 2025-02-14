// Next.js Custom Route Handler: https://nextjs.org/docs/app/building-your-application/routing/router-handlers
import { createSchema, createYoga } from "graphql-yoga";

interface NextContext {
  params: Promise<Record<string, string>>;
}

const { handleRequest } = createYoga<NextContext>({
  schema: createSchema({
    typeDefs: /* GraphQL, 'hello' is currently a test query */ `
      type WeatherDetails {
        city: String
        country: String
        minTemp: Float
        maxTemp: Float
        weatherDescription: String
      }
      type Query {
          hello: String
      }
      type Mutation {
        weather(location: String!): WeatherDetails
      }
    `,
    resolvers: {
      Query: {
        hello: () => "world",
      },
      Mutation: {
        weather: async (_, { location }) => {
          try {
            const response = await fetch(
              `http://api.weatherstack.com/forecast?access_key=d3af37fd212b3f80005f12d8905058a0&query=${encodeURIComponent(
                location
              )}`,
              { method: "GET" }
            );

            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            const forecastKey = Object.keys(data.forecast)[0];

            return {
              city: data.location.name,
              country: data.location.country,
              minTemp: data.forecast[forecastKey].mintemp,
              maxTemp: data.forecast[forecastKey].maxtemp,
              weatherDescription: data.current.weather_descriptions[0],
            };
          } catch (error) {
            console.error(error);
            throw new Error("Failed to fetch weather data");
          }
        },
      },
    },
  }),

  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: "/api/graphql",

  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as POST };

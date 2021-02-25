import { ApolloServer } from "apollo-server-micro";
import { createContext } from "src/graphql/context";
import { schema } from "src/graphql/schema";

const server = new ApolloServer({
  schema,
  context: createContext,
  tracing: process.env.NODE_ENV === "development",
});
const handler = server.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;

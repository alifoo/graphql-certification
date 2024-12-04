import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs });
}
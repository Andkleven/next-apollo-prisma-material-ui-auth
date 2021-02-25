import { shield, allow } from "graphql-shield";
import { isAuthenticated, isOwner } from "./rules";

export const permissions = shield({
  Query: {
    "*": allow,
  },
  Mutation: {
    "*": allow,
    createOneUser: isOwner,
  },
});

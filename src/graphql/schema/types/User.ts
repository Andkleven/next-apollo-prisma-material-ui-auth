import { objectType, extendType } from "@nexus/schema";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.role();
  },
});

export const Query = extendType({
  type: "Query",
  definition: (t) => {
    t.crud.user();
  },
});

export const Mutation = extendType({
  type: "Mutation",
  definition: (t) => {
    t.crud.createOneUser();
  },
});

import { makeSchema, queryType, objectType, mutationType } from "@nexus/schema";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import  path  from "path";


const Company = objectType({
    name: "Company",
    definition(t) {
        t.model.id();
        t.model.symbol();
        t.model.name();
        t.model.description();
        t.model.employee();
    }
})

const Employee = objectType({
    name: "Employee",
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.age();
    }
})

const Query = queryType({
    definition(t) {
        t.crud.company();
        t.crud.companies();
    }
})

const Mutation = mutationType({
    definition(t) {
        t.crud.createOneCompany();
        t.crud.updateOneCompany();
        t.crud.deleteOneCompany();

        }
})

export const schema = makeSchema({
    types: { Query, Company, Mutation, Employee},
    plugins: [nexusSchemaPrisma({experimentalCRUD: true})],
    outputs: {
        schema: path.join(process.cwd(), "schema.graphql"),
        typegen: path.join(process.cwd(), "nexus.ts")
    },
    typegenAutoConfig: {
        contextType: "Context.Context",
        sources: [
            {
            source: "@prisma/client",
            alias: "prisma"
            },
            {
                source: require.resolve("./context"),
                alias: "Context"
            }]
    }
})
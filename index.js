import {GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import mongoose from "./config/mongoose";

const server = new GraphQLServer({
    typeDefs:"graphql/schema.graphql",
    resolvers
 
});
mongoose();
server.start(() => console.log("Graphql Server Running"));

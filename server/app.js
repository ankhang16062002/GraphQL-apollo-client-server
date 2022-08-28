const express = require("express");
const { ApolloServer } = require("apollo-server-express");

// Load schema & resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

//create apollo server with two paramater is typeDefs and resolvers

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

apolloServer.start().then((res) => {
  //add app express is similar a middleware
  apolloServer.applyMiddleware({
    app,
    // path: "/",
    // Optionally provide this to match apollo-server.
  });

  app.listen({ port: 4000 }, () => {
    console.log(
      `apolloServer ready at http://localhost:4000${apolloServer.graphqlPath}`
    );
  });
});

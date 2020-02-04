import "reflect-metadata";
import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { UserResolver } from "./resolvers/UserResolver";
import { User } from "./entity/User";

(async function main() {
  await createConnection();

  const user = new User();
  user.userId = "30in2020";
  user.email = "30in2020@gmail.com";
  user.accessToken = "1234";
  user.deviceToken = "1234";
  await user.save();

  const schema = await buildSchema({
    resolvers: [UserResolver]
  });

  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log("Server has started!");
})();

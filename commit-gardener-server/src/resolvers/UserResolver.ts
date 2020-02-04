import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User, CreateUserInput } from "../entity/User";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  Users() {
    return User.find();
  }

  @Mutation(() => User)
  async createUser(@Arg("data") data: CreateUserInput) {
    const user = User.create(data);
    await user.save();
    return user;
  }
}

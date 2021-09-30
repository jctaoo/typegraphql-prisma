import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostsInput } from "../inputs";
import { UserUpdateWithoutPostsInput } from "../inputs";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPostsInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostsInput;
}

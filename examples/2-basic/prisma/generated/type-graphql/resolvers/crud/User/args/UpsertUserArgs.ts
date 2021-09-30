import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserCreateInput } from "../../../inputs";
import { UserUpdateInput } from "../../../inputs";
import { UserWhereUniqueInput } from "../../../inputs";

@TypeGraphQL.ArgsType()
export class UpsertUserArgs {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateInput, {
    nullable: false
  })
  create!: UserCreateInput;

  @TypeGraphQL.Field(_type => UserUpdateInput, {
    nullable: false
  })
  update!: UserUpdateInput;
}

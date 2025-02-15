import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserUpdateInput } from "../../../inputs";
import { UserWhereUniqueInput } from "../../../inputs";

@TypeGraphQL.ArgsType()
export class UpdateUserArgs {
  @TypeGraphQL.Field(_type => UserUpdateInput, {
    nullable: false
  })
  data!: UserUpdateInput;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;
}

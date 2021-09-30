import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserUpdateManyMutationInput } from "../../../inputs";
import { UserWhereInput } from "../../../inputs";

@TypeGraphQL.ArgsType()
export class UpdateManyUserArgs {
  @TypeGraphQL.Field(_type => UserUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostWhereUniqueInput } from "../../../inputs";

@TypeGraphQL.ArgsType()
export class FindUniquePostArgs {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;
}

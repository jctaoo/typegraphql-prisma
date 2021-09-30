import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostUpdateInput } from "../../../inputs";
import { PostWhereUniqueInput } from "../../../inputs";

@TypeGraphQL.ArgsType()
export class UpdatePostArgs {
  @TypeGraphQL.Field(_type => PostUpdateInput, {
    nullable: false
  })
  data!: PostUpdateInput;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;
}

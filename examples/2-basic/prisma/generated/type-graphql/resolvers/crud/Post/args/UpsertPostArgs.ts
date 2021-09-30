import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCreateInput } from "../../../inputs";
import { PostUpdateInput } from "../../../inputs";
import { PostWhereUniqueInput } from "../../../inputs";

@TypeGraphQL.ArgsType()
export class UpsertPostArgs {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCreateInput, {
    nullable: false
  })
  create!: PostCreateInput;

  @TypeGraphQL.Field(_type => PostUpdateInput, {
    nullable: false
  })
  update!: PostUpdateInput;
}

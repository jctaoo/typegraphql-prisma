import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCreateInput } from "../../../inputs";

@TypeGraphQL.ArgsType()
export class CreatePostArgs {
  @TypeGraphQL.Field(_type => PostCreateInput, {
    nullable: false
  })
  data!: PostCreateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutAuthorInput } from "../inputs";
import { PostUpdateWithoutAuthorInput } from "../inputs";
import { PostWhereUniqueInput } from "../inputs";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: PostUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: PostCreateWithoutAuthorInput;
}

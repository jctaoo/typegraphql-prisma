import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostScalarWhereInput } from "../inputs";
import { PostUpdateManyMutationInput } from "../inputs";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PostScalarWhereInput, {
    nullable: false
  })
  where!: PostScalarWhereInput;

  @TypeGraphQL.Field(_type => PostUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostUpdateManyMutationInput;
}

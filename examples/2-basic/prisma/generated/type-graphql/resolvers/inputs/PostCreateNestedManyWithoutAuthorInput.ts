import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutAuthorInput } from "../inputs";
import { PostCreateWithoutAuthorInput } from "../inputs";
import { PostWhereUniqueInput } from "../inputs";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: PostCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}

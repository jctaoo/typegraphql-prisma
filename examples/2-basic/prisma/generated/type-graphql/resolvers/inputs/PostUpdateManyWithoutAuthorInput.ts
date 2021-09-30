import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutAuthorInput } from "../inputs";
import { PostCreateWithoutAuthorInput } from "../inputs";
import { PostScalarWhereInput } from "../inputs";
import { PostUpdateManyWithWhereWithoutAuthorInput } from "../inputs";
import { PostUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs";
import { PostUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs";
import { PostWhereUniqueInput } from "../inputs";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: PostCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}

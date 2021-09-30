import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostsInput } from "../inputs";
import { UserCreateWithoutPostsInput } from "../inputs";
import { UserUpdateWithoutPostsInput } from "../inputs";
import { UserUpsertWithoutPostsInput } from "../inputs";
import { UserWhereUniqueInput } from "../inputs";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostsInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPostsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutPostsInput | undefined;
}

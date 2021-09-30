import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOrderByInput } from "../../../inputs";
import { UserWhereInput } from "../../../inputs";
import { UserWhereUniqueInput } from "../../../inputs";
import { UserScalarFieldEnum } from "../../../../enums/UserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUserArgs {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserOrderByInput], {
    nullable: true
  })
  orderBy?: UserOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "email" | "name"> | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOrderByInput } from "../../../inputs";
import { UserScalarWhereWithAggregatesInput } from "../../../inputs";
import { UserWhereInput } from "../../../inputs";
import { UserScalarFieldEnum } from "../../../../enums/UserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserArgs {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserOrderByInput], {
    nullable: true
  })
  orderBy?: UserOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "email" | "name">;

  @TypeGraphQL.Field(_type => UserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

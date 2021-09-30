import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostOrderByInput } from "../../../inputs";
import { PostWhereInput } from "../../../inputs";
import { PostWhereUniqueInput } from "../../../inputs";

@TypeGraphQL.ArgsType()
export class AggregatePostArgs {
  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostOrderByInput], {
    nullable: true
  })
  orderBy?: PostOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

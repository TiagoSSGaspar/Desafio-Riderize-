import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateBikeRideInput {

  @Field()
  name: string;

  @Field()
  start_date: Date;

  @Field()
  start_date_registration: Date

  @Field()
  end_date_registration: Date

  @Field({ nullable: true })
  additional_information?: string

  @Field()
  start_place: string

  @Field({ nullable: true })
  participants_limit?: number

}

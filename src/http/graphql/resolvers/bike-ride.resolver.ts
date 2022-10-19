import { UseGuards } from "@nestjs/common";
import { Resolver, Mutation, Query, Args } from "@nestjs/graphql";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";
import { BikeRideService } from "src/services/bike-ride.service";
import { CreateBikeRideInput } from "../inputs/create-bike-ride-input";
import { BikeRide } from "../models/BikeRide";

@Resolver()
export class BikeRideResolver {

  constructor(private service: BikeRideService) { }

  @Query(() => [BikeRide])
  async bikeRides() {
    return this.service.listAllBikeRides()
  }

  @Mutation( () => BikeRide)
  //@UseGuards(AuthorizationGuard)
  createBikeRide(@Args("data") data: CreateBikeRideInput) {
    console.log(data)
    return this.service.createBikeRide(data)
  }

}

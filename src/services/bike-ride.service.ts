import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

interface BikeRideProps {
  name: string;
  start_date: Date;
  start_date_registration: Date
  end_date_registration: Date
  additional_information?: string
  start_place: string
  participants_limit?: number
}

@Injectable()
export class BikeRideService {

  constructor(private prisma: PrismaService) { }

  async listAllBikeRides() {
    return await this.prisma.bikeRide.findMany()
  }

  async createBikeRide({
    name,
    start_date,
    start_date_registration,
    end_date_registration,
    additional_information,
    start_place,
    participants_limit }: BikeRideProps) {

    return this.prisma.bikeRide.create({
      data: {
        name,
        start_date,
        start_date_registration,
        end_date_registration,
        additional_information,
        start_place,
        participants_limit
      }
    })
  }
}

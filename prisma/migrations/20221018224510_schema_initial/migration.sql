-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BikeRide" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "start_date_registration" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_date_registration" TIMESTAMP(3) NOT NULL,
    "additional_information" TEXT,
    "start_place" TEXT NOT NULL,
    "participants_limit" INTEGER,

    CONSTRAINT "BikeRide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rides" (
    "ride_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Rides_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "Rides" ADD CONSTRAINT "Rides_ride_id_fkey" FOREIGN KEY ("ride_id") REFERENCES "BikeRide"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rides" ADD CONSTRAINT "Rides_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

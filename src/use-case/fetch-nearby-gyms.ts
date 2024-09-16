import { Gym } from "@prisma/client";
import { GymRepository } from "@/repositories/gyms-repository";

interface FetchNearbyGymsUseCaseRequest {
    userLatitude: number;
    userLongitude: number
}

interface FetchNearbyGymsUseCaseResponse {
    gyms: Gym[]
}


export class FetchNearbyGymsUseCase {
    constructor(private gymsRepository: GymRepository) { }

    async execute({
        userLatitude,
        userLongitude
    }: FetchNearbyGymsUseCaseRequest): Promise<FetchNearbyGymsUseCaseResponse> {
        const gyms = await this.gymsRepository.findManyNearby({
            latitude: userLatitude,
            longitude: userLongitude
        }
        )
        return { gyms }
    }
}
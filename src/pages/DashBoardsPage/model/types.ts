interface FeaturesRatings {
    comfort: number,
    staffHospitality: number,
    food: number,
    entartainmentFacilities: number,
    price: number,
}

export interface HotelRecord {
    name: string,
    rating: number,
    featuresRatings: FeaturesRatings,
};

export interface EntityRecord {
    name: string,
    rating: number,
}
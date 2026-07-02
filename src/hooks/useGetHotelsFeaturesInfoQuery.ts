import { useEffect, useMemo } from "react";
import { useGetStatisticsQuery } from "../store/slices/StatisticsApi"

export const useGetHotelsFeaturesInfoQuery = (itemInd: number) => {
    const { data, isLoading } = useGetStatisticsQuery({});

    return useMemo(
        () => {
            if (isLoading) {
                return {featuresRatingsData: undefined, isLoading}
            }

            const featuresRatings = data![itemInd].featuresRatings;
            const featuresRatingsData = Object.entries(featuresRatings).
                                               map(entry => {
                                                   return {
                                                       name: entry[0],
                                                       rating: entry[1],
                                                   }
                                               });
            
            return {featuresRatingsData, isLoading};
        },
        [isLoading]
    );    
}
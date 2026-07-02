import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HotelRecord } from "../../appData/types";

export const statisticsApi = createApi(
    {
        reducerPath: "statistics",
        baseQuery: fetchBaseQuery(
            {
                baseUrl: "/dataStore/statistics.json",
            }
        ),
        endpoints: (builder) => {
            return {
                getStatistics: builder.query<HotelRecord[], {}>(
                    {
                        query: () => "",
                    }
                ),
            };
        }
    }
);

export const { useGetStatisticsQuery } = statisticsApi;
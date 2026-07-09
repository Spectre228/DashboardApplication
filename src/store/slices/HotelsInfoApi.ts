import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HotelRecord } from "../../appData/types";

export const hotelsInfoApi = createApi(
    {
        reducerPath: "hotelsInfo",
        baseQuery: fetchBaseQuery(
            {
                baseUrl: "/dataStore/hotelsInfo.json",
            }
        ),
        endpoints: (builder) => {
            return {
                getHotelsInfoData: builder.query<HotelRecord[], {}>(
                    {
                        query: () => "",
                    }
                ),
            };
        }
    }
);

export const { useGetHotelsInfoDataQuery } = hotelsInfoApi;
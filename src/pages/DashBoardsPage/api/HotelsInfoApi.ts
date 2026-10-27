import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
                getHotelsInfoData: builder.query(
                    {
                        query: () => "",
                    }
                ),
            };
        }
    }
);

export const { useGetHotelsInfoDataQuery } = hotelsInfoApi;
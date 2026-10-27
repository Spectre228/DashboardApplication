import { useMemo, useRef } from "react";
import { HotelRecord } from "./types";

const useHotelsFeaturesInfoData = (showRadarcharts: boolean, hotelsInfoData: HotelRecord[] | undefined) => {
    const cachedFeaturesInfoData = useRef<ReturnType<typeof formFeaturesInfoData> | null>(null);

    const hotelsFeaturesInfoData = useMemo(
        () => {
          if (cachedFeaturesInfoData.current) {
            return cachedFeaturesInfoData.current;
          }
    
          if (showRadarcharts && hotelsInfoData) {
            cachedFeaturesInfoData.current = formFeaturesInfoData(hotelsInfoData);
            return cachedFeaturesInfoData.current;
          } else {
            return undefined;
          }
        },
        [showRadarcharts, hotelsInfoData]
    );

    return hotelsFeaturesInfoData;
}

const formFeaturesInfoData = (hotelsData: HotelRecord[]) => {
    return hotelsData.map(
        hotelRec => {
            return Object.entries(hotelRec.featuresRatings).
                          map(
                            feature => {
                                return {
                                    name: feature[0],
                                    rating: feature[1],
                                }
                            }
                          );
        }
    );
};

export default useHotelsFeaturesInfoData;
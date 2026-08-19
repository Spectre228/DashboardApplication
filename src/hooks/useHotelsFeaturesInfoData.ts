import { useMemo, useRef } from "react";
import { HotelRecord } from "../appData/types";
import { formFeaturesInfoData } from "../utilities/utilities";

export const useHotelsFeaturesInfoData = (showRadarcharts: boolean, hotelsInfoData: HotelRecord[] | undefined) => {
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
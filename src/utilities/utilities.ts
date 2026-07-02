import { HotelRecord } from "../appData/types";

export const formFeaturesInfoData = (hotelsData: HotelRecord[]) => {
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
}
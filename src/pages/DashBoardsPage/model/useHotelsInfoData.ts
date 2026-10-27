import { useGetHotelsInfoDataQuery } from "../api/HotelsInfoApi";
import { validateArrayOfHotelRecords } from "./validators";

const useHotelsInfoData = (showBarchart: boolean, showRadarcharts: boolean) => {
    if (!showBarchart && !showRadarcharts) {
        return undefined;
    }

    const {
          data: hotelsInfoData,
    } = useGetHotelsInfoDataQuery({});

    try {
        validateArrayOfHotelRecords(hotelsInfoData);
    } catch (e) {
        return undefined;
    }

    return hotelsInfoData;
}

export default useHotelsInfoData;
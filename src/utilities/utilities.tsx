import { JSX } from "react";
import { HotelRecord } from "../appData/types";
import { BarChartDiagram } from "../components/dashBoards/BarChartDiagram/BarChartDiagram";

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
};

type RenderCallback<DT> = (data: DT[]) => JSX.Element ;

export const renderChart = <DT,>(show: boolean, data: DT[] | undefined, renderCallback: RenderCallback<DT>) => {
    if (show && data) {
        return renderCallback(data);
    } else if (show && !data) {
        return <div>Data Is Loading ...</div>
    } else {
        return <></>
    }
};
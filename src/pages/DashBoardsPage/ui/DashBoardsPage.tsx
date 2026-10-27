import { useSliceSelector } from "../../../shared";
import { BaseTickContentProps, TooltipContentProps, XAxisTickContentProps, YAxisTickContentProps } from "recharts";
import { BarChartDiagram } from "../../../widgets/BarChartDiagram";
import { RadarChartDiagram } from "../../../widgets/RadarChartDiagram";
import styles from "./DashBoardsPage.module.scss";
import { ColumnTextTickIcon, PictogramTickIcon, CustomTooltip, } from "../../../shared";
import useHotelsInfoData from "../model/useHotelsInfoData";
import useHotelsFeaturesInfoData from "../model/useHotelsFeaturesInfoData";
import { EntityRecord, HotelRecord, } from "../model/types";
import { renderChart } from "../lib/auxilaryFunctions";

const barChartHeaderStyles = {
  marginTop: "0px",
  marginBottom: "10px",
  marginLeft: "10px",
};

const radarChartHeaderStyles = {
    marginTop: "0px",
    marginBottom: "10px",
    marginLeft: "10px",
    marginRight: "10px",
};

const barChartXAxisTick = (props: XAxisTickContentProps) =>
                            <ColumnTextTickIcon textSplitterator={/\s(?=Hotel)/}
                                                                 {...props}
                            />
  
const barChartYAxisTick = (props: YAxisTickContentProps) =>
                            <PictogramTickIcon pictogram="⭐"
                                               otherSvgTextElementProps={{dy: 5, fontSize: 14}}
                                               {...props}
                                               textAnchor="end"
                            />

const radarChartAngleAxisTick = (props: BaseTickContentProps) =>
                                  <ColumnTextTickIcon textSplitterator=" "
                                                      {...props}
                                  />

const customTooltip = (props: TooltipContentProps) => {
  if (props.active) {
    return (
      <CustomTooltip payload={props.payload}
                     itemsPostfix="⭐"
      />
    );
  } else {
    return <div></div>;
  }
};

const DashBoardsPage = () => {
  const chartDispSettings = useSliceSelector((state) => state.settings.value);

  const hotelsInfoData = useHotelsInfoData(
    chartDispSettings.showBarchart,
    chartDispSettings.showRadarcharts
  );
  
  const hotelsFeaturesInfoData = useHotelsFeaturesInfoData(
    chartDispSettings.showRadarcharts,
    hotelsInfoData
  );
  

  const barChartRenderCallback = (data: HotelRecord[]) =>
                                    <div className={styles.mainContainer}>
                                      <BarChartDiagram<HotelRecord> objectName="Local Hotels Ratings"
                                                                    headerType="h2"
                                                                    headerStyles={barChartHeaderStyles}
                                                                    chartStyles={{width: "712.5px", height: "180px", margin: "auto"}}
                                                                    yAxisWidth={35}
                                                                    scrollTransitionWidth={750}
                                                                    data={data}
                                                                    dataKeys={{barNames: "name", barScales: "rating"}}
                                                                    yAxisTicks={[0, 1, 2, 3, 4, 5]}
                                                                    xAxisTick={barChartXAxisTick}
                                                                    yAxisTick={barChartYAxisTick}
                                                                    tooltip={customTooltip}
                                                                    style={{width: "100%", height: "100%"}}
                                      />
                                    </div>
  
  const radarChartsRenderCallback = (data: EntityRecord[][]) =>
                                       <div className={styles.gridContainer}>
                                          {
                                            data.
                                            map(
                                              (featuresRatingsDataSet, ind) =>
                                                  <RadarChartDiagram<EntityRecord> objectName={hotelsInfoData![ind].name}
                                                                                   headerType="h3"
                                                                                   headerStyles={radarChartHeaderStyles}
                                                                                   chartStyles={{width: "100%", height: "80%"}}
                                                                                   data={featuresRatingsDataSet}
                                                                                   dataKeys={{vertices: "name", dataScale: "rating"}}
                                                                                   radiusAxisTicks={[0, 1, 2, 3, 4, 5]}
                                                                                   angleAxisTick={radarChartAngleAxisTick}
                                                                                   tooltip={customTooltip}
                                                                                   style={{ height: "100%" }}
                                                  />
                                              )
                                          }
                                       </div>

  return (
    <div style={{width: "100%"}}>
      {
        renderChart<HotelRecord>(
          chartDispSettings.showBarchart,
          hotelsInfoData,
          barChartRenderCallback
        )
      }

      {
        renderChart<EntityRecord[]>(
          chartDispSettings.showRadarcharts,
          hotelsFeaturesInfoData,
          radarChartsRenderCallback
        )
      }
    </div>
  )
};

export default DashBoardsPage;
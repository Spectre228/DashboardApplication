import { BaseTickContentProps, TooltipContentProps, XAxisTickContentProps, YAxisTickContentProps } from "recharts";
import { BarChartDiagram } from "../../components/dashBoards/BarChartDiagram/BarChartDiagram";
import { RadarChartDiagram } from "../../components/dashBoards/RadarChartDiagram/RadarChartDiagram";
import BurgerMenu from "../../components/UI/BurgerMenu/BurgerMenu";
import { useGetStatisticsQuery } from "../../store/slices/StatisticsApi";
import { formFeaturesInfoData } from "../../utilities/utilities";
import styles from "./DashBoardsPage.module.scss";
import ColumnTextTickIcon from "../../components/dashBoards/CustomTickIcons/ColumnTextTickIcon/ColumnTextTickIcon";
import { PictogramTickIcon } from "../../components/dashBoards/CustomTickIcons/PictogramTickIcon/PictogramTickIcon";
import CustomTooltip from "../../components/dashBoards/Tooltips/CustomTooltip";

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

const radarChartRadiusAxisTick = (props: BaseTickContentProps) =>
                                    <PictogramTickIcon pictogram="⭐"
                                                       otherSvgTextElementProps={{/**transform: "rotate(-50)"**/dy:-3, fontSize: 12}}
                                                       {...props}
                                    />

const customTooltip = (props: TooltipContentProps) =>
                        <CustomTooltip active={props.active}
                                       payload={props.payload}
                                       itemsPostfix="⭐"
                        />


const DashBoardsPage = () => {
  const {
      data: hotelsInfoData,
  } = useGetStatisticsQuery({});

  return (
    <div style={{width: "100%"}}>
      <BurgerMenu/>
      <div className={styles.mainContainer}>
        {
          !hotelsInfoData ?
          <div>Data Is Loading ...</div> :
          <BarChartDiagram objectName="Local Hotels Ratings"
                           headerType="h2"
                           headerStyles={barChartHeaderStyles}
                           chartStyles={{width: "95%", height: "180px", margin: "auto"}}
                           yAxisWidth={35}
                           data={hotelsInfoData}
                           dataKeys={{barNames: "name", barScales: "rating"}}
                           yAxisTicks={[0, 1, 2, 3, 4, 5]}
                           xAxisTick={barChartXAxisTick}
                           yAxisTick={barChartYAxisTick}
                           tooltip={customTooltip}
                           style={{width: "100%", height: "100%"}}
          />
        }
      </div>
      <div className={styles.gridContainer}>
        {
          !hotelsInfoData ?
          <div>Data Is Loading ...</div> :
          formFeaturesInfoData(hotelsInfoData).
          map(
            (featuresRatingsDataSet, ind) =>
                <RadarChartDiagram objectName={hotelsInfoData[ind].name}
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
    </div>
  )
};

export default DashBoardsPage;
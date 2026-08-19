import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts'
import styles from "./RadarChartDiagram.module.scss";
import SlidingHeader from '../../SlidingHeader/SlidingHeader';
import { RadarChartDiagramProps } from './RadarChartDiagram.types';

export const RadarChartDiagram = <DT,>(
              {
                objectName,
                headerType,
                headerStyles,
                chartInnerMargins,
                chartStyles,
                data,
                dataKeys,
                radiusAxisTicks,
                radiusAxisTicksSize = 8,
                angleAxisTick,
                tooltip,
                ...otherProps
              }: RadarChartDiagramProps<DT>
             ) => {
  return (
    <div className={styles.diagram}
                   {...otherProps}
    >
        <SlidingHeader headerType={headerType}
                       title={objectName}
                       style={headerStyles}
        />
        <RadarChart style={chartStyles}
                    margin={chartInnerMargins}
                    responsive={true}
                    data={data}
        >
            <PolarGrid/>
            <PolarAngleAxis dataKey={dataKeys.vertices}
                            tickSize={radiusAxisTicksSize}
                            tick={angleAxisTick}
            />
            <PolarRadiusAxis ticks={radiusAxisTicks}
                             style={{display: "none"}}
            />
            <Tooltip content={tooltip}/>
            <Radar dataKey={dataKeys.dataScale}
                   fill="#fff16e"
                   stroke="#fff16e"
                   fillOpacity={0.6}
            />
        </RadarChart>
    </div>
  );
};
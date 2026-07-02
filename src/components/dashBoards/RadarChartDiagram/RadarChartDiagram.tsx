import { ComponentPropsWithoutRef, CSSProperties, JSX } from 'react'
import { BaseTickContentProps, Margin, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts'
import { useGetHotelsFeaturesInfoQuery } from '../../../hooks/useGetHotelsFeaturesInfoQuery';
import styles from "./RadarChartDiagram.module.scss";
import SlidingHeader from '../../SlidingHeader/SlidingHeader';
import ColumnTextTickIcon from '../CustomTickIcons/ColumnTextTickIcon/ColumnTextTickIcon';
import { ChartBaseProps } from '../../../appData/types';
import { AxisTick } from 'recharts/types/util/types';

interface RadarChartDiagramProps extends ChartBaseProps {
    dataKeys: {
      vertices: string,
      dataScale: string,
    },
    chartInnerMargins?: Partial<Margin>,
    radiusAxisTicks?: AxisTick[],
    radiusAxisTicksSize?: number,
    angleAxisTick?: (props: BaseTickContentProps) => JSX.Element,
};

export const RadarChartDiagram = (
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
              }: RadarChartDiagramProps
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
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, TooltipContentProps, XAxis, XAxisTickContentProps, YAxis, YAxisTickContentProps } from 'recharts';
import { useGetStatisticsQuery } from '../../../store/slices/StatisticsApi';
import styles from "./BarChartDiagram.module.scss";
import { PictogramTickIcon } from '../CustomTickIcons/PictogramTickIcon/PictogramTickIcon';
import { ComponentPropsWithoutRef, JSX } from 'react';
import SlidingHeader from '../../SlidingHeader/SlidingHeader';
import { ChartBaseProps } from '../../../appData/types';
import ColumnTextTickIcon from '../CustomTickIcons/ColumnTextTickIcon/ColumnTextTickIcon';
import { AxisTick } from 'recharts/types/util/types';
import CustomTooltip from '../Tooltips/CustomTooltip';

interface BarChartDiagramProps extends ChartBaseProps {
  dataKeys: {
    barNames: string,
    barScales: string,
  },
  yAxisWidth: number,
  yAxisTicks?: AxisTick[],
  xAxisTick?: (props: XAxisTickContentProps) => JSX.Element,
  yAxisTick?: (props: YAxisTickContentProps) => JSX.Element,
  //tooltip?: (props: TooltipContentProps) => JSX.Element,
};

// const headerStyles = {
//   marginTop: "0px",
//   marginBottom: "10px",
//   marginLeft: "10px",
// };

export const BarChartDiagram = (
              {
                objectName,
                headerType,
                headerStyles,
                chartStyles,
                yAxisWidth,
                data,
                dataKeys,
                yAxisTicks,
                xAxisTick,
                yAxisTick,
                tooltip,
                ...otherProps
              }: BarChartDiagramProps
             ) => {
  return (
    <div className={styles.diagram}
                   {...otherProps}
    >
        <SlidingHeader headerType={headerType}
                       title={objectName}
                       style={headerStyles}
        />
        <BarChart data={data}
                  style={chartStyles}
                  responsive={true}
        >
            <CartesianGrid strokeDasharray="0 0"
                           stroke="#ffffff"
                           vertical={false}/>
            <XAxis dataKey={dataKeys.barNames}
                   stroke="#ffffff"
                   interval={0}
                   tick={xAxisTick}
                   tickMargin={10}/>
            <YAxis width={yAxisWidth}
                   stroke="#ffffff"
                   interval={0}
                   ticks={yAxisTicks}
                   tick={yAxisTick}/>
            <Tooltip labelStyle={{color: "black"}}
                     itemStyle={{color: "black"}}
                     content={tooltip}
            />
            <Bar dataKey={dataKeys.barScales}
                 fill="#fff16e"
                 activeBar={{ fill: 'pink', stroke: 'blue' }}
                 radius={[10, 10, 0, 0]}
            />
        </BarChart>
    </div>
  )
};
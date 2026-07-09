import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, XAxisTickContentProps, YAxis, YAxisTickContentProps } from 'recharts';
import styles from "./BarChartDiagram.module.scss";
import { JSX } from 'react';
import SlidingHeader from '../../SlidingHeader/SlidingHeader';
import { ChartBaseProps } from '../../../appData/types';
import { AxisTick } from 'recharts/types/util/types';
import { useScrollModToggler } from '../../../hooks/useScrollModToggler';

interface BarChartDiagramProps extends ChartBaseProps {
  dataKeys: {
    barNames: string,
    barScales: string,
  },
  yAxisWidth: number,
  scrollTransitionWidth: number,
  yAxisTicks?: AxisTick[],
  xAxisTick?: (props: XAxisTickContentProps) => JSX.Element,
  yAxisTick?: (props: YAxisTickContentProps) => JSX.Element,
};

export const BarChartDiagram = (
              {
                objectName,
                headerType,
                headerStyles,
                chartStyles,
                yAxisWidth,
                scrollTransitionWidth,
                data,
                dataKeys,
                yAxisTicks,
                xAxisTick,
                yAxisTick,
                tooltip,
                ...otherProps
              }: BarChartDiagramProps
             ) => {
  const [outerContRef, isScrollable] = useScrollModToggler(scrollTransitionWidth);
  
  return (
    <div className={`${styles.diagram} ${isScrollable ? styles.scrollable : ""}`}
               ref={outerContRef}
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
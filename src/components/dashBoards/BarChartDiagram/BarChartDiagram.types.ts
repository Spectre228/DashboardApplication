import { ChartBaseProps } from '../../../appData/types';
import { AxisTick } from 'recharts/types/util/types';
import { XAxisTickContentProps, YAxisTickContentProps } from 'recharts';
import { JSX } from 'react';

interface DataKeys {
  barNames: string,
  barScales: string,
}

export interface BarChartDiagramProps<DT> extends ChartBaseProps<DT> {
  dataKeys: DataKeys,
  yAxisWidth: number,
  scrollTransitionWidth: number,
  yAxisTicks?: AxisTick[],
  xAxisTick?: (props: XAxisTickContentProps) => JSX.Element,
  yAxisTick?: (props: YAxisTickContentProps) => JSX.Element,
};
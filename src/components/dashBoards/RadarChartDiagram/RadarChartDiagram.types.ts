import { JSX } from 'react'
import { ChartBaseProps } from "../../../appData/types";
import { BaseTickContentProps, Margin, } from 'recharts';
import { AxisTick } from 'recharts/types/util/types';

interface DataKeys {
  vertices: string,
  dataScale: string,
}

export interface RadarChartDiagramProps<DT> extends ChartBaseProps<DT> {
  dataKeys: DataKeys
  chartInnerMargins?: Partial<Margin>,
  radiusAxisTicks?: AxisTick[],
  radiusAxisTicksSize?: number,
  angleAxisTick?: (props: BaseTickContentProps) => JSX.Element,
};
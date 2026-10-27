import { ComponentPropsWithoutRef, CSSProperties, JSX, } from "react";
import { TooltipContentProps } from "recharts/types/component/Tooltip";

export interface RouteReckord {
    name: string,
    path: string,
};

export interface ChartBaseProps<DT> extends ComponentPropsWithoutRef<"div"> {
    objectName: string,
          
    headerType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    headerStyles?: CSSProperties,

    chartStyles?: CSSProperties,

    data: DT[],

    tooltip?: (props: TooltipContentProps) => JSX.Element,
};
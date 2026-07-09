import { ComponentPropsWithoutRef, CSSProperties, JSX } from "react";
import { TooltipContentProps } from "recharts/types/component/Tooltip";

export interface HotelRecord {
    name: string,
    rating: number,
    featuresRatings: {
        comfort: number,
        staffHospitality: number,
        food: number,
        entartainmentFacilities: number,
        price: number,
    },
};

export interface ChartBaseProps extends ComponentPropsWithoutRef<"div"> {
    objectName: string,
          
    headerType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    headerStyles?: CSSProperties,

    chartStyles?: CSSProperties,

    data: object[],

    tooltip?: (props: TooltipContentProps) => JSX.Element,
};
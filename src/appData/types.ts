import { ComponentPropsWithoutRef, CSSProperties, JSX, ReactNode } from "react";
import { TooltipContentProps } from "recharts/types/component/Tooltip";

export interface RouteReckord {
    name: string,
    path: string,
    element: ReactNode,
};

interface FeaturesRatings {
    comfort: number,
    staffHospitality: number,
    food: number,
    entartainmentFacilities: number,
    price: number,
}

export interface EntityRecord {
    name: string,
    rating: number,
}

export interface HotelRecord {
    name: string,
    rating: number,
    featuresRatings: FeaturesRatings,
};

export interface ChartBaseProps<DT> extends ComponentPropsWithoutRef<"div"> {
    objectName: string,
          
    headerType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    headerStyles?: CSSProperties,

    chartStyles?: CSSProperties,

    data: DT[],

    tooltip?: (props: TooltipContentProps) => JSX.Element,
};
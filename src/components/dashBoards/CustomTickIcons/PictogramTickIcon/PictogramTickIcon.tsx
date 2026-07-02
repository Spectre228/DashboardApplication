import { SVGTextElementAttributes } from "react";
import { BaseTickContentProps } from "recharts/types/util/types";

interface PictogramTickIconProps extends BaseTickContentProps {
  pictogram: string,
  // dx?: number,
  // dy?: number,
  // fontSize?: number,
  otherSvgTextElementProps?: SVGTextElementAttributes<SVGTextElement>,
  //SVGTextProps: SVGTextEleme
}

export const PictogramTickIcon = (
              {
                x,
                y,
                payload,
                textAnchor,
                pictogram,
                otherSvgTextElementProps,
              }: PictogramTickIconProps
             ) => {
  return (
    <text {...otherSvgTextElementProps}
          x={x}
          y={y}
          fill="#ffffff"
          textAnchor={textAnchor}
    >
        {`${payload.value}${pictogram}`}
    </text>
  );
};
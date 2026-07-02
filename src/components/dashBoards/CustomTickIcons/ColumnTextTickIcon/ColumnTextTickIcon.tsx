import { BaseTickContentProps } from "recharts";

interface ColumnTextTickIconProps extends BaseTickContentProps {
  textSplitterator: RegExp | string ,
};

const ColumnTextTickIcon = ({ x, y, textAnchor, payload, textSplitterator}: ColumnTextTickIconProps) => {
  const words = String(payload.value).split(textSplitterator);

  return (
    <text x={x}
          y={y}
          textAnchor={textAnchor}
          fill="#ffffff"
    >
        {
            words.map(
                (word, ind) =>
                  <tspan x={x}
                         dy={ind === 0 ? 0 : 15}
                  >
                    {word}
                  </tspan>
            )
        }
    </text>
  );
};

export default ColumnTextTickIcon;
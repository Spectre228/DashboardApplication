import { TooltipPayload } from "recharts";

interface CustomTooltipProps {
  payload: TooltipPayload,
  label?: string | number,
  itemsPostfix?: string,
}

const CustomTooltip = ({ payload, label, itemsPostfix, }: CustomTooltipProps) => {
  
  return (
    <div>
        {label ? <div>{label}</div> : null}
        <div>
          {
            payload.map(
              (item, ind) =>
                <div key={ind} style={{color: "red"}}>
                  {`${item.name} : ${item.value}${itemsPostfix}`}
                </div>
            )
          }
        </div>
    </div>
  );
  
};

export default CustomTooltip;
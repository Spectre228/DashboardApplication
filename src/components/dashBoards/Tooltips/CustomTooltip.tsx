import { TooltipContentProps, TooltipPayload } from "recharts";
//import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

interface CustomTooltipProps {
  active: boolean,
  payload: TooltipPayload,
  label?: string | number,
  itemsPostfix?: string
}

const CustomTooltip = ({ active, payload, label, itemsPostfix }: CustomTooltipProps) => {
  if (active)
  {
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
    )
  }

  return null;
};

export default CustomTooltip;
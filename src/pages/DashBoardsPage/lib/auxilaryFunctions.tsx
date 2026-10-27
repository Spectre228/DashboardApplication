import { RenderCallback } from "./auxilaryTypes";

export const isFeturesRatings = (value: unknown) => {
    if (!isObject(value)) {
        return false;
    }

    const valueKeys = ["Comfort", "Staff Hospitality", "Food", "Entartaining Facilities", "Price"];
    const hasFields = valueKeys.every(key => (typeof value[key]) === "number");

    return hasFields;
}

export const isObject = (value: unknown): value is Record<string, unknown> => ((typeof value) === "object")
                                                                               &&
                                                                              (value !== null) ;

export const renderChart = <DT,>(show: boolean, data: DT[] | undefined, renderCallback: RenderCallback<DT>) => {
    if (show && data) {
        return renderCallback(data);
    } else if (show && !data) {
        return <div>Data Is Loading ...</div>
    } else {
        return <></>
    }
};
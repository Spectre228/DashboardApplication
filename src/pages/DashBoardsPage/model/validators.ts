import { HotelRecord } from "./types";
import { isObject, isFeturesRatings, } from "../lib/auxilaryFunctions";

export function validateArrayOfHotelRecords(data: unknown): asserts data is HotelRecord[] {
    if (!Array.isArray(data)) {
        throw new Error("Data is not an array");
    }

    data.forEach((record) => {

        if (!isObject(record)) {
            throw new Error("Array's element is not an object");
        }

        const isHotelRecord = ((typeof record.name) === "string")
                               &&
                              ((typeof record.rating) === "number")
                               &&
                              isFeturesRatings(record.featuresRatings) ;
        
        if (!isHotelRecord) {
            throw new Error("Array's element is not a Hotel Record");
        }
    });
}
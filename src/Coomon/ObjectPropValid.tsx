import { IFilter } from "../Redux/Slice/FilterReducer";

export const ObjectPropValid = (obj: object) => {
    const objKeys = Object.keys(obj);
    const validObj = {};
    objKeys.forEach((key) => {
        //@ts-ignore
        if (obj[key] && obj[key].trim()) {
            //@ts-ignore
            validObj[key] = obj[key];
        }
    });

    return validObj;
};

export const FilterObject = (filters: IFilter) => {
    return ObjectPropValid({
        [`_sort`]: filters.sortBy,
        [`_order`]: filters.byTime,
        isDone: filters.isDone,
        q: filters.byText,
    });
};
export const startDefaultUrl = (obj: any): IFilter => {
    return {
        byText: obj.q ? obj.q : "",
        byTime: obj[`_order`] ? obj[`_order`] : "desc",
        sortBy: "postTime",
        isDone: obj.isDone ? obj.isDone : "",
    };
};

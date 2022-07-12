import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type IPagination = {
    currentPage: number;
    totalPage: null | number;
    maxItemInPage: number;
};
export type TypeIsDone = "" | "false" | "true";
export type TypeByTime = "asc" | "desc";
export type IFilter = {
    isDone: TypeIsDone;
    byTime: TypeByTime;
    byText: string;
    sortBy: string;
};

export interface FilterInit {
    pagination: IPagination;
    filter: IFilter;
}

const initialState: FilterInit = {
    pagination: {
        currentPage: 1,
        totalPage: null,
        maxItemInPage: 8,
    },
    filter: {
        byText: "",
        byTime: "desc",
        sortBy: "postTime",
        isDone: "",
    },
};

const Filter = createSlice({
    name: "Filter",
    initialState,
    reducers: {
        setTotalPAge(state, action: PayloadAction<number>) {
            state.pagination.totalPage = Math.ceil(
                action.payload / state.pagination.maxItemInPage
            );
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.pagination.currentPage = action.payload;
        },
        setByText(state, action: PayloadAction<string>) {
            state.filter.byText = action.payload;
        },
        setIsDone(state, action: PayloadAction<"" | "false" | "true">) {
            state.filter.isDone = action.payload;
        },
        setByTime(state, action: PayloadAction<"asc" | "desc">) {
            state.filter.byTime = action.payload;
        },
        setAllFilters(state, action: PayloadAction<IFilter>) {
            state.filter = action.payload;
        },
    },
});
export default Filter.reducer;
export const {
    setCurrentPage,
    setTotalPAge,
    setByText,
    setByTime,
    setIsDone,
    setAllFilters,
} = Filter.actions;

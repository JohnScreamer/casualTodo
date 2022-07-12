import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import FilterReducer from "./Slice/FilterReducer";
import HardForm from "./Slice/HardForm";
import ThemeReducer from "./Slice/ThemeReducer";
import ToDoReducer from "./Slice/ToDoReducer";

export const store = configureStore({
    reducer: {
        todo: ToDoReducer,
        filter: FilterReducer,
        theme: ThemeReducer,
        form: HardForm,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

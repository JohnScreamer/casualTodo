import { TestRTKQ } from "./RTKQ/TestRTKQ.api";
import { placeholderApi } from "./RTKQ/Placeholder.api";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import FilterReducer from "./Slice/FilterReducer";
import HardForm from "./Slice/HardForm";
import ThemeReducer from "./Slice/ThemeReducer";
import ToDoReducer from "./Slice/ToDoReducer";
import UsersReducer from "./Slice/UsersReducer";

export const store = configureStore({
    reducer: {
        todo: ToDoReducer,
        filter: FilterReducer,
        theme: ThemeReducer,
        form: HardForm,
        users: UsersReducer,
        [placeholderApi.reducerPath]: placeholderApi.reducer,
        [TestRTKQ.reducerPath]: TestRTKQ.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            placeholderApi.middleware,
            TestRTKQ.middleware
        ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

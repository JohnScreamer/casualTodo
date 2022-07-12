import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    DeleteTodo,
    Get_Todo,
    PatchStatusTodo,
    PostTodo,
} from "../../API/ToDoAPI";
import { FilterObject } from "../../Coomon/ObjectPropValid";
import { RootState } from "../store";
import { setTotalPAge } from "./FilterReducer";
export type ITodo = {
    id: number;
    text: string;
    title: string;
    postTime: number;
    isDone: boolean;
};

interface InitTodo {
    toDos: Array<ITodo>;
    error: string;
    loading: {
        firstTodoLoad: boolean;
        todoListChange: boolean;
    };
}

const initialState: InitTodo = {
    toDos: [],
    error: "",
    loading: {
        firstTodoLoad: false,
        todoListChange: false,
    },
};
const Todo = createSlice({
    name: "ToDo",
    initialState,
    reducers: {
        addToDo(state, action: PayloadAction<ITodo>) {
            state.toDos = [...state.toDos, action.payload];
        },
        removeToDo(state, action: PayloadAction<number>) {
            state.toDos = state.toDos.filter(
                (todo) => todo.id !== action.payload
            );
        },
        statusToggle(state, action: PayloadAction<number>) {
            state.toDos = state.toDos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.isDone = !todo.isDone;
                }
                return todo;
            });
        },
    },
    extraReducers(builder) {
        builder
            .addCase(firstRenderFetchAllTodo.fulfilled, (state, action) => {
                state.toDos = action.payload;
                console.log("done");

                state.loading.firstTodoLoad = false;
            })
            .addCase(firstRenderFetchAllTodo.pending, (state) => {
                console.log("pending");
                state.loading.firstTodoLoad = true;
            })
            .addCase(firstRenderFetchAllTodo.rejected, (state, action) => {
                state.loading.firstTodoLoad = false;
                state.error = String(action.payload);
            })
            .addCase(FetchAllTodo.fulfilled, (state, action) => {
                state.toDos = action.payload;
            })
            .addCase(FetchAllTodo.pending, (state) => {})
            .addCase(FetchAllTodo.rejected, (state, action) => {
                state.error = String(action.payload);
            })

            .addCase(FetchAddTodo.fulfilled, (state) => {
                state.loading.todoListChange = false;
            })
            .addCase(FetchAddTodo.pending, (state) => {
                state.loading.todoListChange = true;
            })
            .addCase(FetchAddTodo.rejected, (state, action) => {
                state.loading.todoListChange = false;
                state.error = String(action.payload);
            })
            .addCase(FetchStatusTodo.fulfilled, (state, action) => {
                state.toDos = state.toDos.filter((todo) => {
                    if (todo.id === action.payload.id) {
                        todo.isDone = !todo.isDone;
                    }
                    return todo;
                });
                state.loading.todoListChange = false;
            })
            .addCase(FetchStatusTodo.pending, (state) => {
                state.loading.todoListChange = true;
            })
            .addCase(FetchStatusTodo.rejected, (state, action) => {
                state.loading.todoListChange = false;
                state.error = String(action.payload);
            })
            .addCase(FetchTextTodo.fulfilled, (state) => {
                state.loading.todoListChange = false;
            })
            .addCase(FetchTextTodo.pending, (state) => {
                state.loading.todoListChange = true;
            })
            .addCase(FetchTextTodo.rejected, (state, action) => {
                state.loading.todoListChange = false;
                state.error = String(action.payload);
            });
    },
});

export default Todo.reducer;
export const { addToDo, removeToDo, statusToggle } = Todo.actions;

export const firstRenderFetchAllTodo = createAsyncThunk<
    Array<ITodo>,
    object,
    { rejectValue: string }
>(
    "Todo/firstRenderFetchAllTodo",
    async function (data, { rejectWithValue, dispatch }) {
        const response = await Get_Todo(data);

        if (response.status < 199 || response.status > 299) {
            return rejectWithValue(response.statusText);
        }
        dispatch(setTotalPAge(response.data.length));
        return response.data;
    }
);

export const FetchAllTodo = createAsyncThunk<
    Array<ITodo>,
    object,
    { rejectValue: string }
>("Todo/FetchAllTodo", async function (data, { rejectWithValue, dispatch }) {
    const response = await Get_Todo(data);

    if (response.status < 199 || response.status > 299) {
        return rejectWithValue(response.statusText);
    }
    dispatch(setTotalPAge(response.data.length));
    return response.data;
});

export const FetchAddTodo = createAsyncThunk<
    ITodo,
    ITodo,
    { rejectValue: string }
>(
    "Todo/PostTodo",
    async function (todo, { rejectWithValue, getState, dispatch }) {
        const response = await PostTodo(todo);
        if (response.status < 199 || response.status > 299) {
            return rejectWithValue(response.statusText);
        }
        const state = getState() as RootState;

        dispatch(FetchAllTodo(FilterObject(state.filter.filter)));

        return todo;
    }
);

export const FetchStatusTodo = createAsyncThunk<
    ITodo,
    ITodo,
    { rejectValue: string }
>(
    "Todo/FetchStatusTodo",
    async function (todo, { rejectWithValue, dispatch, getState }) {
        const response = await PatchStatusTodo(todo);
        if (response.status < 199 || response.status > 299) {
            return rejectWithValue(response.statusText);
        }
        const state = getState() as RootState;
        dispatch(FetchAllTodo(FilterObject(state.filter.filter)));
        return todo;
    }
);
export const FetchDeleteTodo = createAsyncThunk<
    number,
    number,
    { rejectValue: string }
>(
    "Todo/FetchDeleteTodo",
    async function (id, { rejectWithValue, dispatch, getState }) {
        const response = await DeleteTodo(id);
        if (response.status < 199 || response.status > 299) {
            return rejectWithValue(response.statusText);
        }
        const state = getState() as RootState;
        dispatch(FetchAllTodo(FilterObject(state.filter.filter)));
        return id;
    }
);
export const FetchTextTodo = createAsyncThunk<
    ITodo,
    ITodo,
    { rejectValue: string }
>(
    "Todo/FetchTextTodo",
    async function (todo, { rejectWithValue, dispatch, getState }) {
        const response = await PatchStatusTodo(todo);
        if (response.status < 199 || response.status > 299) {
            return rejectWithValue(response.statusText);
        }
        const state = getState() as RootState;
        dispatch(FetchAllTodo(FilterObject(state.filter.filter)));
        return todo;
    }
);

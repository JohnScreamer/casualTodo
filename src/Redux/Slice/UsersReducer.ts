import { GetUsers } from "./../../API/UsersApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import User from "../../Components/UsersComponents/User/User";

export interface IAdress {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
        lat: number;
        lng: number;
    };
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAdress;
}
type IInitialState = {
    Users: Array<IUser>;
    isLoading: boolean;
};

const initialState: IInitialState = {
    Users: [],
    isLoading: false,
};

const Users = createSlice({
    name: "Users",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(FetchUsers.fulfilled, (state, action) => {
                state.Users = action.payload;
                state.isLoading = false;
            })
            .addCase(FetchUsers.pending, (state) => {
                state.isLoading = true;
            });
    },
});

export default Users.reducer;
export const {} = Users.actions;

export const FetchUsers = createAsyncThunk<
    Array<IUser>,
    void,
    { rejectValue: string }
>("Users/FetchUsers", async function (_, { rejectWithValue }) {
    const response = await GetUsers();
    if (response.status < 200 || response.status > 299) {
        return rejectWithValue("Something goes wrong");
    }
    return response.data;
});

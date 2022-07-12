import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultForm } from "../../Constants/InitForm";
import SSFormRequest from "../../Coomon/SessionStorageRequest";
export type FormType = {
    login: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: "" | "male" | "female";
    isAgree: boolean;
};
export type AllFormType = {
    form: FormType;
};
const initialState: AllFormType = {
    form: SSFormRequest() || defaultForm,
};

const HardForm = createSlice({
    name: "HardForm",
    initialState,
    reducers: {
        editForm(state, action: PayloadAction<FormType>) {
            state.form = action.payload;
        },
        resetForm(state) {
            sessionStorage.removeItem("form");
            state.form = defaultForm;
        },
    },
});
export default HardForm.reducer;
export const { editForm, resetForm } = HardForm.actions;

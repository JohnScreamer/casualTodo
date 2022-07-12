import { FormType } from "../Redux/Slice/HardForm";

type FilterType = {
    text: string;
    title: string;
};

export const InitForm: FilterType = {
    text: "",
    title: "",
};

export const defaultForm: FormType = {
    login: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    isAgree: false,
};

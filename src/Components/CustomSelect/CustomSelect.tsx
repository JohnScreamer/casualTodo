import s from "./CustomSelect.module.scss";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FC, useState } from "react";
import { Controller } from "react-hook-form";
import { FormType } from "../../Redux/Slice/HardForm";

interface ICustomSelect {
    defaultValue?: string;
    fn: (data: any) => void;
    option: Array<any>;
    labelName?: string;
    control?: any;
    setForm?: any;
}
const CustomSelect: FC<ICustomSelect> = ({
    labelName,
    defaultValue,
    fn,
    option,
    control,
    setForm,
}) => {
    const handleChange = (event: SelectChangeEvent) => {
        fn(event.target.value);
    };
    const options = option.map((option) => (
        <MenuItem key={option.name} value={option.value}>
            {option.name}
        </MenuItem>
    ));
    if (control) {
        return (
            <div>
                <label> {labelName}</label>
                <Controller
                    name="gender"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <Select
                            labelId="demo-simple-select-filled-label"
                            variant="standard"
                            id="demo-simple-select-filled"
                            // value={defaultValue}
                            // onChange={handleChange}
                            disableUnderline
                            value={value}
                            onChange={(e) => {
                                onChange(e.target.value);
                                setForm((state: FormType) => {
                                    return { ...state, gender: e.target.value };
                                });
                            }}
                        >
                            {options}
                        </Select>
                    )}
                />
            </div>
        );
    } else {
        return (
            <div>
                <label> {labelName}</label>

                <Select
                    labelId="demo-simple-select-filled-label"
                    variant="standard"
                    id="demo-simple-select-filled"
                    value={defaultValue}
                    onChange={handleChange}
                    disableUnderline
                    defaultValue={defaultValue ? defaultValue : ""}
                >
                    <MenuItem disabled value="">
                        <em>Placeholder</em>
                    </MenuItem>
                    {options}
                </Select>
            </div>
        );
    }
};
export default CustomSelect;

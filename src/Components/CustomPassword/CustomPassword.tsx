import React, { useState } from "react";
import s from "./CustomPassword.module.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const CustomPassword = () => {
    const [inputType, setInputType] = useState(false);
    const toggleInputType = (): void => {
        setInputType((state) => !state);
    };
    return (
        <div className={s.wrapper}>
            <input type={inputType ? "text" : "password"} maxLength={16} />

            <span onClick={toggleInputType}>
                {inputType ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
        </div>
    );
};

export default CustomPassword;

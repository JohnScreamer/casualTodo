import React, { FC } from "react";
interface ICustomCheckBox {
    name: string;
    type?: "checkbox" | "radio";
    value: string | number;
    onChange: (value: any) => void;
}

const CustomCheckBox: FC<ICustomCheckBox> = ({
    name,
    type,
    value,
    onChange,
}) => {
    return (
        <div>
            <label htmlFor={name}>ssss</label>
            <input
                style={{ display: "none" }}
                type={type ? type : "checkbox"}
                id={name}
                value={value}
                onChange={() => onChange(value)}
            />
        </div>
    );
};

export default CustomCheckBox;

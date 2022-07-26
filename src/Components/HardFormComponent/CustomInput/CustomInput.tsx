import { FC, memo } from "react";
import s from "./CustomInput.module.scss";
import ClearIcon from "@mui/icons-material/Clear";
type CustomInputType = {
    name: string;
    labelName: string;
    value: string;
    register: any;
    setValue: (value: any) => void;
    type?: string;
    error: {
        message: string;
    };
};
interface cc extends React.HTMLProps<HTMLInputElement> {}

const CustomInput: FC<CustomInputType> = ({
    labelName,
    name,
    value,
    type,
    register,
    error,
    setValue,
}) => {
    const errorMessage = error?.message ? error?.message : "";

    return (
        <div className={s.customInputWrapper}>
            <label htmlFor={name}>{labelName}</label>
            {value && (
                <ClearIcon
                    onClick={() => {
                        setValue((state: any) => {
                            return {
                                ...state,
                                [name]: "",
                            };
                        });
                    }}
                />
            )}
            <input
                type={type ? type : "text"}
                className={error?.message ? s.error : ""}
                id={name}
                {...register}
                value={value}
                onChange={(e) =>
                    setValue((state: any) => {
                        return {
                            ...state,
                            [name]: e.target.value,
                        };
                    })
                }
            />
            {!!errorMessage && (
                <div
                    style={{
                        color: "red",
                        fontSize: "18px",
                        marginTop: "5px",
                    }}
                >
                    {" "}
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default memo(CustomInput);

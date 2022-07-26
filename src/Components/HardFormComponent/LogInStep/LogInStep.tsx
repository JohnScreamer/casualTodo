import { FC, useRef, useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import s from "./LogInStep.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
interface IPersonInfoStep {
    setForm: (state: any) => void;
    password: string;
    login: string;
    setStep: (step: number) => void;
    register: any;
    errors: any;
    trigger: any;
}
const LogInStep: FC<IPersonInfoStep> = ({
    setForm,
    password,
    login,
    register,
    errors,
    trigger,
    setStep,
}) => {
    const isDisabled = !!Object.keys(errors).length;
    const { t } = useTranslation();
    const validTest = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const isValid = await trigger();
        console.log(isValid);

        if (isValid) {
            setStep(1);
        }
    };

    const linkRef = useRef(null);
    return (
        <div>
            <CustomInput
                register={{
                    ...register("login", {
                        required: {
                            value: true,
                            message: t("requiredField"),
                        },
                        minLength: {
                            value: 4,
                            message: `${t("minLength")} 4`,
                        },
                    }),
                }}
                error={errors.login}
                name="login"
                setValue={setForm}
                value={login}
                labelName={t("login")}
            />
            <span></span>
            <CustomInput
                register={{
                    ...register("password", {
                        required: {
                            value: true,
                            message: t("requiredField"),
                        },
                        minLength: {
                            value: 8,
                            message: `${t("minLength")} 8`,
                        },
                        pattern: {
                            value: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
                            message:
                                "Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long",
                        },
                    }),
                }}
                type="password"
                error={errors.password}
                name="password"
                setValue={setForm}
                value={password}
                labelName={t("password")}
            />

            {/* <Select
                options={options}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
            /> */}
            <button
                disabled={isDisabled}
                className="nextStepBtn"
                onClick={validTest}
            >
                {t("nextStep")}
            </button>
        </div>
    );
};

export default LogInStep;

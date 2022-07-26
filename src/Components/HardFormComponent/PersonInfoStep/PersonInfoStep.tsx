import { FC, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CustomInput from "../CustomInput/CustomInput";
interface IPersonInfoStep {
    setForm: (state: any) => void;
    firstName: string;
    lastName: string;
    setStep: (step: number) => void;
    register: any;
    errors: any;
    trigger: any;
}
const PersonInfoStep: FC<IPersonInfoStep> = ({
    firstName,
    lastName,
    register,
    setForm,
    setStep,
    errors,
    trigger,
}) => {
    const isDisabled = !!Object.keys(errors).length;
    const { t } = useTranslation();
    const isValid = () => {
        return trigger(["login", "password"]);
    };
    const linkRef = useRef(null);
    const validTest = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const valid = await trigger();
        console.log(valid);

        if (valid) {
            setStep(2);
        }
    };

    return (
        <div>
            <CustomInput
                register={{
                    ...register("firstName", {
                        required: {
                            value: true,
                            message: t("requiredField"),
                        },
                        minLength: {
                            value: 2,
                            message: `${t("minLength")} 2`,
                        },
                    }),
                }}
                error={errors.firstName}
                name={"firstName"}
                setValue={setForm}
                value={firstName}
                labelName={t("firstName")}
            />
            <CustomInput
                register={{
                    ...register("lastName", {
                        required: {
                            value: true,
                            message: t("requiredField"),
                        },
                        minLength: {
                            value: 2,
                            message: `${t("minLength")} 2`,
                        },
                    }),
                }}
                error={errors.lastName}
                name="lastName"
                setValue={setForm}
                value={lastName}
                labelName={t("lastName")}
            />
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

export default PersonInfoStep;

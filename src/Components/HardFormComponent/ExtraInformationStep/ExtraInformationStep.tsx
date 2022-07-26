import { Email } from "@mui/icons-material";
import { FormControlLabel, Checkbox } from "@mui/material";
import { FC, useTransition } from "react";
import { Controller } from "react-hook-form";
import { Genders } from "../../../Constants/SelectConstants";
import { FormType } from "../../../Redux/Slice/HardForm";
import CustomSelect from "../../CustomSelect/CustomSelect";
import CustomInput from "../CustomInput/CustomInput";
import s from "./ExtraInformationStep.module.scss";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { useTranslation } from "react-i18next";
interface IExtraInfoStep {
    setForm: (state: any) => void;
    email: string;
    setStep: (step: number) => void;
    register: any;
    errors: any;
    trigger: any;
    gender: "" | "male" | "female";
    isAgree: boolean;
    control: any;
}
const ExtraInformationStep: FC<IExtraInfoStep> = ({
    register,
    setForm,
    setStep,
    errors,
    trigger,
    email,
    gender,
    isAgree,
    control,
}) => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const isDisabled = !!Object.keys(errors).length;
    const { t } = useTranslation();
    const validTest = async () => {
        const isValid = await trigger(["email", "isAgree", "Gander"]);
        console.log();

        if (isValid) {
            setStep(3);
        }
    };
    const selectGender = (gender: string) => {
        setForm((state: any) => ({ ...state, gender: gender }));
    };

    return (
        <div>
            <CustomInput
                register={{
                    ...register("email", {
                        required: {
                            value: true,
                            message: t("requiredField"),
                        },
                        minLength: {
                            value: 6,
                            message: `${t("minLength")} 6`,
                        },
                        pattern: {
                            value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/,
                            message: t("notValidEmail"),
                        },
                    }),
                }}
                error={errors.email}
                name={"email"}
                setValue={setForm}
                value={email}
                labelName={t("email")}
            />

            <CustomSelect
                fn={selectGender}
                option={Genders}
                defaultValue={gender}
                labelName="Gander"
                control={control}
                setForm={setForm}
            />
            <span style={{ color: "red" }}>
                {errors.gender && t("requiredField")}
            </span>

            <div>
                <FormControlLabel
                    label={t("isAgree")}
                    control={
                        <Controller
                            name="isAgree"
                            control={control}
                            defaultValue={isAgree}
                            rules={{ required: true }}
                            render={({ field: { onChange, value } }) => (
                                <Checkbox
                                    {...label}
                                    sx={{
                                        color: "red",
                                        "&.Mui-checked": {
                                            color: "#80629c",
                                        },
                                    }}
                                    value={isAgree}
                                    checked={isAgree}
                                    onChange={(e) => {
                                        onChange(!isAgree);
                                        setForm((state: FormType) => {
                                            return {
                                                ...state,
                                                isAgree: !isAgree,
                                            };
                                        });
                                        console.log(value, isAgree);
                                    }}
                                />
                            )}
                        />
                    }
                />
                <div style={{ color: "red" }}>
                    {errors.isAgree && "Required checkbox"}
                </div>
            </div>
            <button className={s.backBtn} onClick={validTest}>
                <SportsScoreIcon />
                {t("finalStep")}
            </button>
        </div>
    );
};

export default ExtraInformationStep;

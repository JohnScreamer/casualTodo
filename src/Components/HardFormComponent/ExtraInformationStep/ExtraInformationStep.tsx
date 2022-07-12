import { Email } from "@mui/icons-material";
import { FormControlLabel, Checkbox } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { Genders } from "../../../Constants/SelectConstants";
import { FormType } from "../../../Redux/Slice/HardForm";
import CustomSelect from "../../CustomSelect/CustomSelect";
import CustomInput from "../CustomInput/CustomInput";
import s from "./ExtraInformationStep.module.scss";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
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
    const validTest = async () => {
        const isValid = await trigger(["email", "isAgree", "Gander"]);

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
                            message: "Required field",
                        },
                        minLength: {
                            value: 6,
                            message: "min length 6",
                        },
                        pattern: {
                            value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/,
                            message: "Not valid Email",
                        },
                    }),
                }}
                error={errors.email}
                name={"email"}
                setValue={setForm}
                value={email}
                labelName="E-MAIL"
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
                {errors.gender && "Required field"}
            </span>

            <div>
                <FormControlLabel
                    label="I agree to sell my soul !"
                    control={
                        <Controller
                            name="isAgree"
                            control={control}
                            defaultValue={true}
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
                Finale step
            </button>
        </div>
    );
};

export default ExtraInformationStep;

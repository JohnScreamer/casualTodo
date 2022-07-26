import { memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ExtraInformationStep from "../Components/HardFormComponent/ExtraInformationStep/ExtraInformationStep";
import LogInStep from "../Components/HardFormComponent/LogInStep/LogInStep";
import PersonInfoStep from "../Components/HardFormComponent/PersonInfoStep/PersonInfoStep";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks";
import { editForm } from "../Redux/Slice/HardForm";
import { selectForm } from "../Selectors/Selectors";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import s from "./HardForm.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import FinalStep from "../Components/HardFormComponent/FinalStep/FinalStep";
import HorizontalLabelPositionBelowStepper from "../Components/HardFormComponent/Stepper/Stepper";
import { useTranslation } from "react-i18next";

const HardFormPage = () => {
    const initForm = useAppSelector(selectForm);
    const dispatch = useAppDispatch();
    const [form, setForm] = useState(initForm);
    const { t } = useTranslation();
    const {
        register,
        formState: { errors },
        handleSubmit,
        trigger,
        control,
        resetField,
    } = useForm({ mode: "all" });
    useEffect(() => {
        dispatch(editForm(form));
        sessionStorage.setItem("form", JSON.stringify(form));
        console.log(2);
    }, [form]);
    const onSubmit = (data: any) => {
        console.log(data);
    };
    const navigate = useNavigate();
    const location = useLocation();
    location.state = location.state ? location.state : 0;

    let currentStep = location.state;
    const stepTo = (num: number) => {
        //@ts-ignore
        navigate("", { state: num });
    };

    return (
        <main>
            <div className={s.wrapper}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    autoSave={"off"}
                    autoComplete="off"
                >
                    {currentStep === 0 && (
                        <>
                            <LogInStep
                                setForm={setForm}
                                register={register}
                                password={form.password}
                                login={form.login}
                                setStep={stepTo}
                                errors={errors}
                                trigger={trigger}
                            />
                        </>
                    )}

                    {currentStep === 1 && (
                        <>
                            <button
                                className={s.backBtn}
                                onClick={() => stepTo(0)}
                            >
                                <ArrowCircleLeftIcon />
                                {t("stepBack")}
                            </button>

                            <PersonInfoStep
                                setForm={setForm}
                                register={register}
                                firstName={form.firstName}
                                lastName={form.lastName}
                                setStep={stepTo}
                                errors={errors}
                                trigger={trigger}
                            />
                        </>
                    )}

                    {currentStep === 2 && (
                        <>
                            <button
                                className={s.backBtn}
                                onClick={() => stepTo(1)}
                            >
                                <ArrowCircleLeftIcon />
                                {t("stepBack")}
                            </button>
                            <ExtraInformationStep
                                errors={errors}
                                trigger={trigger}
                                setForm={setForm}
                                isAgree={form.isAgree}
                                email={form.email}
                                gender={form.gender as "" | "male" | "female"}
                                register={register}
                                setStep={stepTo}
                                control={control}
                            />
                        </>
                    )}

                    {currentStep === 3 && (
                        <FinalStep resetField={resetField} setForm={setForm} />
                    )}
                    {(currentStep as number) < 3 && (
                        <HorizontalLabelPositionBelowStepper
                            step={currentStep as number}
                        />
                    )}
                </form>
            </div>
        </main>
    );
};

export default memo(HardFormPage);

import { FC, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { defaultForm } from "../../../Constants/InitForm";
import s from "./FinalStep.module.scss";
import { useAppDispatch, useAppSelector } from "../../../Hooks/hooks";
import { FormType, resetForm } from "../../../Redux/Slice/HardForm";
import { selectForm } from "../../../Selectors/Selectors";
//@ts-ignore
import ReactSpoiler from "react-spoiler";
import { useTranslation } from "react-i18next";
type TypeFinalStep = {
    setForm: (data: FormType) => void;
    resetField: any;
};
const FinalStep: FC<TypeFinalStep> = ({ setForm, resetField }) => {
    const dispatch = useAppDispatch();
    const form = useAppSelector(selectForm);
    const linkRef = useRef(null);
    const { t } = useTranslation();
    const handlerResetForm = () => {
        dispatch(resetForm());
        setForm(defaultForm);
        resetField();
        //@ts-ignore
        linkRef.current.click();
    };

    return (
        <div>
            <div className={s.formWrapper}>
                <h4>
                    {t("login")}: <span>{form.login}</span>
                </h4>

                <h4>
                    {t("password")}:
                    <ReactSpoiler hoverBlur={4}>
                        <span>{form.password}</span>
                    </ReactSpoiler>{" "}
                </h4>
                <h4>
                    {t("firstName")}: <span>{form.firstName}</span>
                </h4>
                <h4>
                    {t("lastName")}: <span>{form.lastName}</span>
                </h4>

                <h4>
                    {t("email")}: <span>{form.email}</span>
                </h4>
                <h4>
                    {t("gander")}: <span>{form.gender}</span>
                </h4>
                <h4>
                    {t("isAgree")}:{" "}
                    <span>{form.isAgree ? t("agree") : t("no")}</span>
                </h4>
            </div>
            <button type="submit">{t("submit")}</button>
            <Link to={"/form/login"}>
                <button style={{ background: "blue" }}>
                    {t("startAgain")}
                </button>
            </Link>

            <button onClick={handlerResetForm} style={{ background: "red" }}>
                {t("clearAllForm")}
            </button>
            <a href={"/form/login"} ref={linkRef} style={{ display: "none" }}>
                {" "}
            </a>
        </div>
    );
};

export default FinalStep;

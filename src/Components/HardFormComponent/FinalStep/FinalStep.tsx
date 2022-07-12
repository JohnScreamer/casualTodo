import { FC, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { defaultForm } from "../../../Constants/InitForm";
import s from "./FinalStep.module.scss";
import { useAppDispatch, useAppSelector } from "../../../Hooks/hooks";
import { FormType, resetForm } from "../../../Redux/Slice/HardForm";
import { selectForm } from "../../../Selectors/Selectors";
//@ts-ignore
import ReactSpoiler from "react-spoiler";
type TypeFinalStep = {
    setForm: (data: FormType) => void;
    resetField: any;
};
const FinalStep: FC<TypeFinalStep> = ({ setForm, resetField }) => {
    const dispatch = useAppDispatch();
    const form = useAppSelector(selectForm);
    const linkRef = useRef(null);
    const navigate = useNavigate();
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
                    Login: <span>{form.login}</span>
                </h4>

                <h4>
                    Password:
                    <ReactSpoiler hoverBlur={4}>
                        <span>{form.password}</span>
                    </ReactSpoiler>{" "}
                </h4>
                <h4>
                    First name: <span>{form.firstName}</span>
                </h4>
                <h4>
                    Last name: <span>{form.lastName}</span>
                </h4>

                <h4>
                    E-MAIL: <span>{form.email}</span>
                </h4>
                <h4>
                    Gender: <span>{form.gender}</span>
                </h4>
                <h4>
                    Is agree: <span>{form.isAgree ? "agree" : "none"}</span>
                </h4>
            </div>
            <button type="submit">Submit</button>
            <Link to={"/form/login"}>
                <button style={{ background: "blue" }}>Start again</button>
            </Link>

            <button onClick={handlerResetForm} style={{ background: "red" }}>
                Clear all form
            </button>
            <a href={"/form/login"} ref={linkRef} style={{ display: "none" }}>
                {" "}
            </a>
        </div>
    );
};

export default FinalStep;

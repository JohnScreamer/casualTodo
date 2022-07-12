import { FC, useRef } from "react";
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
                            message: "Required field",
                        },
                        minLength: {
                            value: 2,
                            message: "min length 2",
                        },
                    }),
                }}
                error={errors.firstName}
                name={"firstName"}
                setValue={setForm}
                value={firstName}
                labelName="First Name"
            />
            <CustomInput
                register={{
                    ...register("lastName", {
                        required: {
                            value: true,
                            message: "Required field",
                        },
                        minLength: {
                            value: 2,
                            message: "min length 2",
                        },
                    }),
                }}
                error={errors.lastName}
                name="lastName"
                setValue={setForm}
                value={lastName}
                labelName="Last Name"
            />
            <button
                disabled={isDisabled}
                className="nextStepBtn"
                onClick={validTest}
            >
                Next step
            </button>
        </div>
    );
};

export default PersonInfoStep;

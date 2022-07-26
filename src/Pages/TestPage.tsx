import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CustomPassword from "../Components/CustomPassword/CustomPassword";

const TestPage = () => {
    const {
        handleSubmit,
        formState: { errors },
        register,
        control,
    } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    };
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    console.log(errors);

    return (
        <main style={{ flexDirection: "row" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <FormControlLabel
                        label="I agree to sell my soul !"
                        control={
                            <Controller
                                name="isAgreee"
                                control={control}
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
                                        onChange={(e) => {}}
                                    />
                                )}
                            />
                        }
                    />
                    <div style={{ color: "red" }}>
                        {errors.isAgree && "Required checkbox"}
                    </div>
                </div>
                <div>
                    {" "}
                    <button type="submit">submit</button>
                </div>
            </form>
            <CustomPassword />
        </main>
    );
};

export default TestPage;

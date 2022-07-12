import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Login step", "Person info", "Final Step"];
type HorizontalLabelPositionBelowStepperType = {
    step: number;
};
const HorizontalLabelPositionBelowStepper: React.FC<
    HorizontalLabelPositionBelowStepperType
> = ({ step }) => {
    return (
        <Box sx={{ width: "100%", marginTop: "40px" }}>
            <Stepper activeStep={step} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};
export default HorizontalLabelPositionBelowStepper;

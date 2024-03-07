"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMultistepForm = void 0;
const react_1 = require("react");
const useMultistepForm = (steps) => {
    const [currentStepIndex, setCurrentStepIndex] = (0, react_1.useState)(0);
    const next = () => {
        setCurrentStepIndex((i) => {
            if (i >= steps.length - 1)
                return i;
            return i + 1;
        });
    };
    const back = () => {
        setCurrentStepIndex((i) => {
            if (i <= 0)
                return i;
            return i - 1;
        });
    };
    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        next,
        back,
    };
};
exports.useMultistepForm = useMultistepForm;
//# sourceMappingURL=useMultistepForm.js.map
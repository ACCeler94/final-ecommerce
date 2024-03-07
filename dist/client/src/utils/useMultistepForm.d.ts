import { ReactElement } from 'react';
export declare const useMultistepForm: (steps: ReactElement[]) => {
    currentStepIndex: number;
    step: ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    steps: ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
    isFirstStep: boolean;
    isLastStep: boolean;
    next: () => void;
    back: () => void;
};

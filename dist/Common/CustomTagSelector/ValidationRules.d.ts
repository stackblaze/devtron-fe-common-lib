import { validateLabelKey } from '../../Shared/validations';
export declare class ValidationRules {
    propagateTagKey: typeof validateLabelKey;
    propagateTagValue: (value: string, key: string) => {
        isValid: boolean;
        messages: string[];
    };
}

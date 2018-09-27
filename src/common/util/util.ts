import { IValidation } from "components/Form/IForm";

export const validateElement = (value: string, validationRules: IValidation): boolean => {
    let isValid = true;
    for (const validations in validationRules) {
        switch (validations) {
            case 'required':
                isValid = value.trim() !== '' && isValid;
                break;
            case 'email':
                const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                isValid = pattern.test(value) && isValid;
                break;
            case 'max':
                const maxValue = validationRules[validations] || 0;
                isValid = value.trim().length <= maxValue && isValid;
                break;
            case 'min':
                const minValue = validationRules[validations] || 0;
                isValid = value.trim().length >= minValue && isValid;
                break;
        }
    }
    return isValid;
};

export const isFormValid = (elements: any): boolean => {
    let isValid = true;
    elements.map((e: any) => {
        if (e.element.component !== 'button') {
            isValid = e.element.valid && isValid;
        }
    });
    return isValid;
};
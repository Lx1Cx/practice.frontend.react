import {IInputEvent} from "./IInputEvent.ts";

export const useInput = (onChange?: (data: IInputEvent) => void) => {

    const ChangeHandler = ({fieldValue, fieldName}: IInputEvent) => {
        onChange?.call(null, {
            fieldName,
            fieldValue
        })
    }

    return {
        ChangeHandler
    }
}
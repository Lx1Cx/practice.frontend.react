import {FC} from "react";
import {useInput} from "./useInput.ts";
import {IInputEvent} from "./IInputEvent.ts";
import classes from "./input.module.css"

interface IInputProps {
    placeholder?: string
    onChange?: (data: IInputEvent) => void
    name: string
    type: "text" | "password"
    styles?: {
        width?: string
        margin?: string
    }
}

const Input: FC<IInputProps> = ({placeholder, onChange, styles, name, type}) => {

    const {ChangeHandler} = useInput(onChange)

    return (
        <input
            placeholder={placeholder}
            type={type}
            name={name}
            style={styles}
            className={classes.input}
            onChange={(event) => {
                ChangeHandler({
                    fieldName: event.target.name,
                    fieldValue: event.target.value
                })
            }}
        />
    );
};

export default Input;
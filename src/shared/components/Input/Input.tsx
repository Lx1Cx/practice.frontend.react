import {FC} from "react";
import {useInput} from "./useInput.ts";
import {IInputEvent} from "./IInputEvent.ts";
import classes from "./input.module.css"

interface IInputProps {
    placeholder?: string
    onChange?: (data: IInputEvent) => void
    name: string
    type: "text" | "password" | "number" | "date"
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
                    fieldValue: type === "number"
                        ? parseInt(event.target.value)
                        : type === "date"
                            ? new Date(event.target.value)
                            : event.target.value
                })
            }}
        />
    );
};

export default Input;
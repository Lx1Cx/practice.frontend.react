import {FC, PropsWithChildren} from "react";
import classes from "./button.module.css"
import {useButton} from "./useButton.ts";

interface IButtonProps {
    onClick?: () => void
    isLockButton?: boolean
    styles?: {
        margin?: string
        width?: string
    }
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({children, styles, onClick, isLockButton}) => {

    const {ClickHandler} = useButton(isLockButton, onClick)

    return (
        <button
            onClick={ClickHandler}
            style={styles}
            className={isLockButton ? classes.button_lock : classes.button}
        >
            {children}
        </button>
    );
};

export default Button;
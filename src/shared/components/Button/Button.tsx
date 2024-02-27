import {FC, PropsWithChildren} from "react";
import classes from "./button.module.css"

interface IButtonProps {
    onClick?: () => void
    styles?: {
        margin?: string
        width?: string
    }
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({children, styles, onClick}) => {
    return (
        <button
            onClick={onClick}
            style={styles}
            className={classes.button}
        >
            {children}
        </button>
    );
};

export default Button;
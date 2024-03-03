import {FC, PropsWithChildren} from "react";
import classes from "./adminItemWrapper.module.css"

interface IAdminItemWrapperProps {
    onDelete?: () => Promise<void>
}

const AdminItemWrapper: FC<PropsWithChildren<IAdminItemWrapperProps>> = ({children, onDelete}) => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.buttons}>
                <p className={classes.delete} onClick={onDelete}>Удалить</p>
            </div>
            {children}
        </div>
    );
};

export default AdminItemWrapper;
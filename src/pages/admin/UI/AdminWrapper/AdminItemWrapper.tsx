import {FC, PropsWithChildren} from "react";
import classes from "./adminItemWrapper.module.css"

const AdminItemWrapper: FC<PropsWithChildren> = ({children}) => {

    //todo: Change to icons

    return (
        <div className={classes.wrapper}>
            <div className={classes.buttons}>
                <p>Изменить</p>
                <p>Удалить</p>
            </div>
            {children}
        </div>
    );
};

export default AdminItemWrapper;
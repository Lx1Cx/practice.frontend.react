import {FC, PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import classes from "./menuItem.module.css"

interface IMenuItemProps {
    href: string
}

const MenuItem: FC<PropsWithChildren<IMenuItemProps>> = ({href, children}) => {
    return (
        <Link to={href} className={classes.link}>
            {children}
        </Link>
    );
};

export default MenuItem;
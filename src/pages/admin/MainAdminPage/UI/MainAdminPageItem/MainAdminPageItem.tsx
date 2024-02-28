import {FC} from "react";
import {Link} from "react-router-dom";
import classes from "./mainAdminPageItem.module.css"

interface IMainAdminPageItemProps {
    text: string
    href: string
}
const MainAdminPageItem: FC<IMainAdminPageItemProps> = ({text, href}) => {
    return (
        <Link to={`/admin/${href}`} className={classes.wrapper}>
            {text}
        </Link>
    );
};

export default MainAdminPageItem;
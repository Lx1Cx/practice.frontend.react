import classes from "./menu.module.css"
import {useMenu} from "./useMenu.ts";
import MenuItem from "./UI/MenuItem/MenuItem.tsx";
import {Link} from "react-router-dom";

const Menu = () => {

    const {user} = useMenu()

    return (
        <div className={classes.wrapper}>
            <div className={classes.menu}>
                <div className={classes.menu_list}>
                    {user?.role === "admin"
                        ? <MenuItem href={"/admin"}>Админ панель</MenuItem>
                        : <></>}
                    <MenuItem href={"/tours"}>Туры</MenuItem>
                    {user && <MenuItem href={"/favorites"}>Избранное</MenuItem>}
                </div>
                {!user ?
                    <div className={classes.auth_btn}>
                        <Link to={"login"} className={classes.login}>
                            Вход
                        </Link>
                        <Link to={"registration"} className={classes.registration}>
                            Регистрация
                        </Link>
                    </div>
                    : <MenuItem href={"/my"}>{user.login}</MenuItem>
                }
            </div>
        </div>
    );
};

export default Menu;
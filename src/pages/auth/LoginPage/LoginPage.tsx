import {Link} from "react-router-dom";
import Form from "../Form/Form.tsx";
import classes from "./loginPage.module.css"

const LoginPage = () => {
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.logo}>Trigo</h1>
            <div className={classes.modal}>
                <h1 className={classes.caption}>Вход через логин и пароль</h1>
                <Form/>
                <div className={classes.modal_item}>
                    <p>Ещё нет аккаунта?</p>
                    <Link className={classes.link} to={"/registration"}>Создать</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
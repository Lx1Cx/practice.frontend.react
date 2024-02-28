import {Link} from "react-router-dom";
import Form from "../Form/Form.tsx";
import classes from "./loginPage.module.css"
import {useLoginPage} from "./useLoginPage.ts";

const LoginPage = () => {

    const {ChangeHandler, SubmitHandler, isLoading} = useLoginPage()

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.logo}>Trigo</h1>
            <div className={classes.modal}>
                <h1 className={classes.caption}>Вход через логин и пароль</h1>
                <Form isLoading={isLoading} inputChangeHandler={ChangeHandler} submitHandler={SubmitHandler}/>
                <div className={classes.modal_item}>
                    <p>Ещё нет аккаунта?</p>
                    <Link className={classes.link} to={"/registration"}>Создать</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
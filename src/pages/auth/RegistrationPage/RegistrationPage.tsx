import classes from "./registrationPage.module.css";
import Form from "../Form/Form.tsx";
import {Link} from "react-router-dom";
import {useRegistrationPage} from "./useRegistrationPage.ts";

const RegistrationPage = () => {

    const {ChangeHandler, isLoading, SubmitHandler} = useRegistrationPage()

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.logo}>Trigo</h1>
            <div className={classes.modal}>
                <h1 className={classes.caption}>Регистрация через логин и пароль</h1>
                <Form isLoading={isLoading} inputChangeHandler={ChangeHandler} submitHandler={SubmitHandler}/>
                <div className={classes.modal_item}>
                    <p>Есть аккаунт?</p>
                    <Link className={classes.link} to={"/login"}>Водите</Link>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
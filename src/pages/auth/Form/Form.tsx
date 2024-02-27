import {FC} from "react";
import Input from "../../../shared/components/Input/Input.tsx";
import Button from "../../../shared/components/Button/Button.tsx";
import classes from "./form.module.css"

interface IFormProps {

}

const Form: FC<IFormProps> = ({}) => {

    return (
        <form className={classes.form}>
            <Input name={"login"} type={"text"} placeholder={"Введите логин"}/>
            <Input name={"password"} type={"password"} placeholder={"Введите пароль"}/>
            <Button>Отправить</Button>
        </form>
    );
};

export default Form;
import {FC, FormEvent} from "react";
import Input from "../../../shared/components/Input/Input.tsx";
import Button from "../../../shared/components/Button/Button.tsx";
import classes from "./form.module.css"
import {IInputEvent} from "../../../shared/components/Input/IInputEvent.ts";
import {useForm} from "./useForm.ts";

interface IFormProps {
    inputChangeHandler: (data: IInputEvent) => void
    submitHandler: (event: FormEvent) => void
    isLoading: boolean
}

const Form: FC<IFormProps> = ({inputChangeHandler, submitHandler, isLoading}) => {

    const {SubmitHandler} = useForm(isLoading, submitHandler)

    return (
        <form className={classes.form} onSubmit={SubmitHandler}>
            <Input onChange={inputChangeHandler} name={"login"} type={"text"} placeholder={"Введите логин"}/>
            <Input onChange={inputChangeHandler} name={"password"} type={"password"} placeholder={"Введите пароль"}/>
            <Button isLockButton={isLoading}>Отправить</Button>
        </form>
    );
};

export default Form;
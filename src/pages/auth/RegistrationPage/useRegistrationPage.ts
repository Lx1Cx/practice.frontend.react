import {useRegistrationMutation} from "../../../entity/Auth/api/AuthApi.ts";
import {FormEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AlertService} from "../../../shared/services/AlertService.ts";
import {IInputEvent} from "../../../shared/components/Input/IInputEvent.ts";
import {IRegistrationDto} from "../../../entity/Auth/models/dto/IRegistrationDto.ts";

export const useRegistrationPage = () => {

    const [registration, {error, isSuccess, isLoading}] = useRegistrationMutation()
    const [requestData, setRequestData] = useState<IRegistrationDto>({})
    const navigate = useNavigate()

    useEffect(() => {
        if (isSuccess) {
            navigate("/login")
        }
    }, [isSuccess]);

    useEffect(() => {
        if (error && "data" in error) {
            return AlertService.error(error.data.displayMessage)
        }
    }, [error]);

    const ChangeHandler = ({fieldName, fieldValue}: IInputEvent) => {
        setRequestData(prevState => ({
            ...prevState,
            [fieldName]: fieldValue
        }))
    }

    const SubmitHandler = async (event: FormEvent) => {
        event.preventDefault()

        if (!requestData.login || !requestData.password) {
            return AlertService.error("Не все поля введены")
        }

        await registration({
            login: requestData.login,
            password: requestData.password
        })
    }

    return {
        ChangeHandler,
        SubmitHandler,
        isLoading
    }
}
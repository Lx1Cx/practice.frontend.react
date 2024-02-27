import {useAuthorizationMutation} from "../../../entity/Auth/api/AuthApi.ts";
import {FormEvent, useEffect, useState} from "react";
import {IAuthorizationDto} from "../../../entity/Auth/models/dto/IAuthorizationDto.ts";
import {IInputEvent} from "../../../shared/components/Input/IInputEvent.ts";
import {TokenService} from "../../../shared/services/TokenService.ts";
import {useAppDispatch} from "../../../store.ts";
import {setUser} from "../../../entity/Auth/slices/userSlice.ts";
import {useNavigate} from "react-router-dom";
import {AlertService} from "../../../shared/services/AlertService.ts";

export const useLoginPage = () => {

    const [authorization, {data, error, isLoading}] = useAuthorizationMutation()
    const [requestData, setRequestData] = useState<IAuthorizationDto>({})
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (data) {
            const {accessToken} = data
            const {id, login, role} = TokenService.parseAccessToken(accessToken)

            TokenService.setAccessToken(accessToken)

            dispatch(setUser({
                id,
                login,
                role
            }))

            navigate("/")
        }
    }, [data]);

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

        await authorization({
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
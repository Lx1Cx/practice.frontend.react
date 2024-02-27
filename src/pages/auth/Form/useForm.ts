import {FormEvent} from "react";

export const useForm = (isLoading: boolean, onSubmitHandler?: (event: FormEvent) => void) => {

    const SubmitHandler = (event: FormEvent) => {
        event.preventDefault()
        if (isLoading) {
            return
        }

        onSubmitHandler?.call(null, event)
    }

    return {
        SubmitHandler
    }
}
import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import {ICreatePlaceDto} from "../../../../entity/Place/models/dto/ICreatePlaceDto.ts";
import {IInputEvent} from "../../../../shared/components/Input/IInputEvent.ts";
import {useUploadFileMutation} from "../../../../entity/File/api/FileApi.ts";
import {AlertService} from "../../../../shared/services/AlertService.ts";
import {useCreatePlaceMutation} from "../../../../entity/Place/api/PlaceApi.ts";
import {useNavigate} from "react-router-dom";

export const useCreatePlacePage = () => {

    const [requestData, setRequestData] = useState<ICreatePlaceDto | undefined>(undefined)
    const [uploadFile, {data: uploadFileResult, error: uploadFileError}] = useUploadFileMutation()
    const [createPlace, {error: createPlaceError, isSuccess}] = useCreatePlaceMutation()
    const ref = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (uploadFileResult) {
            setRequestData(prevState => ({
                ...prevState,
                images: prevState && prevState.images && [...prevState.images, uploadFileResult.id]
            }))
        }
    }, [uploadFileResult]);

    useEffect(() => {
        if (uploadFileError && "data" in uploadFileError) {
            AlertService.error(uploadFileError.data.displayMessage)
        }
    }, [uploadFileError]);

    useEffect(() => {
        if (createPlaceError && "data" in createPlaceError) {
            AlertService.error(createPlaceError.data.displayMessage)
        }
    }, [createPlaceError]);

    const ChangeHandler = ({fieldName, fieldValue}: IInputEvent) => {
        setRequestData(prevState => ({
            ...prevState,
            [fieldName]: fieldValue
        }))
    }

    const SubmitHandler = async (event: FormEvent) => {
        event.preventDefault()

        if (requestData && requestData.name && requestData.description) {
            await createPlace({
                name: requestData.name,
                description: requestData.description,
                images: requestData.images ? requestData.images : []
            })
        }

        if (isSuccess) {
            navigate(-1)
        }
    }

    const UploadFileHandler = async (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0]
            const formData = new FormData()
            formData.append("file", file)

            await uploadFile(formData)
        }
    }

    return {
        ChangeHandler,
        ref,
        uploadFile,
        SubmitHandler,
        UploadFileHandler
    }
}
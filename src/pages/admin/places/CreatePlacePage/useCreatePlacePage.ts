import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import {ICreatePlaceDto} from "../../../../entity/Place/models/dto/ICreatePlaceDto.ts";
import {IInputEvent} from "../../../../shared/components/Input/IInputEvent.ts";
import {useUploadFileMutation} from "../../../../entity/File/api/FileApi.ts";
import {AlertService} from "../../../../shared/services/AlertService.ts";
import {useCreatePlaceMutation} from "../../../../entity/Place/api/PlaceApi.ts";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../store.ts";
import {addImage, resetImages} from "../../../../entity/File/slices/fileSlice.ts";

export const useCreatePlacePage = () => {

    const [requestData, setRequestData] = useState<ICreatePlaceDto | undefined>(undefined)
    const [uploadFile, {data: uploadFileResult, error: uploadFileError}] = useUploadFileMutation()
    const [createPlace, {error: createPlaceError, isSuccess}] = useCreatePlaceMutation()
    const ref = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const images = useAppSelector(state => state.fileSlice.images)


    useEffect(() => {
        if (uploadFileResult) {
            dispatch(addImage(uploadFileResult))
        }
    }, [uploadFileResult, dispatch]);

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
                imageIds: images.map(image => image.id)
            })
        }

        if (isSuccess) {
            dispatch(resetImages())
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
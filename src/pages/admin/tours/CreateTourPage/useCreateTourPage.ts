import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import {useUploadFileMutation} from "../../../../entity/File/api/FileApi.ts";
import {useAppDispatch, useAppSelector} from "../../../../store.ts";
import {addImage, resetImages} from "../../../../entity/File/slices/fileSlice.ts";
import {AlertService} from "../../../../shared/services/AlertService.ts";
import {ICreateTourDto} from "../../../../entity/Tours/models/dto/ICreateTourDto.ts";
import {IInputEvent} from "../../../../shared/components/Input/IInputEvent.ts";
import {useCreateTourMutation} from "../../../../entity/Tours/api/TourApi.ts";
import {useNavigate} from "react-router-dom";

export const useCreateTourPage = () => {

    const ref = useRef<HTMLInputElement | null>(null)
    const [uploadFile, {data: uploadFileResult, error: uploadFileError}] = useUploadFileMutation()
    const images = useAppSelector(state => state.fileSlice.images)
    const tourPlaces = useAppSelector(state => state.tourSlice)
    const dispatch = useAppDispatch()
    const [requestData, setRequestData] = useState<ICreateTourDto>()
    const [createTour, {error: createTourError, isSuccess}] = useCreateTourMutation()
    const navigate = useNavigate()

    useEffect(() => {
        if (uploadFileResult) {
            dispatch(addImage(uploadFileResult))
        }
    }, [dispatch, uploadFileResult]);

    useEffect(() => {
        if (uploadFileError && "data" in uploadFileError) {
            return AlertService.error(uploadFileError.data.displayMessage)
        }
    }, [uploadFileError]);

    useEffect(() => {
        if (createTourError && "data" in createTourError) {
            return AlertService.error(createTourError.data.displayMessage)
        }
    }, [createTourError]);

    useEffect(() => {
        if (isSuccess) {
            dispatch(resetImages())
            navigate(-1)
        }
    }, [isSuccess]);

    const UploadFileHandler = async (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0]
            const formData = new FormData()
            formData.append("file", file)

            await uploadFile(formData)
        }
    }

    const ChangeHandler = ({fieldName, fieldValue}: IInputEvent) => {
        setRequestData(prevState => ({
            ...prevState,
            [fieldName]: fieldValue
        }))
    }

    const SubmitHandler = async (event: FormEvent) => {
        event.preventDefault()
        console.log(requestData)
        if (requestData && requestData.name && requestData.description && tourPlaces.from && tourPlaces.to && requestData.price && requestData.dateEnd && requestData.dateStart) {
            await createTour({
                name: requestData.name,
                description: requestData.description,
                price: requestData.price,
                to: tourPlaces.from,
                from: tourPlaces.to,
                dateStart: requestData.dateStart,
                dateEnd: requestData.dateEnd,
                images_Ids: images.map(image => image.id)
            })
        }
    }

    return {
        ref,
        UploadFileHandler,
        ChangeHandler,
        SubmitHandler,
        dispatch
    }
}
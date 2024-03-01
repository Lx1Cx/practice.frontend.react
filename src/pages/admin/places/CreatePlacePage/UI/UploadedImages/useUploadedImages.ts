import {useAppDispatch, useAppSelector} from "../../../../../../store.ts";
import {deleteImage} from "../../../../../../entity/File/slices/fileSlice.ts";

export const useUploadedImages = () => {

    const images = useAppSelector(state => state.fileSlice.images)
    const dispatch = useAppDispatch()

    const DeleteHandler = (id: string) => {
        dispatch(deleteImage(id))
    }

    return {
        images,
        DeleteHandler
    }
}
import {useDeleteTourByIdMutation, useGetAllToursQuery} from "../../../../entity/Tours/api/TourApi.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {AlertService} from "../../../../shared/services/AlertService.ts";

export const useMainTourPage = () => {
    const {data: tours, isLoading} = useGetAllToursQuery()
    const navigate = useNavigate()
    const [deleteTour, {error}] = useDeleteTourByIdMutation()

    useEffect(() => {
        if (error && "data" in error) {
            return AlertService.error(error.data.displayMessage)
        }
    }, [error]);

    const DeleteHandler = async (id: string) => {
        await deleteTour(id)
    }

    return {
        tours,
        isLoading,
        navigate,
        DeleteHandler
    }
}
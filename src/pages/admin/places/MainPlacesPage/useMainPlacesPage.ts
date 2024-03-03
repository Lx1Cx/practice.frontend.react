import {useNavigate} from "react-router-dom";
import {useDeletePlaceByIdMutation, useGetAllPlacesQuery} from "../../../../entity/Place/api/PlaceApi.ts";
import {useEffect} from "react";
import {AlertService} from "../../../../shared/services/AlertService.ts";

export const useMainPlacesPage = () => {

    const {data: getAllPlacesResult , isLoading, error}  = useGetAllPlacesQuery()
    const [deletePlaceById, {error: deleteError}] = useDeletePlaceByIdMutation()
    const navigate = useNavigate()

    useEffect(() => {
        if (error && "data" in error) {
            return AlertService.error(error.data.displayMessage)
        }
    }, [error]);

    useEffect(() => {
        if (deleteError && "data" in deleteError) {
            return AlertService.error(deleteError.data.displayMessage)
        }
    }, [deleteError]);

    const DeleteHandler = async (id: string) => {
        await deletePlaceById(id)
    }

    return {
        getAllPlacesResult,
        navigate,
        isLoading,
        DeleteHandler
    }
}
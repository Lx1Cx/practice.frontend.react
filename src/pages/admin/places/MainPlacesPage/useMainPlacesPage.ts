import {useNavigate} from "react-router-dom";
import {useGetAllPlacesQuery} from "../../../../entity/Place/api/PlaceApi.ts";
import {useEffect} from "react";
import {AlertService} from "../../../../shared/services/AlertService.ts";

export const useMainPlacesPage = () => {

    const {data: getAllPlacesResult , isLoading, error}  = useGetAllPlacesQuery()

    const navigate = useNavigate()

    useEffect(() => {
        if (error && "data" in error) {
            return AlertService.error(error.data.displayMessage)
        }
    }, [error]);

    return {
        getAllPlacesResult,
        navigate,
        isLoading
    }
}
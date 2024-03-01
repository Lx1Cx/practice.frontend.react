import {useGetAllToursQuery} from "../../../../entity/Tours/api/TourApi.ts";
import {useNavigate} from "react-router-dom";

export const useMainTourPage = () => {
    const {data: tours, isLoading} = useGetAllToursQuery()
    const navigate = useNavigate()

    return {
        tours,
        isLoading,
        navigate
    }
}
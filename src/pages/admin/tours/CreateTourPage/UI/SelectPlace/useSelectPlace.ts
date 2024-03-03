import {useGetAllPlacesQuery} from "../../../../../../entity/Place/api/PlaceApi.ts";
import {useEffect} from "react";
import {AlertService} from "../../../../../../shared/services/AlertService.ts";
import {useAppSelector} from "../../../../../../store.ts";

export const useSelectPlace = (onSelect: (id: string) => void, isFrom: boolean) => {

    const {data, error, isLoading } = useGetAllPlacesQuery()
    const selectedTour = useAppSelector(state => isFrom ? state.tourSlice.from : state.tourSlice.to)

    useEffect(() => {
        if (error && "data" in error) {
            return AlertService.error(error.data.displayMessage)
        }
    }, [error]);

    const SelectHandler = (id: string) => {
        onSelect.call(null, id)
    }

    return {
        data,
        SelectHandler,
        isLoading,
        selectedTour
    }
}
import {useGetAllPlacesQuery} from "../../../entity/Place/api/PlaceApi.ts";
import {useEffect} from "react";
import {AlertService} from "../../../shared/services/AlertService.ts";

export const useMainPage = () => {

    const {data, error} = useGetAllPlacesQuery()

    useEffect(() => {
        if (error && "data" in error) {
            return AlertService.error(error.data.displayMessage)
        }
    }, [error]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true
    };

    return {
        settings,
        data
    }
}
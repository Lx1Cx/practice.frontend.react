import {useGetAllPlacesQuery} from "../../../entity/Place/api/PlaceApi.ts";
import {useEffect} from "react";
import {AlertService} from "../../../shared/services/AlertService.ts";
import {useNavigate} from "react-router-dom";

export const useMainPage = () => {

    const {data, error} = useGetAllPlacesQuery()
    const navigate = useNavigate()

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
        fade: true,
        arrows: false
    };

    const ClickHandler = (place: string) => {
        navigate(`/tours?place=${place}`)
    }

    return {
        settings,
        data,
        ClickHandler
    }
}
import {useParams} from "react-router-dom";
import {useGetTourByIdQuery} from "../../../entity/Tours/api/TourApi.ts";
import {useEffect} from "react";
import {AlertService} from "../../../shared/services/AlertService.ts";

export const useTourPage = () => {

    const params = useParams<{id: string}>()
    const {data: tour, error} = useGetTourByIdQuery(String(params.id))

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

    return {
        settings,
        tour
    }
}
import {useGetToursWithParamsQuery} from "../../../entity/Tours/api/TourApi.ts";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {AlertService} from "../../../shared/services/AlertService.ts";
import {useGetAllPlacesQuery} from "../../../entity/Place/api/PlaceApi.ts";

export const useToursPage = () => {

    const [params] = useSearchParams()
    const {data: tours, error} = useGetToursWithParamsQuery({
        place: params.get("place") ?? ""
    })
    const {data: places} = useGetAllPlacesQuery()
    const navigate = useNavigate()

    console.log(params)

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
        tours,
        settings,
        places,
        ClickHandler
    }
}
import classes from "./toursPage.module.css"
import {useToursPage} from "./useToursPage.ts";
import Slider from "react-slick";
import TourCard from "../../../shared/components/TourCard/TourCard.tsx";
import {BASE_API_URL} from "../../../consts.ts";
import Button from "../../../shared/components/Button/Button.tsx";

const ToursPage = () => {

    const {tours, settings, places, ClickHandler} = useToursPage()

    if (!tours || !places) {
        return <>Loading</>
    }

    return (
        <div>
            <Slider {...settings}>
                {places.map(place => (
                    <div key={place.id}>
                        <div className={classes.slide} style={{backgroundImage: `url(${BASE_API_URL}/${place.images[0].name ?? ""})`}}>
                            <div className={classes.info}>
                                <h1 className={classes.caption}>{place.name}</h1>
                                <p className={classes.description}>{place.description}</p>
                                <Button styles={{width: "25%"}} onClick={() => ClickHandler(place.name)}>Перейти</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <div className={classes.tours}>
                {tours.map(tour => (
                    <TourCard
                        key={tour.id}
                        id={tour.id}
                        name={tour.name}
                        from={tour.tourFrom.name}
                        dateStart={tour.dateStart}
                        dateEnd={tour.dateEnd}
                        price={tour.price}
                        image={tour.images.length !== 0 ? tour.images[0].name : undefined}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToursPage;
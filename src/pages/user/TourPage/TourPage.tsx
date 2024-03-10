import Slider from "react-slick";
import {useTourPage} from "./useTourPage.ts";
import {BASE_API_URL} from "../../../consts.ts";
import classes from "./tourPage.module.css"
import {FormatService} from "../../../shared/services/FormatService.ts";
import Button from "../../../shared/components/Button/Button.tsx";

const TourPage = () => {

    const {settings, tour} = useTourPage()

    if (!tour) {
        return <>Loading...</>
    }

    return (
        <Slider {...settings}>
            {tour.images.map(image => (
                <div key={image.id} className={classes.slide}>
                    <div className={classes.image} style={{backgroundImage: `url(${BASE_API_URL}/${image.name})`}}>
                        <div className={classes.info}>
                            <h1 className={classes.caption}>{tour.name}</h1>
                            <p className={classes.description}>{tour.description}</p>
                            <div>
                                <div className={classes.date}>
                                    <p className={classes.date_caption}>Начало</p>
                                    <p>{FormatService.date().format(new Date(tour.dateStart))}</p>
                                </div>
                                <div className={classes.date}>
                                    <p className={classes.date_caption}>Конец</p>
                                    <p>{FormatService.date().format(new Date(tour.dateEnd))}</p>
                                </div>
                            </div>
                            <Button>Оформить</Button>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>

    );
};

export default TourPage;
import Slider from "react-slick";
import {useMainPage} from "./useMainPage.ts";
import classes from "./mainPage.module.css"
import {BASE_API_URL} from "../../../consts.ts";

const MainPage = () => {

    const {settings, data} = useMainPage()

    if (!data) {
        return <>Loading</>
    }

    return (
        <Slider {...settings} className={classes.slider}>
            {
                data.map(place => (
                    <div key={place.id} style={{backgroundImage: `url(${BASE_API_URL}/${place.images[0].name ?? ""})`}}>
                        <div className={classes.info}>
                            <h1>{place.name}</h1>
                            <p>{place.description}</p>
                        </div>
                    </div>
                ))
            }
        </Slider>
    )
};

export default MainPage;
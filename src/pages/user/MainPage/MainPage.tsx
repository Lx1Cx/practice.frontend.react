import Slider from "react-slick";
import {useMainPage} from "./useMainPage.ts";
import classes from "./mainPage.module.css"
import {BASE_API_URL} from "../../../consts.ts";
import Button from "../../../shared/components/Button/Button.tsx";

const MainPage = () => {

    const {settings, data, ClickHandler} = useMainPage()

    if (!data) {
        return <>Loading</>
    }

    return (
        <Slider {...settings}>
            {
                data.map(place => (
                    <div key={place.id}>
                        <div className={classes.slide} style={{backgroundImage: `url(${BASE_API_URL}/${place.images[0].name ?? ""})`}}>
                            <div className={classes.info}>
                                <h1 className={classes.caption}>{place.name}</h1>
                                <p className={classes.description}>{place.description}</p>
                                <Button styles={{width: "25%"}} onClick={() => ClickHandler(place.name)}>Перейти</Button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    )
};

export default MainPage;
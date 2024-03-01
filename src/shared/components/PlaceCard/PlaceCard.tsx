import {FC} from "react";
import classes from "./placeCard.module.css"
import {BASE_API_URL} from "../../../consts.ts";

interface IPlaceCardProps {
    image?: string
    name: string
    description: string
}

const PlaceCard: FC<IPlaceCardProps> = ({name, description, image}) => {
    return (
        <div className={classes.card}>
            {image
                ? <div style={{backgroundImage: `url(${BASE_API_URL}/${image})`}} className={classes.image}></div>
                : <div className={classes.image}>
                    <p>Здесь пока нет картинки</p>
                </div>}

            <div className={classes.info}>
                <p title={name} className={classes.caption}>{name}</p>
                <p className={classes.description}>{description}</p>
            </div>
        </div>
    );
};

export default PlaceCard;
import {FC} from "react";
import classes from "./placeCard.module.css"

interface IPlaceCardProps {
    name: string
    description: string
}

const PlaceCard: FC<IPlaceCardProps> = ({name, description}) => {
    return (
        <div className={classes.card}>
            <div className={classes.image}>
                <p>Здесь пока нет картинки</p>
            </div>

            <div className={classes.info}>
                <p title={name} className={classes.caption}>{name}</p>
                <p className={classes.description}>{description}</p>
            </div>
        </div>
    );
};

export default PlaceCard;
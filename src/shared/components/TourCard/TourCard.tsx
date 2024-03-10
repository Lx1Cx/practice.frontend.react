import classes from "./tourCard.module.css"
import {FC} from "react";
import {BASE_API_URL} from "../../../consts.ts";
import {Link} from "react-router-dom";
import {FormatService} from "../../services/FormatService.ts";

interface ITourCardProps {
    id: string
    name: string
    from: string
    dateStart: Date
    dateEnd: Date
    image?: string,
    price: number
}

const TourCard: FC<ITourCardProps> = ({id, name, from, price, dateEnd, dateStart, image}) => {

    return (
        <Link to={`/tours/${id}`} className={classes.card}>
            {image
                ? <img className={classes.image} src={`${BASE_API_URL}/${image}`} alt={image} title={name}/>
                : <div className={classes.image}>

                </div>}

            <div className={classes.info}>
                <p className={classes.caption}>{name}</p>
                <p className={classes.city}>{from}</p>
                <div className={classes.info_item}>
                    <div>
                        <p>с {FormatService.date().format(new Date(dateStart))}</p>
                        <p>до {FormatService.date().format(new Date(dateEnd))}</p>
                    </div>
                    <p className={classes.price}>{FormatService.currency().format(price)}</p>
                </div>
            </div>
        </Link>
    );
};

export default TourCard;
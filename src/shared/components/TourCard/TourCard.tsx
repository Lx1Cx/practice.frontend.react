import classes from "./tourCard.module.css"
import {FC} from "react";

interface ITourCardProps {
    id: string
    name: string
    from: string
    dateStart: Date
    dateEnd: Date
    image?: string,
    price: number
}

const TourCard: FC<ITourCardProps> = ({name, from, price, dateEnd, dateStart}) => {

    const format = new Intl.NumberFormat("ru", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 1
    })

    const dateFormat = new Intl.DateTimeFormat("ru", {
        month: "numeric",
        day: "numeric"
    })

    return (
        <div className={classes.card}>
            <div className={classes.image}>

            </div>
            <div className={classes.info}>
                <p className={classes.caption}>{name}</p>
                <p className={classes.city}>{from}</p>
                <div className={classes.info_item}>
                    <div className={classes.date}>
                        {dateFormat.format(new Date(dateStart))} - {dateFormat.format(new Date(dateEnd))}
                    </div>
                    <p className={classes.price}>{format.format(price)}</p>
                </div>
            </div>
        </div>
    );
};

export default TourCard;
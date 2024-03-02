import {FC} from "react";
import {useSelectPlace} from "./useSelectPlace.ts";
import classes from "./selectPlace.module.css"
import {BASE_API_URL} from "../../../../../../consts.ts";

interface ISelectPlace {
    onSelect: (id: string) => void
    isFrom: boolean
}

const SelectPlace: FC<ISelectPlace> = ({onSelect, isFrom}) => {

    const {SelectHandler, data, isLoading, selectedTour} = useSelectPlace(onSelect, isFrom)

    if (isLoading || !data) {
        return <p>Loading...</p>
    }

    return (
        <div className={classes.select_place}>
            {data.map(place => (
                <div className={place.id === selectedTour ? classes.active_card : classes.card} onClick={() => SelectHandler(place.id)} key={place.id}>
                    {place.images.length !== 0 ? <img className={classes.img} src={`${BASE_API_URL}/${place.images[0].name}`} alt={place.name}/> : <div className={classes.img_empty}>Здесь пока ничего нет</div>}
                    <div className={classes.info}>
                        <p className={classes.caption}>{place.name}</p>
                        <p className={classes.description}>{place.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SelectPlace;
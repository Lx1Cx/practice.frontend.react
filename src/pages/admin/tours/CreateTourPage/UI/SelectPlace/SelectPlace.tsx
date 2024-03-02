import {FC} from "react";
import {useSelectPlace} from "./useSelectPlace.ts";
import classes from "./selectPlace.module.css"

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
        <div>
            {data.map(place => (
                <div className={place.id === selectedTour ? classes.active_card : classes.card} onClick={() => SelectHandler(place.id)} key={place.id}>
                    <p>{place.name}</p>
                </div>
            ))}
        </div>
    );
};

export default SelectPlace;
import classes from "./mainPlacesPage.module.css"
import Button from "../../../../shared/components/Button/Button.tsx";
import {useMainPlacesPage} from "./useMainPlacesPage.ts";
import PlaceCard from "../../../../shared/components/PlaceCard/PlaceCard.tsx";
import AdminItemWrapper from "../../UI/AdminWrapper/AdminItemWrapper.tsx";

const MainPlacesPage = () => {

    const {navigate, getAllPlacesResult, isLoading, DeleteHandler} = useMainPlacesPage()

    //todo: Change this

    if (isLoading || !getAllPlacesResult) {
        return <p>Loading</p>
    }

    return (
        <div className={classes.wrapper}>
            <Button onClick={() => navigate("create")}>Создать новое место</Button>

            <div className={classes.places}>
                {getAllPlacesResult.length === 0
                    ? <p>Здесь пока ничего нет</p>
                    : getAllPlacesResult.map(place => (
                        <AdminItemWrapper key={place.id} onDelete={async () => await DeleteHandler(place.id)}>
                            <PlaceCard
                                name={place.name}
                                description={place.description}
                                image={place.images.length !== 0 ? place.images[0].name : undefined}
                            />
                        </AdminItemWrapper>
                    ))
                }
            </div>
        </div>
    );
};

export default MainPlacesPage;
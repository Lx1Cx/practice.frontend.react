import TourCard from "../../../../shared/components/TourCard/TourCard.tsx";
import classes from "./mainTourPage.module.css"
import {useMainTourPage} from "./useMainTourPage.ts";
import Button from "../../../../shared/components/Button/Button.tsx";
import AdminItemWrapper from "../../UI/AdminWrapper/AdminItemWrapper.tsx";

const MainToursPage = () => {

    const {tours, isLoading, navigate, DeleteHandler} = useMainTourPage()

    if (isLoading || !tours) {
        return <p>Loading...</p>
    }

    return (
        <div className={classes.wrapper}>
            <Button onClick={() => navigate("create")}>Create new tour</Button>

            <div>
                {tours.length !== 0 ?
                    tours.map(tour => (
                    <AdminItemWrapper key={tour.id} onDelete={() => DeleteHandler(tour.id)}>
                        <TourCard
                            id={tour.id}
                            name={tour.name}
                            from={tour.tourFrom.name}
                            dateStart={tour.dateStart}
                            dateEnd={tour.dateEnd}
                            price={tour.price}
                        />
                    </AdminItemWrapper>
                )) : <p>DataBase empty</p>}
            </div>
        </div>
    );
};

export default MainToursPage;
import classes from "./mainAdminPage.module.css"
import MainAdminPageItem from "./UI/MainAdminPageItem/MainAdminPageItem.tsx";

const MainAdminPage = () => {
    return (
        <div className={classes.wrapper}>
            <h1>Admin panel</h1>
            <div className={classes.modal}>
                <MainAdminPageItem text={"Места"} href={"places"}/>
            </div>
        </div>
    );
};

export default MainAdminPage;
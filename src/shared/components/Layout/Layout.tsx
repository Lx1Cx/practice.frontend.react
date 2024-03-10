import {Outlet} from "react-router-dom";
import Menu from "../Menu/Menu.tsx";

const Layout = () => {

    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default Layout;
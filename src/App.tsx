import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage/LoginPage.tsx";
import RegistrationPage from "./pages/auth/RegistrationPage/RegistrationPage.tsx";
import MainAdminPage from "./pages/admin/MainAdminPage/MainAdminPage.tsx";
import MainPlacesPage from "./pages/admin/places/MainPlacesPage/MainPlacesPage.tsx";
import CreatePlacePage from "./pages/admin/places/CreatePlacePage/CreatePlacePage.tsx";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/registration",
        element: <RegistrationPage/>
    },

    {
        path: "admin",
        children: [
            {
                path: "",
                element: <MainAdminPage/>
            },

            {
                path: "places",
                children: [
                    {
                        path: "",
                        element: <MainPlacesPage/>
                    },

                    {
                        path: "create",
                        element: <CreatePlacePage/>
                    }
                ]
            }
        ]
    }
])

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
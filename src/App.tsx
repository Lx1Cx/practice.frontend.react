import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage/LoginPage.tsx";
import RegistrationPage from "./pages/auth/RegistrationPage/RegistrationPage.tsx";
import MainAdminPage from "./pages/admin/MainAdminPage/MainAdminPage.tsx";
import MainPlacesPage from "./pages/admin/places/MainPlacesPage/MainPlacesPage.tsx";

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
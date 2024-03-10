import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage/LoginPage.tsx";
import RegistrationPage from "./pages/auth/RegistrationPage/RegistrationPage.tsx";
import MainAdminPage from "./pages/admin/MainAdminPage/MainAdminPage.tsx";
import MainPlacesPage from "./pages/admin/places/MainPlacesPage/MainPlacesPage.tsx";
import CreatePlacePage from "./pages/admin/places/CreatePlacePage/CreatePlacePage.tsx";
import MainToursPage from "./pages/admin/tours/MainToursPage/MainToursPage.tsx";
import CreateTourPage from "./pages/admin/tours/CreateTourPage/CreateTourPage.tsx";
import MainPage from "./pages/user/MainPage/MainPage.tsx";
import Layout from "./shared/components/Layout/Layout.tsx";
import ToursPage from "./pages/user/ToursPage/ToursPage.tsx";
import TourPage from "./pages/user/TourPage/TourPage.tsx";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <MainPage/>
            },

            {
                path: "tours",
                children: [
                    {
                        path: "",
                        element: <ToursPage/>,
                    },

                    {
                        path: ":id",
                        element: <TourPage/>
                    }
                ]
            },
        ],
    },

    {
        path: "",
        children: [
            {
                path: "login",
                element: <LoginPage/>
            },
            {
                path: "registration",
                element: <RegistrationPage/>
            },
        ]
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
            },

            {
                path: "tours",
                children: [
                    {
                        path: "",
                        element: <MainToursPage/>
                    },

                    {
                        path: "create",
                        element: <CreateTourPage/>
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
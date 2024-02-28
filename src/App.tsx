import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage/LoginPage.tsx";
import RegistrationPage from "./pages/auth/RegistrationPage/RegistrationPage.tsx";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/registration",
        element: <RegistrationPage/>
    }
])

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import {Provider} from "react-redux";
import {persistor, store} from "./store.ts";
import {PersistGate} from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
            <ToastContainer/>
        </PersistGate>
    </Provider>
)

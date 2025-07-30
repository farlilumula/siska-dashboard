import {createContext, useState} from "react";
import {AppConstants} from "@/utils/constants.js";
import axios from "axios";
import {toast} from "sonner";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext(undefined);

export const AppContextProvider = ( props ) => {
    const backendUrl = AppConstants.BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
            const token = localStorage.getItem("jwt");
            if (!token) {
                toast.error("No token found, please log in.");
                return;
            }
            const response = await axios.get(backendUrl + "/validate");
            console.log(response.data);
            if (response.status === 200) {
                setUser(response.data);
            } else {
                toast.error("Unable to retrieve user's profile");
            }
        } catch (e) {
            console.log(e);
            toast.error(e.message);
        }
    }

    const contextValue = {
        backendUrl,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        getUser,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}
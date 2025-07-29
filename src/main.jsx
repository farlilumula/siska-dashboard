import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import {Toaster} from "sonner";
import {AppContextProvider} from "@/context/app-context.jsx";
import {ThemeProvider} from "@/components/theme-provider.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AppContextProvider>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Toaster/>
                <App/>
            </ThemeProvider>
        </AppContextProvider>
    </BrowserRouter>,
)

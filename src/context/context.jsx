import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvier = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        console.log("test")
    }

    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                isModalOpen,
                openSidebar,
                closeSidebar,
                openModal,
                closeModal,
            }}
        >
        {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext);
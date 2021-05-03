import React from "react";

const StoreContextApi = React.createContext(null);

export const Provider = (props) => {
    return (
        <StoreContextApi.Provider value={props.store}>
            {props.children}
        </StoreContextApi.Provider>
    )

}
export default StoreContextApi;
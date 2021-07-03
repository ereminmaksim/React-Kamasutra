import React from "react";

const StoreContextApiDonTReturnIt = React.createContext(null);

export const Provider = (props) => {
    return (
        <StoreContextApiDonTReturnIt.Provider value={props.store}>
            {props.children}
        </StoreContextApiDonTReturnIt.Provider>
    )

}
export default StoreContextApiDonTReturnIt;
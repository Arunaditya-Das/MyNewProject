// import { createContext, useContext, useEffect, useState } from "react";
// import { getItemLocal } from "../utils";

// const initialState = getItemLocal("session_id") ?? {};

// const SessionContext = createContext(initialState);

// const useSessionContext = () => {
//     const context = useContext(SessionContext);
//     if (context === undefined) {
//         throw new Error(
//             "useSessionContext must be used within a SessionProvider"
//         );
//     }
//     return context;
// };

// const SessionContextProvider = ({ children }) => {
//     const [session, setSession] = useState(initialState);
//     const [isLoggedIn, setIsLoggedIn] = useState(null);

//     useEffect(() => {
//         const session = getItemLocal("session_id");
//         setSession(session);
//         setIsLoggedIn(session !== null);
//     }, []);
//     return (
//         <SessionContext.Provider
//             value={{
//                 session,
//                 setSession,
//                 isLoggedIn,
//                 setIsLoggedIn,
//             }}
//         >
//             {children}
//         </SessionContext.Provider>
//     );
// };

// export { useSessionContext };
// export default SessionContextProvider;

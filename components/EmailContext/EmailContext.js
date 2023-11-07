import React from "react";
const EmailContext = React.createContext({
    email: "",
    setEmail: (email) => {}
})
export default EmailContext;
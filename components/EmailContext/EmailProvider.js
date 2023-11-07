"use client";
import React, { useReducer, useState } from "react";
import EmailContext from "./EmailContext";
const EmailProvider = (props) => {
    console.log("in")
    const [email, setEmail] = useState("")
    const getEmailHandler = (email) => {
       
        setEmail(email)
        console.log(email)
        //return email
    }
    const emailContext = {
        email,
        setEmail: getEmailHandler,
    }
	return (
		<EmailContext.Provider value={emailContext}>
			{props.children}
		</EmailContext.Provider>
	);
};
export default EmailProvider;

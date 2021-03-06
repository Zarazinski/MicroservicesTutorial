import React from "react";
import { useSelector } from "react-redux";
import Account from "./Account";
import Login from "./Login";

const AccountDetails = () => {
    const session = useSelector(state => state.session);

    if (session) return <Account></Account>;

    return <Login />
};

export default AccountDetails;
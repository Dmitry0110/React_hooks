import React from "react";
import CardWrapper from "../../../common/Card";

const withFunctions = (SimpleComponent) => (props) => {
    const isAuth = localStorage.getItem("auth");

    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };

    const onLoginOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <>
            <CardWrapper>
                <SimpleComponent
                    isAuth={isAuth}
                    onLogin={onLogin}
                    onLoginOut={onLoginOut}
                />
            </CardWrapper>
        </>
    );
};

export default withFunctions;

import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLoginOut, isAuth }) => {
    return (
        <>
            {!isAuth ? (
                <button className="btn btn-primary mx-2" onClick={onLogin}>
                    Войти
                </button>
            ) : (
                <button className="btn btn-secondary mx-2" onClick={onLoginOut}>
                    Выйти из системы
                </button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLoginOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;

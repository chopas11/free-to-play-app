import React from 'react';
// @ts-ignore
import s from "./Error.module.css"

const Error = () => {
    return (
        <div className={s.error}>
            Произошла ошибка загрузки данных
        </div>
    );
};

export default Error;
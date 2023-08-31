import React from 'react';
// @ts-ignore
import s from "./MyButton.module.css"

interface MyButtonProps {
    text: string | undefined,
    disabled?: boolean,
}

const MyButton:React.FC<MyButtonProps> = ({text, disabled = false}) => {
    return (
        <button className={s.button}>{text}</button>
    );
};

export default MyButton;
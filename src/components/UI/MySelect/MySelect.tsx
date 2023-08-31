import React from 'react';
import {Select} from "antd";
// @ts-ignore
import s from "./MySelect.module.css"

interface IOptions {
    value: string,
    label: string,
}

interface MySelectProps {
    title: string,
    callback: (value: string)=>void,
    options: IOptions[]
}

const MySelect: React.FC<MySelectProps> = (props) => {
    return (
        <div className={s.select__div}>
            {props.title}
            <Select
                defaultValue={props.options[0].value}
                bordered={false}
                onChange={props.callback}
                options={[...props.options]}

            />
        </div>
    );
};

export default MySelect;
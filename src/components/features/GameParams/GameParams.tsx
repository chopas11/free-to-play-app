import React from 'react';
// @ts-ignore
import s from "./GameParams.module.css"

interface IParams {
    label: string,
    value: string | undefined,
}

interface GameParamsProps {
    params: IParams[],
    rows: number,
}

const GameParams: React.FC<GameParamsProps> = ({params, rows}) => {
    return (
        <div className={s.game__params} style={{gridTemplateColumns: `repeat(${rows}, 1fr)`}}>
            {
                params.map(item => <div key={item.label} className={s.game__params__item}>
                    <span>{item.label}</span>
                    <p>{item.value}</p>
                </div>)
            }
        </div>
    );
};

export default GameParams;
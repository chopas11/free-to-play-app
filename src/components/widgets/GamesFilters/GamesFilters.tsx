import React from 'react';
// @ts-ignore
import s from "./GamesFilters.module.css";
import MySelect from "../../UI/MySelect/MySelect";

interface GamesFiltersProps {
    callbacks: any[]
}

const GamesFilters: React.FC<GamesFiltersProps> = ({callbacks}) => {

    const platformOptions = [
        { value: 'all', label: 'All platforms' },
        { value: 'pc', label: 'Windows (PC)' },
        { value: 'browser', label: 'Browser (Web)' },
    ];
    const genreOptions = [
        { value: '', label: 'All Genres' },
        { value: 'MMORPG', label: 'MMO' },
        { value: 'shooter', label: 'Shooter' },
        { value: 'Strategy', label: 'Strategy' },
        { value: 'Action RPG', label: 'Action RPG' },
    ];
    const sortOptions = [
        { value: 'popularity', label: 'Popularity' },
        { value: 'release_date', label: 'Release Date' },
        { value: 'alphabetical', label: 'Alphabetical' },
    ];

    return (
        <div className={s.filters}>
            <MySelect title="Platform:" callback={callbacks[1]} options={platformOptions} />
            <MySelect title="Genre/Tag:" callback={callbacks[2]} options={genreOptions} />
            <MySelect title="Sort By:" callback={callbacks[0]} options={sortOptions} />
        </div>
    );
};

export default GamesFilters;
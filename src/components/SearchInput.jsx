import React from "react";

export default function SearchInput(props) {

    const { handleSearch } = props;

    return (
        <div>
            <input type="text" placeholder="Search" onChange={e => handleSearch(e.target.value)} />
        </div>
    )
}
import React from "react";

function SearchBar() {
    return (
        <>
            <div className="input-wrapper">
                <input placeholder="Search..." />
                <img src="./src/assets/images/searchicon.svg" id="search-icon"/>
            </div>
        </>
    )

}

export default SearchBar;
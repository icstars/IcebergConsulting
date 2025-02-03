import { useEffect, useState} from 'react';

function SearchBar() {

    return (
        <>
            <div id='searchForm'>
                <form>
                    <input id='searchbox' type='text' name='searchInput' placeholder='Search...' />
                    <input id='submitBtn' type='submit' />
                </form>
            </div>
            <div id='searchResults'>
            </div>
        </>
    )

}

export default SearchBar;
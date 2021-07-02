import React from 'react'

const Search = ({fetchSearch}) => {
    return (
        <div>
            <button onClick={() => fetchSearch()}>Search</button>
        </div>
    )
}

export default Search

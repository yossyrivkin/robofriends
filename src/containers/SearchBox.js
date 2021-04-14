import React from 'react'

const SearchBox = ({ searchchanges }) => {
    return (
        <div>
            <div className="pa2">
                <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots" 
                onChange={searchchanges}
                >
                </input>
            </div>
        </div>
    )
}

export default SearchBox

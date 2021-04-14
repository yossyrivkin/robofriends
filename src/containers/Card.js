import React from 'react'

export const Card = ({ id, name, email }) => {
    return (
        <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5"> 
            <img alt="robot" src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email }</p>
            </div>
        </div>
    )
}

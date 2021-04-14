import React from 'react'
import { Card } from './Card'
// import uniqid from 'module'

// let idMacker = () => uniqid.time()

const CardList = ({ robots }) => {
    
    return (<>{robots.map((user, i) => {
        return <Card
         key={i} 
         id={robots[i].id}  
         name={robots[i].name} 
         email={robots[i].email} />
    })}
    </>)
}

export default CardList

import React from 'react'

const Results = ({searchResults}) => {
    console.log(searchResults)
if(searchResults){
let results = searchResults.shiurList
console.log(results)
    return (
        <div>
            {results && results.map(item => (
                <div>
                    <h1>Lecture title : {item.title}</h1>
                    <h2>Hosted By: {item.speaker}</h2>
                </div>
            )) }
        </div>
    )
} else return (null)
    }
   


export default Results

import React, { useState } from 'react'

const Element = (params) => {
    const {data} = params

    return (
        <div className='element'>
            <div className='movie-info'>
                <p>{data.Type}</p>
                <p className='movie-year'>{data.Year}</p> 
            </div>
            {data.Poster === "N/A" ? <img className='poster' src="https://removal.ai/wp-content/uploads/2021/02/no-img.png" /> :<img className='poster' src={data.Poster} />} 
            
            <h1 className='title'>{data.Title}</h1>
        </div>
    )
}

export default Element
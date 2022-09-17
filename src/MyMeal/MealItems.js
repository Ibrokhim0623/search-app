import React from 'react'

function MealItems(props) {
    console.log(props.data)
    return (
        <>
            <div className='card'>
                <img src={props.data.strMealThumb} />
                <div className='info'>
                    <h2>{props.data.strMeal}</h2>
                    <p>{props.data.strCategory}</p>
                </div>
                <div className='recipe'>
                    <h2>Recipe</h2>
                    <p>{props.data.strInstructions}</p>
                    <img src={props.data.strMealThumb} />
                    <a href={props.data.strYoutube}>View video</a>
                </div>
            </div>
        </>
    )
}

export default MealItems

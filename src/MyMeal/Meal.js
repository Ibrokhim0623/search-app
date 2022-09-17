import React, { useState } from 'react'
import MealItems from './MealItems'
import './style.css'

function Meal() {
    const [search, setSearch] = useState('')
    const [meal, setMeal] = useState()

    const searchMeal = (event) => {
        if(event.key === "Enter"){
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals))

            setSearch("");
        }
    }

    return (
        <div className='main'>
            <div className='header'>
                <h1>Search Your Food Recipe</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore
                    unde sed ducimus voluptates illum!
                </p>
            </div>
            <div className='search-box'>
                <input
                    type='search'
                    placeholder='Enter your food'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyPress={searchMeal}
                />
            </div>
            <div className='container'>
                {
                    (meal == null && meal == undefined) 
                    ? <p className='not'>Not Found</p> 
                    : meal.map((res, key) => {
                        return(
                            <MealItems key={key} data={res} />
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Meal

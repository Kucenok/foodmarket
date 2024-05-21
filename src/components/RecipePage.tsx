import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/recipe.css';

interface Meal {
    idMeal: string;
    strMeal: string;
    strInstructions: string;
    strMealThumb: string;
    strIngredients: string[];
}

const RecipePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [meal, setMeal] = useState<Meal | null>(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(data => {
                const mealData = data.meals[0];
                if (mealData) {

                    const ingredients = [];
                    for (let i = 1; i <= 20; i++) {
                        if (mealData[`strIngredient${i}`]) {
                            ingredients.push(mealData[`strIngredient${i}`] + ' - ' + mealData[`strMeasure${i}`]);
                        }
                    }
                    setMeal({...mealData, strIngredients: ingredients});
                }
            })
            .catch(error => console.error('Error fetching meal:', error));
    }, [id]);

    return (
        <div>
            {meal ? (
                <div>
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
                    <h1>{meal.strMeal}</h1>
                    <p>{meal.strInstructions}</p>
                    <strong>Ingredients:</strong>
                    <ul>
                        {meal.strIngredients && meal.strIngredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            ) : <p>Loading...</p>}
        </div>
    );
};

export default RecipePage;

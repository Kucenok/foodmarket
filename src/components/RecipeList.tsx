import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../styles/recipelist.css';
import { addToCart } from '../redux/store';


interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

const RecipeList: React.FC = () => {
    const [meals, setMeals] = useState<Meal[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched meals:", data.meals);
                setMeals(data.meals);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleAddToCart = (meal: Meal) => {
        console.log("Trying to add to cart:", meal);
        dispatch(addToCart({ id: meal.idMeal, name: meal.strMeal }));
    };

    return (
        <div className="grid-container">
            {meals.map(meal => (
                <div key={meal.idMeal} className="grid-item">
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="img-fluid" />
                    <h3>
                        <Link to={`/meal/${meal.idMeal}`}>{meal.strMeal}</Link>
                    </h3>
                    <button onClick={() => handleAddToCart(meal)}>Add to cart</button>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;

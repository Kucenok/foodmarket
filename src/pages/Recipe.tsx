import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface RecipeType {
    id: number;
    image: string;
    title: string;
    description: string;
    authorImg: string;
}

const Recipe: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const [recipe, setRecipe] = useState<RecipeType | null>(null);

    useEffect(() => {
        if (!id) {
            console.error("No ID provided!");
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`/data/recipes/${id}.json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: RecipeType = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setRecipe(null);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            {recipe ? (
                <div className='row mx-auto my-5'>
                    <img src={recipe.image} alt={recipe.title} className='img-fluid w-100' />
                    <h2>{recipe.title}</h2>
                    <hr />
                    <p>{recipe.description}</p>
                    <h3>Author:</h3>
                    <img src={recipe.authorImg} alt={`Author of ${recipe.title}`} style={{ width: '200px', height: 'auto' }} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Recipe;
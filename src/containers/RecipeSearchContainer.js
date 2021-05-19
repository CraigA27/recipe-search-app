import React from 'react';
import RecipeDetailComponent from '../components/RecipeDetailComponent';
import RecipeListComponent from '../components/RecipeListComponent';
import RecipeSearchComponent from '../components/RecipeSearchComponent';

const RecipeSearchContainer = () => {
    
    return (
        <>
            <RecipeSearchComponent />
            <RecipeListComponent />
            <RecipeDetailComponent />
        </>
    )
}

export default RecipeSearchContainer;
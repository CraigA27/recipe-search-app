import React from 'react';
import RecipeDetailContainer from './RecipeDetailContainer';
import RecipeListContainer from './RecipeListContainer';
import RecipeSearchContainer from './RecipeDetailContainer';


const MainAppContainer = () => {

    return(
        <>
            <RecipeDetailContainer />
            <RecipeListContainer />
            <RecipeSearchContainer />
        </>
    )
}

export default MainAppContainer;
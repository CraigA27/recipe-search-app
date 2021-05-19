import React from 'react';
import RecipeDetailContainer from './RecipeDetailContainer';
import RecipeListContainer from './RecipeListContainer';
import RecipeSearchContainer from './RecipeSearchContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const MainAppContainer = () => {

    return(
        <Router>
        <>
            <section>
                <Switch>
                    <Route exact path="/" component={RecipeSearchContainer} />
                    <Route exact path="/list" component={RecipeListContainer} />
                    <Route exact path="/detail" component={RecipeDetailContainer} />
                </Switch>
                
            </section>
        </>
        </Router>
    )
}

export default MainAppContainer;
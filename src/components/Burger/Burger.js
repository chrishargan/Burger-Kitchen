import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngedients/BurgerIngredients';


const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + 1} type={igKey} />;
            });
        })
        .reduce((array, element) => {
            return array.concat(element)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>let's begin by choosing some ingredients!</p>
    }
    console.log(transformedIngredients);
    return (
        <div className="Burger" >
            <BurgerIngredient type="Bread-Top" />
            {transformedIngredients}
            <BurgerIngredient type="Bread-Bottom" />
        </div>
    );
};
export default burger;
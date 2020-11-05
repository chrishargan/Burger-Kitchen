import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngedients/BurgerIngredients';

const burger = (props) => {
    return (
        <div className="Burger" >
            <BurgerIngredient type="Bread-Top" />
            <BurgerIngredient type="Cheese" />
            <BurgerIngredient type="Meat" />
            <BurgerIngredient type="Bread-Bottom" />
        </div>
    );
};
export default burger;
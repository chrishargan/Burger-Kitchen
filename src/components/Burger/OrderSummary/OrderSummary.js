import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';



const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span> x {props.ingredients[igKey]}
                </li>);
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: £{props.price.toFixed(2)}</strong> </p>
            <p>Continue to Checkout?</p>
            <Button btnType="Success" clicked={props.purchaseContinued}>Proceed</Button>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Go back</Button>
        </Aux>
    )
};

export default orderSummary;
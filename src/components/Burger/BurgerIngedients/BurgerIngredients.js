import React, { Component } from 'react';
import './BurgerIngredients.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('Bread-Bottom'):
                ingredient = <div className="BreadBottom"></div>;
                break;
            case ('Bread-Top'):
                ingredient = (
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                );
                break;
            case ('Meat'):
                ingredient = <div className="Meat"></div>;
                break;
            case ('Onion'):
                ingredient = <div className="Onion"></div>;
                break;
            case ('Pickles'):
                ingredient = <div className="Pickles"></div>;
                break;
            case ('Cheese'):
                ingredient = <div className="Cheese"></div>;
                break;
            case ('Salad'):
                ingredient = <div className="Salad"></div>;
                break;
            case ('Bacon'):
                ingredient = <div className="Bacon"></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
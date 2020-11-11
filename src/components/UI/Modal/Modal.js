import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop display={props.display} clicked={props.modalClosed} />
        <div className="Modal"
            style={{
                transform: props.display ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.display ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;
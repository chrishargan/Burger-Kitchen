import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
// This workaround is importing the
// classes on stylesheets globally
// as normal css classes would be applied.

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="main-content">
            {props.children}
        </main>
    </Aux>

);

export default layout;
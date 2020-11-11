import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
// This workaround is importing the
// classes on stylesheets globally
// as normal css classes would be applied.

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className="main-content">
            {props.children}
        </main>
    </Aux>

);

export default layout;
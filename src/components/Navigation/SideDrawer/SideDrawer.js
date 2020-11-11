import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems';
import './SideDrawer.css';

const sideDrawer = (props) => {
    //...
    return (
        <div className="SideDrawer" >
            <div className="Logo">
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default sideDrawer;
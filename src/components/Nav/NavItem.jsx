import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon';

const NavItem = ({ icon, text, to }) => (
    <li className="nav-item">
        <NavLink exact to={to} activeClassName='is-active'>
            <Icon icon={icon} />
            <span className="nav-item-text">{ text }</span>
        </NavLink>
    </li>
)

export default NavItem;

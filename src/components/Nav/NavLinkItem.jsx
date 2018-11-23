import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon';
import NavItem from './NavItem';

const NavLinkItem = ({ icon, to, className, children }) => (
    <NavItem className={className}>
        <NavLink exact to={to} activeClassName='is-active'>
            <Icon icon={icon} />
            <div className="nav-item-children">{ children }</div>
        </NavLink>
    </NavItem>
)

export default NavLinkItem;

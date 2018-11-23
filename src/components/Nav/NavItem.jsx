import React from 'react';

const NavItem = ({className, children }) => (
    <li className={`nav-item ${className}`}>
        { children }
    </li>
)

export default NavItem;

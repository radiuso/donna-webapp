import React from 'react';
import classnames from 'classnames';
import NavLinkItem from './NavLinkItem';

import './Nav.scss';

const Nav = () => (
    <nav role="navigation" aria-label="main navigation"
        className={classnames({
            'nav': true,
            'is-open': false,
        })}
    >
        <div className="columns">
            <div className="column">
                <ul className="nav-items flex-column">
                    <NavLinkItem icon="users" to="/customers">Clients</NavLinkItem>
                    <NavLinkItem icon="shopping-bag" to="/orders">Commandes</NavLinkItem>
                    <NavLinkItem icon="search" to="/orders">Rechercher</NavLinkItem>
                </ul>
            </div>
            <div className="column is-one-fifth">
            </div>
            <div className="column"></div>
        </div>
    </nav>
);

export default Nav;

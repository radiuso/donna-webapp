import React from 'react';
import classnames from 'classnames';
import NavItem from './NavItem';

import './Nav.scss';

const Nav = () => (
    <nav role="navigation" aria-label="main navigation"
        className={classnames({
            'nav': true,
            'is-open': false,
        })}
    >
        <ul className="nav-items flex-column">
            <NavItem icon="home" text="Accueil" to="/" />
            <NavItem icon="users" text="Clients" to="/customers" />
        </ul>
    </nav>
);

export default Nav;

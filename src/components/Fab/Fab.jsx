import React from 'react';
import './Fab.scss';

const Fab = ({ children }) => (
    <div className="fab-container">
        <button class="button fab">{ children }</button>
    </div>
)

export default Fab;

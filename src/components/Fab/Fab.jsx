import React from 'react'
import './Fab.scss'

const Fab = ({ children, tag, ...rest }) => {
    const Tag = tag || 'button'

    return (
        <div className="fab-container">
            <Tag className="button fab" {...rest}>{ children }</Tag>
        </div>
    )
}

export default Fab

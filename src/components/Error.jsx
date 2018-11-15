import React from 'react'

const Error = ({ error }) => (
    <div>Error: <pre>{JSON.stringify(error, null, 2) }</pre></div>
)

export default Error

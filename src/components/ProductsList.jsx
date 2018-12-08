import React from 'react'

const ProductsList = ({ products, onSelect }) => {
    const items = products.map(product => (
        <div className="box item is-selectable"
            onClick={() => onSelect(product)}
            key={product.id}
        >
            <article className="media">
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{product.label}</strong> <small>{product.category}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">

                </div>
            </article>
        </div>
    ))

    return (
        <div className="item-list">
            {items}
        </div>
    )
}

export default ProductsList

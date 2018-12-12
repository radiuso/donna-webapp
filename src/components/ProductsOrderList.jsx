import React from 'react'

const ProductsOrderList = ({ productsOrder, onSelect }) => {
    const items = productsOrder.map(po => (
        <div className="box item is-selectable"
            onClick={() => onSelect(po)}
            key={po.product.id}
        >
            <article className="media">
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{po.product.label}</strong>
                            <small> {po.product.category}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <p>
                        <strong>{po.quantity}</strong> x <small>{po.unitPrice}</small> = <strong>{po.quantity*po.unitPrice} €</strong>
                    </p>
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

export default ProductsOrderList

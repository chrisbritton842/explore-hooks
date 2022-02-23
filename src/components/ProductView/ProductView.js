import React from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css';
import { useState } from 'react';

function ProductView({ products }) {
    const [sideOpen, setSideOpen] = useState(true);
    const [product, setProduct] = useState();
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className="product-view">
            <div className="product-main-area">
                <h1>Products</h1>
                <div className="product-list">
                    {products.map(item =>
                        <ProductListItem
                            key={item.id}
                            product={item}
                            onClick={() => setProduct(item)}
                            isSelected={product && product.id === item.id}
                        />
                    )}
                </div>
            </div>
            <div className="product-side-panel">
                <div className="product-side-panel-toggle-wrapper">
                    <div className="product-side-panel-toggle"
                         onClick={() => setSideOpen(!sideOpen)}>
                        {sideOpen ? '>' : '<'}
                    </div>
                </div>
                <ProductDetails visible={sideOpen} product={product}/>
            </div>
        </div>
    );
}

export default ProductView;

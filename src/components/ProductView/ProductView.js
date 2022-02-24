import React from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css';
import { useState } from 'react';
import { useEffect } from 'react';

function ProductView({ products }) {
    const [sideOpen, setSideOpen] = useState(JSON.parse(localStorage.getItem('openState')) || false);
    const [product, setProduct] = useState();            // true false
    const [selectedProduct, setSelectedProduct] = useState()
    console.log(sideOpen);
    useEffect(() => {
        localStorage.setItem('openState', `${sideOpen}`)
    }, [sideOpen])

    useEffect(() => {
        if (selectedProduct) {
            setSideOpen(true);
        }
    }, [selectedProduct]);

    useEffect(() => {
        if (!sideOpen) {
            setSelectedProduct();
        }
    }, [sideOpen]);

    return (
        <div className="product-view">
            <div className="product-main-area">
                <h1>Products</h1>
                <div className="product-list">
                    {products.map(item =>
                        <ProductListItem
                            key={item.id}
                            product={item}
                            onClick={() => setSelectedProduct(item)}
                            isSelected={selectedProduct && selectedProduct.id === item.id}
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

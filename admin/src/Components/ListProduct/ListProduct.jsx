import React, { useEffect, useState } from 'react';
import cross_icon from '../../assets/cross_icon.png';
import './ListProduct.css';

const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        try {
            const response = await fetch('http://localhost:4000/allproducts');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setAllProducts(data); // Pass the fetched data to setAllProducts
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, [])

    const removeProduct = async (id)=> {
        await fetch('http://localhost:4000/removeproduct',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }

    return (
        <div className='listproduct'>
            <h1>All Products List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allProducts.map((product, index) => (
                    <div key={index} className="listproduct-format-main listproduct-format">
                        <img src={product.image} alt="" className="listproduct-product-icon" />
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p> {/* Fixed 'nem_price' to 'new_price' */}
                        <p>{product.category}</p>
                        <img onClick={()=>{removeProduct(product.id)}} src={cross_icon} alt="" className="listproduct-remove-icon" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListProduct;

/* eslint-disable react/prop-types */

import ProductsCard from '../ProductsCard/ProductsCard';
import './Products.css'

const Products = ({ loaddata }) => {
    return (
        <div>
            <h2 className="text-5xl text-center my-20">Latest Products</h2>
            <div className="product-container">
                {
                    loaddata.map((item, i) =>

                        <div key={i} className="products mb-20">
                            <ProductsCard item={item} />
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default Products;
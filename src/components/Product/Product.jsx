import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './Product.css'
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/bazarSlice";
import { toast } from "react-toastify";

const Product = () => {
    // get specific data
    const [singleProduct, setSingleProduct] = useState([])
    //quantity
    let [baseQty,setBaseQty] = useState(1);
    // use Redux
    const dispatch = useDispatch();
    const Location = useLocation();
    useEffect(() => {
        setSingleProduct(Location.state)
    }, [Location])

    console.log(singleProduct);
    return (
        <div className="single-product-container">
            <div className="card card-side bg-base-300 shadow-xl my-20">
                <figure><img src={singleProduct.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{singleProduct.title}</h2>
                    <span>{singleProduct.description}</span>
                    <div className="price-button mt-5">
                       Price: <button className="btn btn-primary">${singleProduct.price}</button>
                    </div>
                    <div className="quantity mt-5">
                        Quantity: 
                        <button onClick={()=> setBaseQty(baseQty === 1 ? baseQty = 1 : baseQty - 1)} className="btn btn-neutral mx-4"> - </button>
                        <span className="btn btn-circle"> {baseQty} </span>
                        <button onClick={()=> setBaseQty(baseQty + 1)} className="btn btn-neutral mx-4"> + </button>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={()=> dispatch(addToCart({
                            _id: singleProduct._id,
                            title: singleProduct.title,
                            price:singleProduct.price,
                            quantity: baseQty,
                            category:singleProduct.category,
                            image:singleProduct.image,
                            description:singleProduct.description
                        })) & toast.success(`${singleProduct.title} added to the card`)
                        
                        } className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
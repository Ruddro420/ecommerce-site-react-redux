/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/bazarSlice";
import { toast } from "react-toastify";

const ProductsCard = ({ item }) => {
    const { image, title, description, category, price } = item;
    // Id Collect
    const _id = title;
    const stringId = (_id) => {
        return String(_id).toLowerCase().split(' ').join('');
    }
    const rootId = stringId(_id)
    // Navigate
    const navigate = useNavigate();
    const detailsHandler = () => {
        navigate(`/product/${rootId}`, {
            state: item,
        })
    }
    // add to cart
    const dispatch = useDispatch();

    return (
        <div className="mx-10 ">
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div style={{ cursor: 'pointer' }} onClick={detailsHandler}>
                    <figure><img src={image} alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end mb-5">
                        <div className="badge badge-outline">{category
                        }</div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success">${price}</button>
                        <button onClick={() => dispatch(addToCart({
                            _id: item._id,
                            title: title,
                            price:price,
                            quantity: 1,
                            category:category,
                            image:image,
                            description:description
                        })) & toast.success(`${title} added to the cart`)} className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;
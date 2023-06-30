import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
    const productData = useSelector((state) => state.bazar.productData)
    const userInfo = useSelector((state) => state.bazar.userInfo)
    const [totalPrice, setTotalPrice] = useState('')
    const [payNow, setPayNow] = useState(false);
    useEffect(() => {
        let price = 0;
        productData.map(item => {
            price = price + item.price * item.quantity;
            return price;
        });
        setTotalPrice(price.toFixed(2));
    }, [productData])
    console.log(totalPrice);
    const handleCheckOut = () => {
        if (userInfo) {
            setPayNow(true)
        } else {
            toast.error('Please Login First')
        }
    }
    return (
        <div>
            {
                totalPrice !== '0.00' ? <div className="h-screen bg-gray-100 pt-20">
                    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                        <CartItem />
                        {/* Sub Tototal */}
                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">Subtotal</p>
                                <p className="text-gray-700">${totalPrice}</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <div className="">
                                    <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro laboriosam quasi harum magni in, possimus magnam esse, nemo necessitatibus ex repudiandae sunt expedita fuga quas rerum eligendi corporis. Commodi.</p>
                                </div>
                            </div>
                            <button onClick={handleCheckOut} className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                            {
                                payNow ? <button onClick={handleCheckOut} className="mt-6 w-full rounded-md bg-blue-900 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Pay Now</button> : ' '
                            }

                        </div>
                    </div>
                </div>
                    :
                    <div className="container text-center m-auto">
                        <div className="alert alert-warning text-center my-20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span>Your cart is empty ! please add some product</span>
                            <Link to='/' > go shopping </Link>
                        </div>
                    </div>
            }

        </div>
    );
};

export default Cart;
import axios from "axios";

export async function ProductsData(){
    const products = await axios.get('https://fakestoreapiserver.reactbd.com/products')
    return products;
}
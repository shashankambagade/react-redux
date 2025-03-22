import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async () => {
    try {
        const responce = await axios.get(API_URL);
        return responce.data
    } catch (error) {
        console.log('Error while fetching products', error);
        return [];
    }
}
  
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Iproduct from '../abstractions/Iproduct';
import Istore from '../abstractions/Istore';
import ItrolleyProduct from '../abstractions/ItrolleyProduct';
import Iorder from '../abstractions/Iorder';

axios.defaults.baseURL = 'http://localhost:8080';

const requests = (token:string) => {
    const responseBody = (response: AxiosResponse) => response.data;

    const config:AxiosRequestConfig = {
        headers:{
            'Authorization': `Bearer ${token}`,
        }
    }

    return {
        get: (url: string) => axios.get(url, config).then(responseBody),
        post: (url: string, body: {}) => axios.post(url, body, config).then(responseBody),
        put: (url: string, body: {}) => axios.put(url, body, config).then(responseBody),
        delete: (url: string) => axios.delete(url, config).then(responseBody) 
    }
}

const StoreApi = {
    getList: (): Promise<Istore[]> => requests("").get('/stores'),
    get: (name: string): Promise<Iproduct> => requests("").get(`/store/${name}`),
}

const ProductApi = {
    getList: (storeId:number): Promise<Iproduct[]> => requests("").get(`/products/${storeId}`),
    get: (name: string): Promise<Iproduct> => requests("").get(`/product/${name}`),
}

const WishListApi = {
    getList: (token:string): Promise<Iproduct[]> => requests(token).get(`/wishList`),
    post: (productId: number, token:string) => requests(token).post(`/wishList/${productId}`, {}),
    delete: (productId: number, token:string) => requests(token).delete(`/wishList/${productId}`)
}

const TrolleyProductApi = {
    getList: (token:string): Promise<ItrolleyProduct[]> => requests(token).get(`/trolley`),
    post: (productId: number, token:string) => requests(token).post(`/trolley/${productId}`, {}),
    deleteOne: (productId: number, token:string) => requests(token).delete(`/trolley/${productId}`),
    deleteAll: (productId: number, token:string) => requests(token).delete(`/trolley/all/${productId}`)
}

const OrderApi = {
    getList: (token:string): Promise<Iorder[]> => requests(token).get(`/order`),
    get: (orderId: number, token:string): Promise<Iproduct> => requests(token).get(`/order/${orderId}`),
    post: (address: string, orderProducts:Iproduct[], token:string) => requests(token).post(`/order`, {address, orderProducts}),
    delete: (productId: number, token:string) => requests(token).delete(`/trolley/${productId}`)
}

const ReviewApi = {
    post: (content: string, rate:string, productId:number, token:string) => requests(token).post(`/review`, {rate, content, productId}),
}

const RegisterApi = {
    post: (username: string, password:string, name:string) => requests("").post(`/register`, {username, password, name}),
}

const LoginApi = {
    post: (username: string, password:string) => requests("").post(`/login`, {username, password}),
}

const LogoutApi = {
    post: (token:string) => requests(token).post(`/logout`, {})
}

export {
    ProductApi,
    StoreApi,
    WishListApi,
    TrolleyProductApi,
    OrderApi,
    ReviewApi,
    RegisterApi,
    LoginApi,
    LogoutApi
}
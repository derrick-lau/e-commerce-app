  
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Iproduct from '../abstractions/Iproduct';
import Imenu from '../abstractions/Imenu';
import Istore from '../abstractions/Istore';
import IwishList from '../abstractions/IwishList';
import Itrolley from '../abstractions/Itrolley';
import ItrolleyProduct from '../abstractions/ItrolleyProduct';
import IorderList from '../abstractions/IorderList';
axios.defaults.baseURL = 'http://localhost:8080';


const requests = (token: string | null, withCredentials?:boolean ) => {
    const responseBody = (response: AxiosResponse) => response.data;

    const config:AxiosRequestConfig = {
        withCredentials:withCredentials? true:false,
        headers:{
            'Authorization': `Bearer ${token}`
        }
    }

    if(typeof window !== 'undefined') RefreshToken()

    return {
        get: (url: string) => axios.get(url, config).then(responseBody),
        post: (url: string, body: {}) => axios.post(url, body, config).then(responseBody),
        put: (url: string, body: {}) => axios.put(url, body, config).then(responseBody),
        delete: (url: string) => axios.delete(url, config).then(responseBody) 
    }
}


const StoreApi = () => {
    return {
        getList: (): Promise<Imenu> => requests("").get('/stores'),
        get: (name: string): Promise<Istore> => requests("").get(`/store/${name}`),
    }
}

const ProductApi = () => {
    return {
        getList: (storeId:number): Promise<Iproduct[]> => requests("").get(`/products/${storeId}`),
        get: (name: string): Promise<Iproduct> => requests("").get(`/product/${name}`),
    }
}

const WishListApi = () => {
    const token = window.localStorage.getItem('accessToken')
    return {
        getList: (): Promise<IwishList> => requests(token).get(`/wishList`),
        post: (productId: number) => requests(token).post(`/wishList/${productId}`, {}),
        delete: (productId: number) => requests(token).delete(`/wishList/${productId}`)
    }
}

const TrolleyProductApi = () => {
    const token = window.localStorage.getItem('accessToken')
    return {
        getList: (): Promise<Itrolley> => requests(token, true).get(`/trolley`),
        post: (productId: number) => requests(token, true).post(`/trolley/${productId}`, {}),
        deleteOne: (productId: number) => requests(token, true).delete(`/trolley/${productId}`),
        deleteAll: (productId: number) => requests(token, true).delete(`/trolley/all/${productId}`)
    }
}

const OrderApi = () => {
    const token = window.localStorage.getItem('accessToken')
    return {
        getList: (): Promise<IorderList> => requests(token).get(`/order`),
        get: (orderId: number): Promise<Iproduct> => requests(token).get(`/order/${orderId}`),
        post: (address: string, orderProducts:ItrolleyProduct[]) => requests(token).post(`/order`, {address, orderProducts}),
        delete: (productId: number) => requests(token).delete(`/trolley/${productId}`)
    } 
}

const ReviewApi = () => {
    return {
        post: (content: string, rate:number, productId:number) => requests(window.localStorage.getItem('accessToken')).post(`/review`, {rate, content, productId}),
    }
}

const RegisterApi = () => {
    return {
        post: (username: string, password:string, name:string) => requests("").post(`/register`, {username, password, name}),
    }
}

const LoginApi = () => {
    return {
        post: (username: string, password:string) => requests("").post(`/login`, {username, password}),
    }
}

const LogoutApi = () => {
    return {
        post: () => requests(window.localStorage.getItem('accessToken')).post(`/logout`, {})
    }
}


const RefreshToken = () => {
    axios.post(`/refresh`, {}, { 
        headers:{ 'Authorization': `Bearer ${window.localStorage.getItem('refreshToken')}`} 
    })
    .then((response: AxiosResponse) => response.data)
    .then(token => window.localStorage.setItem('accessToken',token.accessToken) )
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
    LogoutApi,
    RefreshToken
}
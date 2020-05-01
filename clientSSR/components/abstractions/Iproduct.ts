import Ireview from "./Ireview";

export default interface Iproduct {
    id:number;
    productName:string;
    image?:string;
    price:number;
    isInStock?: boolean;
    reviews?: Ireview[];
    store?:string;
    quantity?:string,
    total?:number,
    orderId?:number
}
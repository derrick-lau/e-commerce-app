import Ireview from "./Ireview";

export default interface Iproduct {
    id:number;
    productName:string;
    price:number;
    
    image?:string;
    description?:string
    isInStock?: boolean;
    reviews?: Ireview[];
    store?:string;
    quantity?:number,
    total?:number,
    orderId?:number
}
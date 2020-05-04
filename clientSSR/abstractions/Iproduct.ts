import Ireview from "./Ireview";

export default interface Iproduct {
    id:number;
    productName:string;
    image?:string;
    price:number;
    description?:string
    isInStock?: boolean;
    reviews?: Ireview[];
    store?:string;
    quantity?:number,
    total?:number,
    orderId?:number
}
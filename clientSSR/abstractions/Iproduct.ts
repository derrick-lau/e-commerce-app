import Ireview from "./Ireview";

export default interface Iproduct {
    id:number;
    productName:string;
    price:number;
    isInStock?:boolean;
    image?:string;
    description?:string
    reviews?: Ireview[];
    quantity?:number;

}
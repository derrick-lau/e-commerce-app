import Ireview from "./Ireview";

export default interface Iproduct {
    id:number;
    productName:string;
    price:number;
    image?:string;
    description?:string
    reviews?: Ireview[];

}
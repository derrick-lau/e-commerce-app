import Iproduct from "./Iproduct";


export default interface Istore {
    storeName: string;
    products: Iproduct[];
}

export interface IstoreDirectory {
    id:number;
    image:string;
    storeName: string;
}
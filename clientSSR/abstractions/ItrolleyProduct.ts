export default interface ItrolleyProduct {
    productId:number;
    productName:string;
    image:string;
    quantity:number;
    total:number;
    price:number;
    setSum:Function;
    sum:number;
}
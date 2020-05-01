
import Iproduct from "./Iproduct"

export default interface Iorder {
    id: number,
    userId: number,
    createAt:string,
    payment?:Object,
    address:string,
    orderProducts:Iproduct[]
}
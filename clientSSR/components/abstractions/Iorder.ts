
import Iproduct from "./Iproduct"

export default interface Iorder {
    id: number,
    createAt:string,
    address:string,
    orderProducts:Iproduct[]
}
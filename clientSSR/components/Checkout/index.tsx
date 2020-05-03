
import styles from './index.module.css'
import Custom_input from '../Custom_input'
import Custom_button from '../Custom_button'
import { useState, useEffect } from 'react';
import ItrolleyProduct from '../abstractions/ItrolleyProduct';
import FormLayout from '../custom_form/FormLayout';
import FormTitle from '../custom_form/FormTitle';
import InewOrder from '../abstractions/InewOrder';


const CheckoutForm: React.FC= () => {
    const [trolley, setTrolley] = useState<ItrolleyProduct[]>([]);
    const [newOrder, setNewOrder] = useState<InewOrder>({address:"", paymentMethod:""});
    const [sum, setSum] = useState<Number>(0)

    //did mount
    useEffect( () => 
        setTrolley([
                {
                    productId:1, 
                    productName:"Some product",
                    image:"https://www.amd.com/system/files/2020-02/312735-ryzen-3900x-pib-right-facing-withfan-bg-1260x709.jpg", 
                    quantity:2, 
                    total:30.0
                },{
                    productId:2, 
                    productName:"Some product",
                    image:"https://www.amd.com/system/files/2020-02/312735-ryzen-3900x-pib-right-facing-withfan-bg-1260x709.jpg", 
                    quantity:3, 
                    total:65.0 
                }
            ])
    , [])
    
    //did update
    useEffect(() => {
        let total = 0;
        for (let trolleyProduct of trolley) {
            total += trolleyProduct.total
        } 
        setSum(total)
    },[trolley])
    
    const handleSubmit = async (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        //1. create order & get a orderId
        //2. create orderProducts with the orderId
        console.log(trolley)
        //3.create payment with orderId
        console.log(newOrder)
        setNewOrder({address:"1addd", paymentMethod:"visa"})
        //4. success or error message
        //5. delete trolley
        //6. redirect
    };

    
    const handlePaymentChange = (event:React.ChangeEvent<HTMLFormElement>) => {
        const { value, name } = event.target;
        setNewOrder({ ...newOrder, [name]:value })
    };

    return (
        <FormLayout>
            <FormTitle>Pay your order</FormTitle>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Custom_input label={null} 
                    type='email' 
                    onChange={handlePaymentChange} 
                    autoComplete={"email"} 
                    placeholder='Email' 
                    required
                />
                <Custom_input 
                    label={null} 
                    type='password'  
                    onChange={handlePaymentChange} 
                    placeholder='Password' 
                    autoComplete="off" 
                    required
                />
                <div className={styles.buttons}>
                    <Custom_button type='submit'> 
                        Pay: £ {sum}
                    </Custom_button>
                </div>
            </form>
        </FormLayout>  
    )
}


export default CheckoutForm;

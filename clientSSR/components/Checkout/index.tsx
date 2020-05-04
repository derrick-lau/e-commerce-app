
import styles from './index.module.css'
import Custom_input from '../Custom_input'
import Custom_button from '../Custom_button'
import { useState, useEffect } from 'react';
import ItrolleyProduct from '../abstractions/ItrolleyProduct';
import FormLayout from '../custom_form/FormLayout';
import FormTitle from '../custom_form/FormTitle';
import InewOrder from '../abstractions/InewOrder';
import {useStripe, CardElement, useElements} from '@stripe/react-stripe-js';



const CheckoutForm: React.FC= () => {

    const [trolley, setTrolley] = useState<ItrolleyProduct[]>([]);
    const [newOrder, setNewOrder] = useState<InewOrder>({fullname:"",address:"", cardName:"", cardNumber:"", expirationDate:"",CVV:"" });
    const [sum, setSum] = useState<Number>(0)
    const stripe = useStripe();
    const elements = useElements();

    useEffect( () => { 
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
    }
    , [])
    
    useEffect(() => {
        let total = 0;
        for (let trolleyProduct of trolley) {
            total += trolleyProduct.total
        } 
        setSum(total)
    },[trolley])

    //handle payment validation
    const handlePaymentSubmit = async() => {
        let cardElement;
        if(!stripe|| !elements) return false
        if (elements) cardElement = elements.getElement(CardElement);
        const {error} = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement?cardElement:{token:""},
        });
        if (error) return false
    }

    //handle submit order
    const handleSubmit = async (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!handlePaymentSubmit()) return
        //1. create order & get a orderId
        console.log(newOrder.address)
        //2. create orderProducts with the orderId
        console.log(trolley)
        //4. success or error message
        //5. delete trolley
        //6. redirect
    };

    
    const handleInputChange = (event:React.ChangeEvent<HTMLFormElement>) => {
        const { value, name } = event.target;
        setNewOrder({ ...newOrder, [name]:value })
    };

    return (
       
        <FormLayout>
            <FormTitle>Pay your order</FormTitle>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Custom_input 
                    label={"Full Name"} 
                    type='text' 
                    onChange={handleInputChange} 
                    autoComplete={"name"} 
                    placeholder='fullname' 
                    required
                />
                <Custom_input 
                    label={"Address"} 
                    type='text'  
                    onChange={handleInputChange} 
                    placeholder='address' 
                    autoComplete={"address"} 
                    required
                />
                <Custom_input 
                    label={"Card Details"} 
                    type='text' 
                    onChange={handleInputChange}  
                    placeholder='Name on Card' 
                    autoComplete={"off"} 
                    required
                />
                **Demo: use 4242-4242-4242-4242, 02/24, 000, 00000**
                <div className={styles.card}>
                    <CardElement options={{iconStyle: 'solid', style: {base: {fontSize: '25px'}}}}/> 
                </div>
                
                <div className={styles.buttons}>
                    <Custom_button type='submit' disabled={!stripe}> 
                        Pay: £ {sum}
                    </Custom_button>
                </div>
            </form>
        </FormLayout>
    )
}


export default CheckoutForm;

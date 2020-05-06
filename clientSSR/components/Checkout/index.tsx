
import styles from './index.module.css'
import Custom_input from '../Custom_input'
import Custom_button from '../Custom_button'
import { useState, useEffect } from 'react';
import FormLayout from '../custom_form/FormLayout';
import FormTitle from '../custom_form/FormTitle';
import InewOrder from '../../abstractions/InewOrder';
import {useStripe, CardElement, useElements} from '@stripe/react-stripe-js';
import { TrolleyProductApi, OrderApi } from '../../api';
import Itrolley from '../../abstractions/Itrolley';



const CheckoutForm: React.FC= () => {

    const [trolley, setTrolley] = useState<Itrolley>({trolleyProducts:[]});
    const [newOrder, setNewOrder] = useState<InewOrder>({fullname:"",address:"", cardName:"", cardNumber:"", expirationDate:"",CVV:"" });

    const [sum, setSum] = useState<Number>(0)
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const fetch = async () => {
          setTrolley(await TrolleyProductApi().getList());
        };
        fetch();
      }, []);
    
    useEffect(() => {
        let total = 0;
        for (let trolleyProduct of trolley.trolleyProducts) {
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
        return true
    }

    //handle submit order
    const handleSubmit = async (event:React.ChangeEvent<HTMLFormElement>) => {
        
        event.preventDefault();
        if(!await handlePaymentSubmit()) return
        try {
            await OrderApi().post(newOrder.address, trolley.trolleyProducts)
        } catch(e) {
            return alert(e.response? e.response.data.message: e.toString())
        }
        for(let trolleyProduct of trolley.trolleyProducts) {
            await TrolleyProductApi().deleteAll(trolleyProduct.productId)
        }
        window.location.pathname = "/"
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

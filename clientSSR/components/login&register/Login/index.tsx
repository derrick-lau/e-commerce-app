
import styles from './index.module.css'
import Custom_input from '../../Custom_input'
import Custom_button from '../../Custom_button'
import FormLayout from '../../custom_form/FormLayout'
import { useState } from 'react';
import FormTitle from '../../custom_form/FormTitle';
import { LoginApi } from '../../../api';


const Login: React.FC = () => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    
    const handleSubmit = async (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password } = userCredentials;
        try {
            const res = await LoginApi.post(email, password);
            window.sessionStorage.setItem('token', res.refreshToken)
            window.location.pathname = "/"
        } catch(e) {
            alert(e.response? e.response.data.message: e)
        }
        
    };
    
    const handleChange = (event:React.ChangeEvent<HTMLFormElement>) => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <FormLayout>
            <FormTitle>Sign in with your email and password</FormTitle>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <Custom_input label={null} 
                    type='email' 
                    name='email'
                    onChange={handleChange} 
                    autoComplete={"email"} 
                    placeholder='Email' 
                    required
                />
                <Custom_input 
                    label={null} 
                    type='password'
                    name='password'  
                    onChange={handleChange} 
                    placeholder='Password' 
                    autoComplete="off" 
                    required
                />
                <div className={styles.buttons}>
                    <Custom_button type='submit'> 
                        Sign in 
                    </Custom_button>
                </div>
            </form>
            <Custom_button style={{backgroundColor: "grey"}} onClick={()=>window.location.pathname = "/register"}> 
                Go to Register 
            </Custom_button>
        </FormLayout>  
    )
}


export default Login;

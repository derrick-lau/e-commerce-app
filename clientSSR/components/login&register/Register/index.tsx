
import styles from './index.module.css'
import Custom_input from '../../Custom_input'
import Custom_button from '../../Custom_button'
import FormLayout from '../../custom_form/FormLayout'
import { useState } from 'react';
import FormTitle from '../../custom_form/FormTitle';
import { RegisterApi } from '../../../api';
interface Isign {

}

const Login: React.FC<Isign> = () => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        name:'',
        password: '',
        confirmPassword:''
    });
    
    const handleSubmit = async (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {email, name, password, confirmPassword} = userCredentials;
        if (password !== confirmPassword) {
            return alert("Passwords don't match");
        } else {
            try {
                const res = await RegisterApi.post(email, name, password);
                window.sessionStorage.setItem('token', res.refreshToken)
                window.location.pathname = "/"
            } catch(e) {
                alert(e.response.data.message)
            }
        }
    };
    
    const handleChange = (event:React.ChangeEvent<HTMLFormElement>) => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <FormLayout>
            <FormTitle>Register with your email and password</FormTitle>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <Custom_input label={null} 
                    type='email' 
                    name='email'  
                    onChange={handleChange} 
                    autoComplete={"email"} 
                    placeholder='Email' 
                    required
                />
                <Custom_input label={null} 
                    type='text' 
                    onChange={handleChange} 
                    name='name'  
                    autoComplete={"name"} 
                    placeholder='Name' 
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
                <Custom_input 
                    label={null} 
                    type='password'
                    name='confirmPassword'  
                    onChange={handleChange} 
                    placeholder='Confirm Password' 
                    required
                />
                <div className={styles.buttons}>
                    <Custom_button type='submit'> 
                        Register 
                    </Custom_button>
                </div>
            </form>
            <Custom_button style={{backgroundColor: "grey"}} onClick={()=>window.location.pathname = "/login"}> 
                Go to Log in 
            </Custom_button>
        </FormLayout>  
    )
}


export default Login;

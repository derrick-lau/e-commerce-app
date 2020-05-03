
import styles from './index.module.css'
import Custom_input from '../../Custom_input'
import Custom_button from '../../Custom_button'
import FormLayout from '../../custom_form/FormLayout'
import { useState } from 'react';
import FormTitle from '../../custom_form/FormTitle';
interface Isign {

}

const Login: React.FC<Isign> = () => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    
    const SaveTokenToSession = (token:string) => window.sessionStorage.setItem('token', token)
    
    const handleSubmit = async (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const { email, password } = userCredentials;
        //fetch
        SaveTokenToSession("123")
        window.location.pathname = "/"
    };

    const handleRegister = async (event:React.MouseEvent) => {
        event.preventDefault();
        window.location.pathname = "/register"
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
                    onChange={handleChange} 
                    autoComplete={"email"} 
                    placeholder='Email' 
                    required
                />
                <Custom_input 
                    label={null} 
                    type='password'  
                    onChange={handleChange} 
                    placeholder='Password' 
                    autoComplete="off" 
                    required
                />
                <div className={styles.buttons}>
                    <Custom_button type='submit'> 
                        Sign in 
                    </Custom_button>
                    <Custom_button style={{backgroundColor: "grey"}} onClick={handleRegister}> 
                        Register 
                    </Custom_button>
                </div>
            </form>
        </FormLayout>  
    )
}


export default Login;


import styles from './index.module.css'
import Custom_input from '../Custom_input'
import Custom_button from '../Custom_button'
interface Isign {

}

const Login: React.FC<Isign> = () => {
    // const [state, setstate] = useState(initialState)
    const handleChange = () => {}
    return (
        <section className={styles.loginSection}>
            <span>Sign in with your email and password</span>
            <form className={styles.loginForm}>
                <Custom_input label={null} type='email' onChange={handleChange}  placeholder='Email' required/>
                <Custom_input label={null} type='password'  onChange={handleChange} placeholder='Password' autoComplete="off" required/>
                <div className={styles.buttons}>
                    <Custom_button type='submit' > 
                        Sign in 
                    </Custom_button>
                </div>
            </form>
        </section>  
    )
}


export default Login;

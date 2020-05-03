
import styles from './index.module.css'

const Tbody:React.FC = (props) => 

    <tbody className={styles.tbody}>
      {props.children}
    </tbody>


export default Tbody;

import Header from "../Header";
import styles from './index.module.css'

const Layout:React.FC = (props) => (
  
    <div className={styles.all}>
      <Header/>
      {props.children}
    </div>
  )


export default Layout;


import styles from './index.module.css'

const Table_title:React.FC = (props) => 

    <span className={styles.title}>
      {props.children}
    </span>


export default Table_title;

import styles from './index.module.css'

const Thead:React.FC = (props) => 

    <thead className={styles.tabelHeader}>
      {props.children}
    </thead>


export default Thead;

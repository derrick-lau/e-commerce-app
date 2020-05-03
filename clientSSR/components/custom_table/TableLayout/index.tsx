
import styles from './index.module.css'

const TableLayout:React.FC = (props) => (
  
    <table className={styles.tabel}>
      {props.children}
    </table>
)


export default TableLayout;
